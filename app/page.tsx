
import ProductCategories from "@/components/layout/ProductCategories";
import SolutionCategories from "@/components/layout/SolutionCategories";


import Sliders from "@/app/components/Sliders";
import Videos from "@/app/components/Videos";
import NewProducts from "@/app/components/NewProducts";
import Blogs from "@/app/components/Blogs";
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobilSliders from "./components/MobilSliders";


export default function Home(){
  return (
    <>
      <Header />
      <Sliders />
      <MobilSliders />
      <ProductCategories />
      <SolutionCategories />
      <Videos/>
      <NewProducts />
      <Blogs />
      <Brands />
      <Footer />
    </>
  );
}


