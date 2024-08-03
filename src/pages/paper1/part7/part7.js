import React, { useState } from 'react';
import './part7.scss';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import dataPart7 from '../../../data/paper1/part7';

//const data = dataPart7;
const questionStart = 35;
let pageIndex = 0;
const pageSize = 5;
const LoadData = () => {
  return dataPart7.filter(o => (o.id <= pageIndex * pageSize + pageSize) && (o.id > (pageIndex * pageSize)));
}

export default function Part7() {
  const [data, setData] = useState(LoadData()??[]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const getValues = [value1, value2, value3, value4, value5];
  const setValues = [setValue1, setValue2, setValue3, setValue4, setValue5];



  const SetClassNameCorrectResult = (questionIndex, resultCurrent) => {

    return isSubmit ? data[questionIndex - 1].answer.toUpperCase() === resultCurrent.toUpperCase() ? "answerTrue" : "answerFalse" : "";
  }

  const HandleOnClickChangeTest = (event) => {
    pageIndex = event.target.value;
    setData(LoadData());
    setIsSubmit(false);
    setDefaultValue();
  }
  const setDefaultValue = () => {
    setValues.map((item) => {
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


  return (
    <div className='contentPart7'>
      <div className='question'>
        <div className='clauseA'>
          {/* <p><b>36. </b>This keeps food and drink cold.</p>
          <p><b>36. </b>This keeps food and drink cold.</p> */}
          {
            data.map((item, index) => {
              return (
                <p key={index}><b className='question-item'>{questionStart + index + 1}.</b>{item.content}</p>
              )
            })
          }
        </div>
        <div className='clauseB'>
          {
            data.map((item, index) => {
              return (
                <p key={index}>

                  <span key={index}>
                    {

                      isSubmit ? <b>{item.answer}</b> :

                        [...item.answer].map((it, idx) => {
                          if (idx === 0)
                            return (
                              <b key={idx} className='question-item'>{item.answer[0]}</b>
                            )
                          return (
                            <span key={idx}> _</span>
                          )
                        })
                    }
                  </span>
                </p>
              )
            })
          }

        </div>
      </div>
      {
        renderSelectBox(setData)
      }
      <div className='result'>
        <div className='results'>

          <b>result</b>

          <div className='result-item1'>
            <label>{questionStart + 1}. </label>
            <input className={SetClassNameCorrectResult(1, value1)}
              value={value1} onChange={(event) => { setValue1(event.target.value) }}
            />
          </div>
          <div className='result-item2'>
            <label>{questionStart + 2}. </label>
            <input className={SetClassNameCorrectResult(2, value2)}
              value={value2} onChange={(event) => { setValue2(event.target.value) }}
            />
          </div>
          <div className='result-item3'>
            <label>{questionStart + 3}. </label>
            <input className={SetClassNameCorrectResult(3, value3)}
              value={value3} onChange={(event) => { setValue3(event.target.value) }}
            />
          </div>
          <div className='result-item4'>
            <label>{questionStart + 4}. </label>
            <input className={SetClassNameCorrectResult(4, value4)}
              value={value4} onChange={(event) => { setValue4(event.target.value) }}
            />

          </div>
          <div className='result-item5'>
            <label>{questionStart + 5}. </label>
            <input className={SetClassNameCorrectResult(5, value5)}
              value={value5} onChange={(event) => { setValue5(event.target.value) }}
            />

          </div>


        </div>


      </div>

      <div className='func'>
        <FunctionComponent setIsSubmit={setIsSubmit} />
      </div>

    </div>
  )
}
