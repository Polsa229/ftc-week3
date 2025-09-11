// @flow strict

import * as React from "react";
import Breadcrumb from "../components/Breadcrumb";
import BannerCategorySection from "../components/BannerCategorySection";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <section className="">
      <div className="px-4">
        <Breadcrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Contact", link: "/contact" },
          ]}
        />
      </div>
      <BannerCategorySection />

      <Footer />
    </section>
  );
}

export default ContactPage;
