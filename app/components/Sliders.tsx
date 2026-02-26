
import SliderClient from "./clients/SliderClient";

import { fetchData } from "@/lib/api";

export default async function Sliders() {
  /*
  const res = await fetch('https://www.akfix.com/api/data/sliders/');
  const data = await res.json();
  */

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


const data = await fetchData<Slider[]>('https://www.akfix.com/api/data/sliders/');

  return <SliderClient data={data} />
}