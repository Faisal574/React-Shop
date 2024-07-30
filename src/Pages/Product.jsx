import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HeroPage from "../components/Hero/HeroPage";
import Footer from "../components/Footer/Footer";
import StarRating from "../components/UI/StarRating";
import ProductList from "../components/FeaturedProduct/ProductList";
import { BiMinus, BiPlus } from "react-icons/bi";
import Category from "../Services/Category";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ProductItem from "../components/FeaturedProduct/ProductItem";
import Skeleton from "../components/UI/Skeleton";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Carts from "../Services/Carts";

const Product = () => {
  const [counter,setCounter] = useState(1);

  const {productId,catId,catSubId} = useParams();

  const {data,isLoading}= new useQuery({
    queryKey: ["Product",productId,catId,catSubId],
    queryFn: () => Category.singleProduct(productId,catId,catSubId),
    staleTime: 10 * 1000,
  });


  const [cart,setCart] = useState({
    qty: counter,
    price: data && data?.price,
    product_id:productId,
  });


  const [image,setImage] = useState(null)

  const queryClient = useQueryClient();

  const handlePlusCounter = () => {
    setCounter((counter)=>counter+1);
  }

  const handleMinusCounter = () => {
    if(counter === 1){
      return;
    }
    setCounter((counter)=>counter-1);
  }

  const addImage = (index) => {
    setImage(data.images[index].image_url)
  }

  const mutation = useMutation({
    mutationFn: () => Carts.addToCart(cart),
    onSuccess: (cart, newCart) => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });

  const addToCart = () => {
    mutation.mutate({ ...cart });
  };

  useEffect(()=>{
    setCart((prev)=>({...prev,qty:counter,price:data?.price}))
  },[counter,data])

  return (
    <>
      <Header />
      <HeroPage heading="Product" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-20">
        <div className="container-app">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[55%] w-[100%]">
              <div className=" bg-gray-200">
                <InnerImageZoom src={image ? image : data?.images[0]?.image_url} className="max-h-[800px] min-h-[800px] object-cover" zoomSrc={image ? image : data?.images[0]?.image_url}  />
              </div>

              <div className="flex mt-3 gap-[14px]">
                {data?.images?.map((item,index) => (
                  <img
                  key={index}
                  src={item?.image_url}
                  onClick={()=>addImage(index)}
                    className="w-[165px] h-[150px] object-cover cursor-pointer bg-gray-200"
                  />
                ))}
              </div>
            </div>
            <div className="sm:w-[45%] w-[100%] mt-8">
              <div className="flex flex-col sm:ml-[70px] ml-2">
                <h2 className="text-[36px] font-medium ml-0">
                  {data?.product_title}
                </h2>
                <div className="flex items-center gap-8 mt-5">
                  <div className="flex items-center gap-1">
                    <span className="text-[#bca543] font-bold text-[20px]">
                      5.0
                    </span>
                    <StarRating />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px]">100</span>
                    <span className="text-gray-400 text-[20px]">Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px]">{data?.stock}</span>
                    <span className="text-gray-400 text-[20px]">Sold</span>
                  </div>
                </div>
                <h1 className="text-[36px] font-normal mt-4">
                  {data?.price.toFixed(2)}
                </h1>
                <p className="text-gray-500 text-[20px] mt-3 font-[400] tracking-wide leading-8 break-words w-[115%]">
                  {data?.description}
                </p>
                <div className="mt-8">
                    <form>
                        <select className="font-normal text-[20px] pr-3 text-gray-600 border-gray-200 border-solid border-2 outline-none sm:w-[425px] w-[100%] h-12 text-center uppercase">
                          {
                            data?.variants?.map((item)=>(
                            <option value={item.id} key={item.id}>{item.variant_name}</option>
                          ))}
                        </select>
                    </form>
                    <div className="flex gap-4 mt-8">
                        <button onClick={handlePlusCounter} className="sm:w-12 w-[20%] h-12 flex justify-center items-center text-[20px] bg-white outline-none border-gray-200 border-solid border-2" type="button"><BiPlus/></button>
                        <input type="text" name="counter" value={counter} className="text-center w-[60%] h-12 text-[20px] border-gray-200 border-solid border-2 outline-none"/>
                        <button onClick={handleMinusCounter} className="sm:w-12 w-[20%]  h-12 flex justify-center items-center text-[20px] outline-none bg-white border-gray-200 border-solid border-2" type="button"><BiMinus/></button>
                    </div>
                    <span className="mt-5 block text-xl">8 Peices in Stock</span>
                    <div className="flex flex-col sm:flex-row mt-6 gap-5">
                        <button className="sm:w-40 w-[100%] h-14 rounded-xl bg-black text-white border-gray-600 hover:bg-[#a09634]" type="button" onClick={addToCart}>Add to Cart</button>
                        <button className="sm:w-40 w-[100%] h-14 rounded-xl bg-[#bca543] text-white border-[#bdb371] hover:bg-[#bdb569]" type="button">View Cart</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center py-16">
          <h2 className="text-[42px] font-bold my-2">Related Products</h2>
          <p className="text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            magni?
          </p>
        </div>
          <div className="flex justify-start gap-10 flex-wrap mt-8">
          {!isLoading
            ? data?.catProducts?.map((item, index) => (
                <ProductItem index={index} item={item} />
              ))
            : new Array(12)
                .fill(null)
                .map((_, index) => <Skeleton key={index + 1} />)}
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
