import React, { useState } from 'react';
import './part9.scss';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import dataPart9 from '../../../data/paper1/part9';
import Images from '../../../data/paper1/images/imagePart9';


const questionStart = 50;
let pageIndex = 0;

const LoadData = () => {
  return dataPart9[pageIndex];
}

export default function Part9() {

  const [data, setData] = useState(LoadData());
  const [isSubmit, setIsSubmit] = useState(false);
  const [value0, setValue0] = useState("Cinemax");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  let getValues = [value0, value1, value2, value3, value4, value5];
  let setValues = [setValue0, setValue1, setValue2, setValue3, setValue4, setValue5];



  const SetClasNameAnswer = (index) => {
    if (!isSubmit)
      return;
    if (data.questions[index].answer.toUpperCase() === getValues[index].toUpperCase())
      return "answerTrue";
    return "answerFalse";
  }
  const HandleOnchangeValue = (event, index) => {
    setValues[index](event.target.value);
  }
  const setDefaultValue = ()=>{
    setValues.map((item)=>{
      item("");
    })
  }

  const HandleOnClickChangeTest = (event) => {
    pageIndex = event.target.value;
    setData(LoadData());
    setDefaultValue();
    setValue0(LoadData().questions[0].answer ?? "");
    setIsSubmit(false);
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

  return (
    <>
      <div className='contentPart9'>
        <div className='describe'>
          <img src={Images[data.id -1]}/>
          {/* <div className='info' dangerouslySetInnerHTML={{ __html: data.infomation }}>
          
          </div>
          <div className='mail-info'>
            <div className='mail-header'>
              <div>
                <b>From:</b>
                <input disabled value={data.mailInfo.from} />
              </div>
              <div>
                <b>To:</b>
                <input disabled value={data.mailInfo.to} />
              </div>
            </div>
            <div className='mail-content'>
              {data.mailInfo.content}
            </div>
          </div> */}
        </div>
        <div className='question'>
          <h2> Anna's notes  </h2>
          <h3> Cinema visit </h3>
          <div className='main-question'>

            {/* {Dataates(0,"Name of cinema",value0,setValue0)}
            {Dataates(1,"Activity booked",value1,setValue1)}
            {Dataates(2,"Day",value2,setValue2)}
            {Dataates(3,"Start time",value3,setValue3)}
            {Dataates(4,"Cost per person",value4,setValue4)}
            {Dataates(5,"Place to meet Jed",value5,setValue5)} */}
            {
              data.questions.map((item, index) => {
                return (
                  <div key={index} className='question-item'>
                    <b className='item-title'>{item.content}</b>
                    <b className='item-number'>{index === 0 ? index : index + questionStart}</b>
                    <div className='item-answer'>
                      <span className="currency-symbol">{item.subFirstAnswer}</span>
                      <input
                        className={SetClasNameAnswer(index)}
                        type="text"
                        value={isSubmit ? item.answer : getValues[index]}
                        onChange={(event) => HandleOnchangeValue(event, index)}
                      />
                      <span className="per-hour">{item.sublastAnswer}</span>
                    </div>
                  </div>
                )
              })

            }

          </div>
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
