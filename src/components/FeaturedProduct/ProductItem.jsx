import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import StarRating from "../UI/StarRating";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Carts from "../../Services/Carts";

const ProductItem = ({ index, item }) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const cart = {
    qty: 1,
    price: item?.price,
    product_id: item?.id,
  };

  const mutation = useMutation({
    mutationFn: () => Carts.addToCart(cart),
    onSuccess: (cart, newCart) => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });

  const addToCart = (cart) => {
    mutation.mutate({ ...cart });
  };

  const goToProduct = (productId, catId, subCatId) => {
    navigate(`/product/${productId}/${catId}/${subCatId}`);
  };

  return (
    <>
      <div className="flex-grow">
        <div className="bg-[#eceded] h-[400px] overflow-hidden product-image">
          <div className="bg-[#d4c580] rounded-full m-5 w-[250px] h-[250px] mb-8 opacity-0"></div>
          <img src={item?.images[0]?.image_url} alt="Product-1" className="w-24 h-24" />
          <div className="flex items-center absolute bottom-4 h-11">
            <form>
              <button
                type="button"
                onClick={() => addToCart(cart)}
                className="flex bg-black font-[500] text-white opacity-0 justify-center items-center w-[120px] h-12 hover:bg-[#bfac5a]"
              >
                <PiPlus />
                Add To Cart
              </button>
            </form>
            <button
              type="button"
              onClick={() =>
                goToProduct(item.id, item.category.id, item.subcategory.id)
              }
              className="flex bg-white font-[500] text-black opacity-0 justify-center items-center w-[120px] h-12 hover:bg-[#bfac5a]"
            >
              <BiCart />
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-white h-[auto] shadow-gray-300 p-5">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h5 className="text-gray-400 font-thin text-sm uppercase tracking-wide">
                {item?.product_title}
              </h5>
              <StarRating />
            </div>
            <h2 className="text-xl font-[500] pt-2">{item?.description}</h2>
            <div className="pt-3 flex gap-2">
              <del className="text-xl font-[600] text-gray-300">$12.00</del>
              <span className="text-xl font-[600] text-black">
                ${item?.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
