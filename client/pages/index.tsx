import React, { useEffect, useState } from "react";

function Index() {
  const [message, setMessage] = useState("Loading connection");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // message = 'Loading'
        // once data is retrieved
        // message = data.message
        setMessage(data.message);
        setPeople(data.people);
      });
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-4">

      <div className="bg-slate-800 rounded shadow p-2
      w-xl m-2">
        <h3 className="p-2">Your Room</h3>
        <p>{message}</p>
        </div>

      {people.map((p, index) => (
        <div key={index}>{p}</div>
      ))}
        <div className="bg-slate-800 col-span-3 rounded shadow p-2
        w-xl m-2">

<h3 className="p-2">AI Render</h3>
        </div>
    </div>
  );
}

export default Index;
