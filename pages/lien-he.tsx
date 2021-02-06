import { HotImages } from "../src/models/HotImages";
import { Image } from "../src/models/Image";
import ContactForm from "../src/component/ContactForm/ContactForm";
import React from "react";
import MasterPage from "src/component/website/master/MasterPage";

export default function ContactPage() {
  return (
    <MasterPage title="Liên hệ" pageName="Liên hệ">
      <main id="pContact" className="pContact">
        <ContactForm />
      </main>
    </MasterPage>
  );
}
