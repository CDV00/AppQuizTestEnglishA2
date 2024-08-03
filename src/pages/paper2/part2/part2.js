import React, { useState } from 'react';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import './part2.scss';
import dataPart2 from '../../../data/paper2/part2';
import index from '..';

//const data = dataPart2[1];
const letters = 'ABCDEFGH';
const questionStart = 5;
let testNumber = 0;

const LoadData = () => {
  return dataPart2[testNumber];
}


export default function Part2() {

  const [data, setData] = useState(LoadData());
  const [value0, setValue0] = useState(data.answers[0] ?? "");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  let getValues = [value0, value1, value2, value3, value4, value5];
  let setValues = [setValue0, setValue1, setValue2, setValue3, setValue4, setValue5];

  const HandleOnChangeValue = (event, index) => {
    setValues[index](event.target.value.toUpperCase());
  }
  const SetClasNameAnswer = (index) => {
    if (isSubmit) {
      if (data.answers[index] === getValues[index])
        return "answerTrue";
      else
        return "answerFalse";
    }
    return;
  }

  const HandleOnClickChangeTest = (event) => {
    testNumber = event.target.value;
    setData(LoadData());
    setDefaultValue();
    setIsSubmit(false);
    setValue0(LoadData().answers[0] ?? "")
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
    <div className='content-part-2'>
      <h2>Part 2</h2>
      <div className='main-content'>
        <div className='question'>
          <div className='section-person'>
            <h4>{data.clauseA.title}</h4>
            <ul>
              {
                data.clauseA.persons.map((item, index) => {
                  return (
                    <li>
                      <b>{index === 0 ? index : index + questionStart}.</b>
                      <span>{item}</span>
                      <input
                        disabled={index === 0}
                        className={SetClasNameAnswer(index)}
                        type='text'
                        value={isSubmit ? data.answers[index] : getValues[index]}
                        onChange={(event) => HandleOnChangeValue(event, index)}
                      />
                    </li>
                  )
                })
              }





            </ul>

          </div>
          <div className='section-event'>
            <h4>{data.clauseB.title}</h4>
            <ul>
              {
                data.clauseB.places.map((item, index) => {
                  return (
                    <li>
                      <b>{letters[index]}.</b>
                      <span>{item}</span>
                    </li>
                  )
                })
              }

            </ul>

          </div>



        </div>
        {
          renderSelectBox(setData)
        }
        <div className='func'>
          <FunctionComponent setIsSubmit={setIsSubmit} />
        </div>

      </div>
    </div>
  )
}
