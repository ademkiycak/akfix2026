

import { fetchData } from "@/lib/api";
import SolutionCategoryClient from "./clients/SolutionCategoryClient";

export default async function ProductCategories() {
  /*
  const res = await fetch('http://akfix.akfix.com.tr/api/data/sliders/');
  const data = await res.json();
  */




const data = await fetchData<[]>('http://akfix.akfix.com.tr/public/api/data/categories/solution_categories/');

  return <SolutionCategoryClient data={data} />
}