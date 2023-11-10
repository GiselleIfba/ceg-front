export interface IUser{

    id: string,
    first_name: string,
    last_name: string,
    url_img: string,
    email: string,
    password: string,

}

export type Login = {
email: string,
password: string

}