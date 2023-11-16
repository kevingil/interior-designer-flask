import React, { useState } from "react";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import ImageModal from "@/components/ImageModal";

function Index() {
  return (
    <div className="w-full h-full">
      <ImageModal/>
      <Showcase />
      <Footer/>
    </div>
  );
}

export default Index;
