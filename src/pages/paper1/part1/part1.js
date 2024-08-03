import React, { useState } from 'react';
import dataPart1 from '../../../data/paper1/part1';
import './part1.scss';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';



// const randomNum = Math.floor(Math.random() * 8) + 1;

// let data = dataPart1.filter(o => o.id == 8)[0];

let pageIndex = 0;

const LoadData = () => {
  return dataPart1[pageIndex];
}


export default function Part1() {

  const [data, setData] = useState(LoadData());
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  let setValues = [setValue1, setValue2, setValue3, setValue4, setValue5];

  const HandleOnClickChangeTest = (event) => {
    pageIndex = event.target.value;
    setData(LoadData());
    setDefaultValue();
    setIsSubmit(false);
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

  return (
    <div>
      <h3>PART 1</h3>
      <h3>QUESTIONS 1-5</h3>
      <p>Which notice (A-H) says this (1-5)?</p>
      <p>For questions 1-5, mark the conrrect letter A-H on your answer sheet.</p>
      <br />
      <div className='contentPart1'>
        <div className='question'>
          <div className='clauseA'>
            {
              data.question.clauseA.map((item, index) => {
                return (
                  <p key={item.id}><b>{item.id}. </b>
                    <span dangerouslySetInnerHTML={{ __html: item.content }}></span> {isSubmit && <b>{data.result[index]}</b>}
                  </p>
                )
              })
            }
          </div>
          <div className='clauseB'>
            {
              data.question.clauseB.map((item, index) => {
                return (
                  <p key={item.id}><b>{item.id}. </b>
                    <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                  </p>
                )
              })
            }
          </div>
        </div>

        <div className='result'>
          <div className='results'>
            <div className='result-item0'>
              <span>Result </span>
              <label>0. </label>
              <input
                // style={
                //   isSubmit
                //     ? data.result['0'] === "E"
                //       ? { backgroundColor: 'green' }
                //       : { backgroundColor: 'red' }
                //     : {}
                // }
                value={data.result['0']}
              />
            </div>
            <div className='result-item1'>
              <label>1. </label>
              <input style={
                isSubmit
                  ? data.result['1'] === value1
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value1} onChange={(event) => { setValue1(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item2'>
              <label>2. </label>
              <input style={
                isSubmit
                  ? data.result['2'] === value2
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value2} onChange={(event) => { setValue2(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item3'>
              <label>3. </label>
              <input style={
                isSubmit
                  ? data.result['3'] === value3
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value3} onChange={(event) => { setValue3(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item4'>
              <label>4. </label>
              <input style={
                isSubmit
                  ? data.result['4'] === value4
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value4} onChange={(event) => { setValue4(event.target.value.toUpperCase()) }} />

            </div>
            <div className='result-item5'>
              <label>5. </label>
              <input style={
                isSubmit
                  ? data.result['5'] === value5
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value5} onChange={(event) => { setValue5(event.target.value.toUpperCase()) }} />

            </div>
          </div>


        </div>
        {
          renderSelectBox(setData)
        }
        <br />
        <div className='func'>
          <FunctionComponent setIsSubmit={setIsSubmit} />
        </div>
      </div>
    </div>
  )
}
