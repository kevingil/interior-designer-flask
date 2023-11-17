import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import HomeNav from "@/components/HomeNav";


function Index() {
  let [isShowing, setIsShowing] = useState(false)

  return (
    <div className="w-full h-full">
      <HomeNav/>
      <Showcase />
      <Footer/>
    </div>
  );
}

export default Index;
