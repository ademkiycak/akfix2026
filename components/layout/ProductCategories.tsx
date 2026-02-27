
import { BaseUrl } from "@/lib/baseurl";
import ProductCategoryClient from "./clients/ProductCategoryClient";

import { fetchData } from "@/lib/api";

export default async function ProductCategories() {

const data = await fetchData<[]>(BaseUrl()+'/api/data/categories/product_categories/');

  return <ProductCategoryClient data={data} />
}