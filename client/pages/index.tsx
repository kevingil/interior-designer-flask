import React, { useState } from "react";
import Navigation from '../components/Navigation';
import Sidebar from "../components/Sidebar";
import RenderArea from "../components/RenderArea";
import Showcase from "../components/Showcase";

function Index() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);


  const updateResponse = (api_res: any) => {
    setResponse(api_res);
  };

  return (
    <div className="w-full p-2 sm:px-4">
      <Navigation /> 
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <Sidebar updateResponse={updateResponse} setLoading={setLoading} />
        <RenderArea response={response} loading={loading} />
      </div>
      <Showcase />
    </div>
  );
}

export default Index;
