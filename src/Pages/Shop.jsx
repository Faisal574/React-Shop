import React, { startTransition, useState, useTransition } from "react";
import HeroPage from "../components/Hero/HeroPage";
import Header from "../components/Header/Header";
import ProductItem from "../components/FeaturedProduct/ProductItem";
import { PiPlus } from "react-icons/pi";
import Footer from "../components/Footer/Footer";
import Category from "../Services/Category";
import Product from "../Services/Product";
import Skeleton from "../components/UI/Skeleton";
import FancyError from "../components/UI/FancyError";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useDebounce from "../Hooks/useDebounce";

const Shop = () => {
  const [subToggle, setSubToggle] = useState(null);
  const [price, setPrice] = useState(0);
  const [catId, setCatId] = useState(0);
  const [catSubId, setCatSubId] = useState(0);
  const [filters, setFilters] = useState(false);

  const {debounce} = useDebounce(price,1000)

  const handleSubToggle = (index) => {
    setSubToggle((prev) => (prev === index ? null : index));
  };

  const handleChange = (e) => {
    debounce();
    setFilters(true);
    setPrice(parseFloat(e.target.value));
  };

  const handleCatSubItem = (catId, subCatId) => {
    setFilters(true);
    setCatId(parseInt(catId));
    setCatSubId(parseInt(subCatId));
  };

  const { data: categories } = new useQuery({
    queryKey: ["catSub"],
    queryFn: Category.getAllCateories,
    staleTime: 10 * 1000,
  });

  const {
    data: products,
    error: productError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["shopProducts"],
    queryFn: ({pageParam}) => Product.getAllProducts({pageParam}),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return allPages.length * 3
    },
  });

  const {
    data: filter,
    error: filterError,
    fetchNextPage: filterFetchNextPage,
    hasNextPage: filterHasNextPage,
    isFetchingNextPage: filterIsFetchingNextPage,
    isLoading: isFilterLoading,
    isError: isFilterError,
  } = useInfiniteQuery({
    queryKey: ["filterProducts", catId, catSubId, price],
    queryFn: ({pageParam}) =>
      filters && Category.getAllCategoryProducts({pageParam},catId, catSubId, price),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return allPages.length * 3
    },
    enabled: filters,
  });

  {
    isError ||
      (isFilterError && <FancyError message={productError || filterError} />);
  }

  return (
    <>
      <Header />
      <HeroPage heading="Shop" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-20">
        <div className="container-app flex flex-col sm:flex-row gap-4">
          <div className="sm:w-[35%] w-[100%] mt-6">
            <h2 className="text-[24px] mt-5 text-black font-normal uppercase">
              Categories
            </h2>

            {categories?.map((item, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <div
                  className="flex justify-between items-center h-11 mr-8 mt-4 cursor-pointer uppercase transition-all"
                  onClick={() => handleSubToggle(categoryIndex)}
                >
                  <h5>{item.cat_title}</h5>
                  <PiPlus className="text-[#bfac5a] text-[18px]" />
                </div>
                {subToggle === categoryIndex && (
                  <div className="ml-5">
                    {item.subCategories.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() => handleCatSubItem(item.id, subItem.id)}
                        className="flex flex-col items-start gap-3 h-10 transition-all cursor-pointer"
                      >
                        <span>
                          {subItem.sub_cat_title}
                          {subItem.id}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            <h2 className="text-[24px] mt-5 text-black font-normal uppercase">
              Prices
            </h2>

            <div className="range mr-5 mt-4">
              <input
                type="range"
                id="range"
                step={100}
                min={0}
                max={20000}
                name="price"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between mt-2 mr-4">
              <span>2000</span>
              <span>{price}</span>
              <span>20000</span>
            </div>
          </div>
          {isLoading || isFilterLoading ? (
            <div className="flex justify-start gap-10 w-[100%] flex-wrap mt-8">
              {new Array(8).fill(null).map((_, index) => (
                <Skeleton key={index + 1} />
              ))}
            </div>
          ) : (
            <div className="flex justify-start gap-10 w-[100%] flex-wrap mt-8">
              {!filters
                ? products?.pages?.map((page, index) =>
                    page?.map((item, index) => (
                      <ProductItem key={index} index={index} item={item} />
                    ))
                  )
                : filter.pages?.map((page, index) =>
                    page?.map((item, index) => (
                      <ProductItem key={index} index={index} item={item} />
                    ))
                  )}
            </div>
          )}
        </div>
        {!filters && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              type="button"
              className="text-white ml-72 text-center font-medium text-sm uppercase mt-8 hover:bg-[#706533] transition-all bg-[#bfac5a] w-40 h-14 rounded-sm"
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
        )}

        {filters && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => filterFetchNextPage()}
              disabled={!filterHasNextPage || filterIsFetchingNextPage}
              type="button"
              className="text-white ml-72 text-center font-medium text-sm uppercase mt-8 hover:bg-[#706533] transition-all bg-[#bfac5a] w-40 h-14 rounded-sm"
            >
              {filterIsFetchingNextPage
                ? "Loading more..."
                : filterHasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Shop;
