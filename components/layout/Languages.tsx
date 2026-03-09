import { BaseUrl } from "@/lib/baseurl";
import LanguageMenuClient from "./clients/LanguageMenuClient";
import { fetchData } from "@/lib/api";


export default async function Languages() {


    interface Menus{
      id: number
      parentID: number
      url: string
      title: string
      img_url: string
      sub_language: []
    }

    const data = await fetchData<Menus[]>(BaseUrl()+'/api/data/country/');

  return (
    <LanguageMenuClient data={data} />
  );
}
