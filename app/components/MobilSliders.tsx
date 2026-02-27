import MobileSliderClient from "./clients/MobilSliderClient";
import { fetchData } from "@/lib/api";

export default async function MobilSliders(){

  interface MobilSlider {
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

    const data = await fetchData<MobilSlider[]>('http://akfix.akfix.com.tr/api/data/sliders/')

    return(
       <MobileSliderClient data={data} />
    );
}