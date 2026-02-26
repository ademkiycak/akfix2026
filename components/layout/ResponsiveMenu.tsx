
import { fetchData } from "@/lib/api";
import ResponsiveMenuClient from "./clients/ResponsiveMenuClient";


export default async function ResponsiveMenu() {


      interface Menus{
        id: number
        parentID: number
        url: string
        title: string
        img_url: string
        sub_menu: []
    }

    const data = await fetchData<Menus[]>('https://www.akfix.com/public/api/data/menus/');

  return (
    <ResponsiveMenuClient data={data} />
  );
}
