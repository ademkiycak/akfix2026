

import { fetchData } from "@/lib/api";
import SolutionCategoryClient from "./clients/SolutionCategoryClient";

export default async function ProductCategories() {
  /*
  const res = await fetch('https://www.akfix.com/api/data/sliders/');
  const data = await res.json();
  */




const data = await fetchData<[]>('https://www.akfix.com/public/api/data/categories/solution_categories/');

  return <SolutionCategoryClient data={data} />
}