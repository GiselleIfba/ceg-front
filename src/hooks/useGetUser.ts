import { api } from "@/services/api";
import { IUser } from "@/types/user";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const getUser = (userId: string, token:string): AxiosPromise<IUser> => {
  return api
    .post(`http://localhost:3333/getuser`, {userId}, {
headers:{

    'Authorization': `Bearer ${token}`
}
    })
    .then((response) => response.data);
};

export function useUser(id: string, token:string) {
  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id, token),
    enabled: !!id && !!token,
  });
  return { data, isLoading };
}

