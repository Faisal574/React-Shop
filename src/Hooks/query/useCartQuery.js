import { useQuery } from "@tanstack/react-query";
import Carts from "../../Services/Carts";
import { useEffect } from "react";

const useCartQuery = () => {
  const { data,isLoading,refetch} = useQuery({
    queryKey: ["carts"],
    queryFn: Carts.getCartItems,
    staleTime: 10 * 1000,
  });

  
  useEffect(()=>{
    refetch();
  },[])

  return {
    data,
    isLoading,
    count:data?.data?.count,
  };
};

export default useCartQuery;
