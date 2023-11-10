import { api } from "@/services/api";
import { PropsProduct } from "@/types/product";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const getSearchProduct = async (searchParamsProduct: string) => {
  return api
    .get(`http://localhost:3333/search/value?filter=${searchParamsProduct}`)
    .then((response) => response.data);
};


export function useSearchProducts(params:string){

     const { data, isLoading } = useQuery({
        queryKey: ["products", params],
        queryFn: () => getSearchProduct(params),
        enabled: !!params,
      });
      return { data, isLoading };

}