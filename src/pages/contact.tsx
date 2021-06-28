import React from "react";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import { logoNavND } from "../components/NdLogo.js";

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Contact {...logoNavND} />
    </>
  );
};

export default ContactPage;
