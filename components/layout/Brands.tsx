
import { fetchData } from "@/lib/api";
import BrandList from "./clients/BrandClient";
import { BaseUrl } from "@/lib/baseurl";



export default async function Brands(){

    const data = await fetchData<[]>(BaseUrl()+"/public/api/data/brands/");

    return <div className="w-full h-auto p-3 bg-gray-100 mb-20">


        <BrandList brands={data} />
      

      </div>

}







