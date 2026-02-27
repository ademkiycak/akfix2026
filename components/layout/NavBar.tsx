
import { BaseUrl } from "@/lib/baseurl";
import MenuClient from "./clients/MenuClient";
import { fetchData } from "@/lib/api";

export default async function NavBar() {

      interface Menus{
        id: number
        parentID: number
        url: string
        title: string
        img_url: string
        sub_menu: []
    }

    const data = await fetchData<Menus[]>(BaseUrl()+'/api/data/menus/');


    return(
     <>
        <MenuClient data={data} />
     </>
    );
}