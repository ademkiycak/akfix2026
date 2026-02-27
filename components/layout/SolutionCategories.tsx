

import { fetchData } from "@/lib/api";
import SolutionCategoryClient from "./clients/SolutionCategoryClient";
import { BaseUrl } from "@/lib/baseurl";

export default async function ProductCategories() {


const data = await fetchData<[]>(BaseUrl()+'/api/data/categories/solution_categories/');

  return <SolutionCategoryClient data={data} />
}