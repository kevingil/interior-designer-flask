import React, { useState } from "react";
import Navigation from '../components/Navigation';
import Sidebar from "../components/Sidebar";
import RenderArea from "../components/RenderArea";

function Index() {
  const [response, setResponse] = useState(null);

  const updateResponse = (responseData: any) => {
    setResponse(responseData);
  };

  return (
    <div className="h-full px-2">
      <Navigation /> 
      <div className="flex flex-col-reverse sm:flex-row auto-cols-max">
        <Sidebar updateResponse={updateResponse} />
        <RenderArea response={response} />
      </div>
    </div>
  );
}

export default Index;
