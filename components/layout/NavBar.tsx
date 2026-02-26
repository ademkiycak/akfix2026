
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

    const data = await fetchData<Menus[]>('https://www.akfix.com/public/api/data/menus/');


    return(
     <>
        <MenuClient data={data} />
     </>
    );
}