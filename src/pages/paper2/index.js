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

  const buttons = Array.from({ length: 5 }, (_, i) => i+1);

  // useEffect(() => {
  //   if(location.pathname === "/paper1/part0")
  //     navigate("/paper1")
  // }, []);


  return (
    <div className='main-paper1'>
      <div>
        <h2>PAPER 2 LISTENING</h2>
        <span>(approximately 30 minutes including 8 minutes transfer time)</span>
      </div>

      <div id='content'>
        {
          location.pathname === "/paper2" &&
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
