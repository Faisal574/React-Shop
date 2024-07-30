import React, { useState } from "react";
import Carts from "../../Services/Carts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CartItem = ({ data }) => {

  const queryClient = useQueryClient();

  const [qty,setQty] = useState({
    id:null,
    qty:null,
    product_id:null
  });

  const mutation = useMutation({
    mutationFn:() => Carts.updateCart(qty),
    onSuccess: (cart,newCart) => {
      queryClient.invalidateQueries({
        queryKey:['carts']
      })
    },
  })

  const mutationRemove = useMutation({
    mutationFn:() => Carts.deleteCart(qty.id),
    onSuccess: (cart,newCart) => {
      queryClient.invalidateQueries({
        queryKey:['carts']
      })
    },
  })

  const updateItem = (e,id,product_id) => {
    setQty({id:id,qty:e.target.value,product_id})
    mutation.mutate({...qty});
  }

  const removeItem = (id) => {
    delete qty.qty;
    delete qty.price;
    setQty({id:id})
    mutationRemove.mutate(qty.id);
  }

  return (
    <table className="w-full h-700px table-auto border-collapse">
      <thead className="bg-[#bfac5a] h-20 text-[20px] text-white">
        <tr>
          <th></th>
          <th>No</th>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="bg-white w-[100%]">
        {data &&
          data?.length > 0 &&
          data?.map((item, index) => (
            <tr className="h-[200px] border-b-2 border-solid border-gray-200 last-of-type:border-b-0">
              <td className="">
                <div onClick={()=>removeItem(item.id)} className="bg-[#bfac5a] w-7 h-7 mx-auto flex justify-center items-center cursor-pointer text-white">
                  x
                </div>
              </td>
              <td className="text-center text-[20px]">{index + 1}</td>
              <td className="mx-auto">
                <img
                  src={item.product.images[0].image_url}
                  className="w-[150px] h-[120px] mx-auto"
                />
              </td>
              <td className="text-center text-[20px]">{item.product_title} </td>
              <td className="text-center text-[20px]">{item.price}</td>
              <td className="text-center text-[20px]">
                <input
                  type="number"
                  name="qty"
                  value={item.qty}
                   onChange={(e) =>
                    updateItem(e,item.id,item.product_id)
                  }
                  className="text-center text-[20px] h-12 w-48 outline-none border-gray-200 border-solid border-2"
                />
              </td>
              <td className="text-center text-[20px]">
                {item.price * item.qty}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CartItem;
