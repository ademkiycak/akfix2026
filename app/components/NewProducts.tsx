import { fetchData } from "@/lib/api";
import NewProductClient from "./clients/NewProductClient";
import { BaseUrl } from "@/lib/baseurl";


export default async function NewProducts() {

    const data = await fetchData<[]>(`${BaseUrl()}/api/data/new_products`);
    
    return (
        <NewProductClient data={data} />
    );

}



