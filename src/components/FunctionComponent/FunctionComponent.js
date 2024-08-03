import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import './FunctionComponent.scss';

export default function FunctionComponent(props) {

  const navigate = useNavigate();
  const location = useLocation();
  let pathCurrent = location.pathname;
  
  const partNunber = pathCurrent.length === 14 ? ((pathCurrent[pathCurrent.length - 2]+pathCurrent[pathCurrent.length - 1])-0) : (pathCurrent[pathCurrent.length - 1]-0);
  // console.log(partNunber)


  const handleOnclickPreviou = () => {
    if(pathCurrent.length === 14)
      pathCurrent = pathCurrent.substring(pathCurrent.length - 2, 1) + (partNunber - 1);
    else
      pathCurrent = pathCurrent.substring(pathCurrent.length - 1, 1) + (partNunber - 1);

    navigate("/" + pathCurrent);
  }
  const handleOnclickNext = () => {

    pathCurrent = pathCurrent.substring(pathCurrent.length - 1, 1) + (partNunber - 0 + 1);

    navigate("/" + pathCurrent);
  }

  const HandleOnSubmit = () => {
    props.setIsSubmit(true);
  }
  
  const HandleOnUnSubmit = () => {
    props.setIsSubmit(false);
  }

  const checkBtnNext=()=>{
    return !((partNunber-0) < 10);
  }
  const checkBtnPreviou=()=>{
    return !((partNunber-0) > 1);
  }

  return (
    <>
      <button disabled={checkBtnPreviou()} className='previou' onClick={handleOnclickPreviou}> {"<"} Previou</button>

      <button className='submit' onClick={HandleOnSubmit}>submit</button>
      <button className='unSubmit' onClick={HandleOnUnSubmit}>Un Submit</button>

      <button disabled={checkBtnNext()} className='next' onClick={handleOnclickNext}>Next {">"}</button>
    </>
  )
}
