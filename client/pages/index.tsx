import React from "react";
import Navigation from '../components/Navigation';
import Sidebar from "../components/Sidebar";
import RenderArea from "../components/RenderArea";

function Index() {
  return (
    <div className="w-full h-full">
      <Navigation /> 
      <div className="w-full h-full grid grid-cols-4">
      <Sidebar/>
      <RenderArea/>
        </div>
    </div>
  );
}

export default Index;
