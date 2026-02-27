
import ProductCategoryClient from "./clients/ProductCategoryClient";

import { fetchData } from "@/lib/api";

export default async function ProductCategories() {
  /*
  const res = await fetch('http://akfix.akfix.com.tr/api/data/sliders/');
  const data = await res.json();
  */




const data = await fetchData<[]>('http://akfix.akfix.com.tr/public/api/data/categories/product_categories/');

  return <ProductCategoryClient data={data} />
}