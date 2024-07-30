import React from "react";
import ProductItem from "./ProductItem";
import Product from "../../Services/Product";
import Skeleton from "../UI/Skeleton";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
  const { data: products, isLoading } = new useQuery({
    queryKey: ["featuredProduct"],
    queryFn: Product.getAllFeaturedProducts,
    staleTime: 10 * 1000,
  });

  return (
    <section className="bg-[#f8f9fa] w-full h-[auto] py-24">
      <div className="container-app">
        <div className="mx-auto text-center">
          <h2 className="text-[42px] font-bold my-2">New Shoes Arrival</h2>
          <p className="text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            magni?
          </p>
        </div>
        <div className="flex justify-start gap-10 flex-wrap mt-8">
          {!isLoading && products && products?.length > 0
            ? products?.map((item, index) => (
                <ProductItem index={index} item={item} />
              ))
            : new Array(12)
                .fill(null)
                .map((_, index) => <Skeleton key={index + 1} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
