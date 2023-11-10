
export interface PropsProduct {
  id: string;
  name: string;
  url_img: string[];
  price_in_cent: number;
  category: string;
  desc?: string;
  subCategory: string;
  options: string[];
  storeId: string;
  stars: number;
  review_numbers: number;
}

export interface PropsCartProduct extends PropsProduct {
  quatity: number;
}
