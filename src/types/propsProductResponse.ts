import { IComments } from "./comments";
import { PropsProduct } from "./product";
import { PropsStore } from "./store";
import { IUser } from "./user";

export interface PropsProductResponse{

    product: PropsProduct;
    productStore: PropsStore;
    productComments: IComments[],
    T: IUser[]
}