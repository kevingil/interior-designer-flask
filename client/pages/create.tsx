import React, { useState } from "react";
import Navigation from '../components/Navigation';
import Sidebar from "../components/Sidebar";
import RenderArea from "../components/RenderArea";
import Footer from "../components/Footer";

function Create() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);


  const updateResponse = (api_res: any) => {
    setResponse(api_res);
  };

  return (
    <div className="w-full h-full">
      <Navigation /> 
      <div className="flex flex-col-reverse sm:flex-row gap-2 max-w-[900px] mx-auto">
        <RenderArea response={response} loading={loading} />
        <Sidebar updateResponse={updateResponse} setLoading={setLoading} />
      </div>
      <Footer/>
    </div>
  );
}

export default Create;
