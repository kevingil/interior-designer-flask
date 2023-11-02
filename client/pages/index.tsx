import React from "react";
import Navigation from '../components/Navigation';
import Sidebar from "../components/Sidebar";
import RenderArea from "../components/RenderArea";

function Index() {
  return (
    <div className="h-full px-2">
      <Navigation /> 
      <div className="flex flex-col-reverse sm:flex-row auto-cols-max">
      <Sidebar/>
      <RenderArea/>
        </div>
    </div>
  );
}

export default Index;
