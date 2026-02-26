
import ProductCategoryClient from "./clients/ProductCategoryClient";

import { fetchData } from "@/lib/api";

export default async function ProductCategories() {
  /*
  const res = await fetch('https://www.akfix.com/api/data/sliders/');
  const data = await res.json();
  */




const data = await fetchData<[]>('https://www.akfix.com/public/api/data/categories/product_categories/');

  return <ProductCategoryClient data={data} />
}