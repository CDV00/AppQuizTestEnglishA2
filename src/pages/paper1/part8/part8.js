import React, { useState } from 'react';
import './part8.scss';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import dataPart8 from '../../../data/paper1/part8';

//const data = dataPart8[1];
let pageIndex = 0;
let questionStart = 40;
const LoadData = (setData) => {
  return dataPart8[pageIndex];
}

export default function Part8() {
  const [data, setData] = useState(LoadData());
  const [value0, setValue0] = useState(data.correctAnswer[0]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const getValues = [value0, value1,value2,value3,value4,value5, value6,value7,value8,value9,value10];
  const setValues = [setValue0 ,setValue1, setValue2, setValue3, setValue4, setValue5,setValue6,setValue7,setValue8,setValue9,setValue10];



  const SetClassNameCorrectResult = (questionIndex, resultCurrent) => {

    return isSubmit ? data.correctAnswer[questionIndex] === resultCurrent ? "answerTrue" : "answerFalse" : "";
  }

  const AnswerComponent = (questionIndex, resultCurrent, setMethod) => {
    return (
      <div className={'result-item'}>
        <label>{questionIndex === 0 ? questionIndex : questionStart + questionIndex}. </label>
        <input className={SetClassNameCorrectResult(questionIndex, resultCurrent)}
          value={resultCurrent} onChange={(event) => { setMethod(event.target.value) }}
        />
      </div>
    )
  }

  const HandleOnClickChangeTest = (event) => {
    pageIndex = event.target.value;;
    console.log(pageIndex);
    setData(LoadData());
    setIsSubmit(false);
    setDefaultValue();
    
    setValue0(LoadData().correctAnswer[0] ?? "");
  }
  const setDefaultValue = ()=>{
    setValues.map((item)=>{
      item("");
    })
  }
  const renderSelectBox = () => {
    const options = [];
    for (let i = 0; i < 8; i++) {
      options.push(
        <option
          key={i}
          value={i}

        >
          Test {i + 1}
        </option>
      );
    }

    return (
      <select name="cars" id="cars" onChange={(event) => HandleOnClickChangeTest(event)}>
        {options}
      </select>
    );
  }


  let i = 41;
  let a = 0;
  return (
    <>
      <div className='contentPart8'>
        <div className='post'>
          Dear Giulia,

          {
            data.post.contents.map((item, index) => {
              return (
                <p>
                  {item.section.map((it, idx) => {
                    return (
                      <span>
                        {
                          idx === 0 ? ""
                            : isSubmit ? <b> {data.correctAnswer[a++]} </b>
                              : (index === 0 && idx === 1)
                                ? <b> (0)............... </b>
                                : <b> ({i++})............... </b>
                        }
                        <>{it}</>
                      </span>
                    )
                  })}
                </p>
              )
            })
          }

          Love

          Sumniya
        </div>
        <div className='answer'>

          {AnswerComponent(0, value0, setValue0)}
          {AnswerComponent(1, value1, setValue1)}
          {AnswerComponent(2, value2, setValue2)}
          {AnswerComponent(3, value3, setValue3)}
          {AnswerComponent(4, value4, setValue4)}
          {AnswerComponent(5, value5, setValue5)}
          {AnswerComponent(6, value6, setValue6)}
          {AnswerComponent(7, value7, setValue7)}
          {AnswerComponent(8, value8, setValue8)}
          {AnswerComponent(9, value9, setValue9)}
          {AnswerComponent(10, value10, setValue10)}


        </div>
      </div>
      {
        renderSelectBox(setData)
      }
      <div className='func'>
        <FunctionComponent setIsSubmit={setIsSubmit} />
      </div>
    </>

  )
}
