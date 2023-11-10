import { PropsProduct } from "./product";

export interface PropsStore {
  id: string;
  name: string;
  email: string;
  password: string;
  url_img: string;
  cnpj: number;
  desc?: string;
  products: PropsProduct[];
}
