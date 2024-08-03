import React, {useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';
import { useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const HandleOnClickPart = (numberPart)=>{
    // console.log(location.pathname + "/part"+numberPart);
    //console.log(numberPart);
    navigate(location.pathname + "/part"+numberPart)
  }

  const buttons = Array.from({ length: 9 }, (_, i) => i+1);

  // useEffect(() => {
  //   if(location.pathname === "/paper1/part0")
  //     navigate("/paper1")
  // }, []);


  return (
    <div className='main-paper1'>
      <div>
        <h2>PAPER 1  READING AND WRITING</h2>
        <span>(1 hour 10 minutes)</span>
      </div>

      <div id='content'>
        {
          location.pathname === "/paper1" &&
          <div className='parts'>
            {buttons.map((number) => (
              <button key={number}  onClick={()=>{HandleOnClickPart(number)}}>Part {number}</button>
            ))}
          </div>
        }
        <Outlet />
      </div>
    </div>
  )
}
