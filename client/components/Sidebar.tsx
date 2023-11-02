import React, { useEffect, useState } from 'react';

function SideBar() {
    const [message, setMessage] = useState("Loading connection");
    const [array, setArray] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/api/home")
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message);
          setArray(data.array);
        })
        .catch((error) => {
          console.error('API call error:', error);
          setMessage('API is offline')
        });
    }, []);
  
    return (
        <aside className="bg-slate-800 rounded shadow p-2 w-xl m-2">
            <div >
                <h3 >Your Space</h3>
                {array.map((a, index) => (
        <div key={index}>{a}</div>
      ))}
                <p className="p-1">{message}</p>
            </div>
        </aside>
    );
}

export default SideBar;
