
import { BaseUrl } from "@/lib/baseurl";
import SliderClient from "./clients/SliderClient";

import { fetchData } from "@/lib/api";

export default async function Sliders() {


  interface Slider {
    ID: string
    title: string
    description: string
    img_url: string
    page_url: string
    rank: string
    isActive: string
    createdAt: string
    language: string
  }


const data = await fetchData<Slider[]>(BaseUrl()+'/api/data/sliders/');

  return <SliderClient data={data} />
}