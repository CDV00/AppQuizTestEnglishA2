import React, { useState } from 'react';
import './part1.scss';
import dataPart1 from '../../../data/paper2/part1';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import Images from '../../../data/paper2/images/imagePart1';

const randomNum = Math.floor(Math.random() * 8) + 1;
//const data = dataPart1.filter(o => o.id <= (randomNum * 5) && o.id > (randomNum * 5 - 5));

let pageIndex = 0;
const pageSize = 5;

const LoadData = () => {
    return dataPart1.filter(o=>o.id<=(pageIndex*pageSize+pageSize) && o.id >pageIndex*pageSize);
}

export default function Part1() {

  const [data, setData] = useState(LoadData());
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  let getValues = [value1, value2, value3, value4, value5];
  let setValues = [setValue1, setValue2, setValue3, setValue4, setValue5];

  const checkBoxCheck = (answer, answerCurrent, value) => {
    console.log("answer: " + answer + "| answerCurrent: " + answerCurrent + " | value: " + value)
    if (!isSubmit)
      return answerCurrent === value;
    if (answer === answerCurrent)
      return true;
    else if (isSubmit && value.length > 0 && value === answerCurrent && answer != value)
      return true;
    return false;
  }

  const SetClasNameAnswer = (index, answer, answerCurrent) => {
    if (!isSubmit)
      return;
    if (answer === answerCurrent)
      return "answerTrue";
    if (getValues[index].length > 0 && getValues[index] === answerCurrent && getValues[index] !== answer)
      return "answerFalse";
    return;
  }

  const handleOncheck = (index, answerCurrent) => {
    setValues[index](answerCurrent);
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
    <div className='content-part-1'>
      <h2>Part 1</h2>
      <div className='main-content'>
        <div className='question'>

          {
            data.map((item, index) => {
              return (
                <div className='question-item'>
                  <p><b>{index + 1}. </b> {item.content}</p>
                  <img
                    src={Images[item.id-1]}
                    alt="Girl in a jacket"
                    loading="lazy"
                  />

                  <ul>
                    <li>
                      <label>A</label>
                      <input
                        type="checkbox"
                        name="answer"
                        value="A"
                        onClick={() => handleOncheck(index, "A")}
                        checked={checkBoxCheck(item.answer, "A", getValues[index])}
                        className={SetClasNameAnswer(index, item.answer, "A")}

                      />
                    </li>
                    <li>
                      <label>B</label>
                      <input
                        type="checkbox"
                        name="answer"
                        value="B"
                        onClick={() => handleOncheck(index, "B")}
                        checked={checkBoxCheck(item.answer, "B", getValues[index])}
                        className={SetClasNameAnswer(index, item.answer, "B")}

                      />
                    </li>
                    <li>
                      <label>C</label>
                      <input
                        type="checkbox"
                        name="answer"
                        value="C"
                        onClick={() => handleOncheck(index, "C")}
                        checked={checkBoxCheck(item.answer, "C", getValues[index])}
                        className={SetClasNameAnswer(index, item.answer, "C")}

                      />
                    </li>
                  </ul>
                </div>
              )
            })
          }


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
