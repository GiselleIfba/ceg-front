import { api } from "@/services/api";
import { useQuery } from "react-query";

const getProducts = async () => {
   const url = process.env.REACT_APP_URL || "https://api-ceg-shop.onrender.com"
  console.log('url é:', url)
  return api
    .get( `${url}/produtos` || "https://api-ceg-shop.onrender.com/produtos")
    .then((response) => response.data);
};

export function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading };
}
