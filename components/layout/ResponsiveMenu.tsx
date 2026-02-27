
import { fetchData } from "@/lib/api";
import ResponsiveMenuClient from "./clients/ResponsiveMenuClient";
import { BaseUrl } from "@/lib/baseurl";


export default async function ResponsiveMenu() {


      interface Menus{
        id: number
        parentID: number
        url: string
        title: string
        img_url: string
        sub_menu: []
    }

    const data = await fetchData<Menus[]>(BaseUrl()+'/api/data/menus/');

  return (
    <ResponsiveMenuClient data={data} />
  );
}
