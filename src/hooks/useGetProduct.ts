import { api } from "@/services/api";
import { PropsProductResponse } from "@/types/propsProductResponse";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const getProduct = (productId: string): AxiosPromise<PropsProductResponse> => {
  const url = process.env.REACT_APP_URL || "https://api-ceg-shop.onrender.com"
  console.log('url:', `${url}/${productId}`)
  return api
    .get(`${url}/produtos/${productId}` || `https://api-ceg-shop.onrender.com/${productId}` )
    .then((response) => response.data);
};

export function useProduct(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });
  return { data, isLoading };
}
