
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
import { SiteUrl } from "@/lib/baseurl";
import { SEO, SiteGeneralInfo } from "@/lib/seo";





export default function Home(){


  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SEO.siteName,
    url: `${SiteUrl()}/`,
    description: SEO.description,
    about: {
      "@type": "Organization",
      name: "Akkim Yapı Kimyasalları A.Ş.",
      url: "https://www.akkim.net",
      //logo: "https://www.akfix.com/logo.png",
      sameAs: SiteGeneralInfo.socialMediaAddress,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SiteGeneralInfo.phone,
        contactType: "Contact Information",
        email: SiteGeneralInfo.email,
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"]
      },
      brand: {
        "@type": "Brand",
        name: "Akfix"
      }
    }
  };




  return (
    <>

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
          }}
      />


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


