
import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import { SEO } from "@/lib/seo";
import { SiteUrl } from "@/lib/baseurl";



export function generateMetadata() {
  return {
    title: "Contact",
    openGraph: {
      title: "Contact",
      url: `${SEO.siteUrl}`,
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      title: "Contact",
      images: [
        {
          url: `${SiteUrl()}/images/og.jpg`,
          width: 1200,
          height: 630
        }
      ]
    },

    alternates: {
      canonical: `/contact`
    }
  }
}


export default function Contact(){

  return (
    <>
      <Header />

      <Breadcrumb
        title="Contact"
        color="192, 0, 32"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/akfix" },
          { label: "Contact", href: "/contact", active: true }
        ]}
      />


      {/* Contact */}
      <section className="w-full lg:container mx-auto p-5 mt-10 mb-20 flex justify-between flex-col lg:flex-row gap-15 lg:gap-20">

        <ContactInfo />
        <ContactForm />

      </section>

      
      <Brands />
      <Footer />
    </>
  );
}







