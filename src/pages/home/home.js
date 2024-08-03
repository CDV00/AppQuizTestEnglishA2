import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();


  const HandleOnClickGoToPaper =(number)=>{
    navigate("/paper"+number);
  }

  return (
    <div>
      <button onClick={()=>{HandleOnClickGoToPaper(1)}}>Paper 1</button>
      <button onClick={()=>{HandleOnClickGoToPaper(2)}}>Paper 2</button>
    </div>
  )
}
