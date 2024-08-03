import React, { useState } from 'react';
import './part2.scss';
import dataPart2 from '../../../data/paper1/part2';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';

// const generateRandomNumbers = () => {
//   let randomNumbers = new Set();
//   while (randomNumbers.size < 5) {
//     const randomNum = Math.floor(Math.random() * 20) + 1;
//     randomNumbers.add(randomNum);
//   }
//   return Array.from(randomNumbers);
// };

// let ids = generateRandomNumbers();

// const data = dataPart2.filter(item => ids.includes(item.id));


let pageIndex = 0;
const pageSize = 5;

const LoadData = () => {
    return dataPart2.filter(o=>o.id<=(pageIndex*pageSize+pageSize) && o.id >pageIndex*pageSize);
}




function Part2() {



  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(LoadData());
  const getValues = [value1,value2,value3,value4,value5];
  const setValues = [ setValue1, setValue2, setValue3, setValue4, setValue5];

  const HandleOnClickChangeTest = (event)=>{
    pageIndex = event.target.value;
    setData(LoadData());
    setIsSubmit(false);
    setDefaultValue();
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
                Test {i+1}
            </option>
        );
    }

    return (
        <select name="cars" id="cars" onChange={(event)=>HandleOnClickChangeTest(event)}>
            {options}
        </select>
    );
}



  let i = 1;
  return (
    <div>
      <h3>PART 2</h3>
      <h3>QUESTIONS 6-10</h3>
      <p>Read the sentences about camping.
        <br />Choose the best word (A, B or C) for each space.
        <br />For questions 6-10, mark A, B or € on your answer sheet.
      </p>
      <div className='contentPart2'>
        <div className='question'>

          {

            data.map((item, index) => {
              return (
                <div className='item'>
                  <p><b>{index + 6}. {item.id}.</b> {item.question}</p>
                  <div className='item-result'>
                    <ul>
                      {item.answers.map((answer) => {
                        return (
                          <li><b className={(isSubmit && data[index].conrrectAnswer === answer.id) ? "conrrect" : ""}>{answer.id}</b> {answer.content}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })
          }





        </div>

        <div className='result'>
          <div className='results'>
            <label>Result: </label>

            <div className='result-item1'>
              <label>6. </label>
              <input style={
                isSubmit
                  ? data[0].conrrectAnswer === value1
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value1} onChange={(event) => { setValue1(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item2'>
              <label>7. </label>
              <input style={
                isSubmit
                  ? data[1].conrrectAnswer === value2
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value2} onChange={(event) => { setValue2(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item3'>
              <label>8. </label>
              <input style={
                isSubmit
                  ? data[2].conrrectAnswer === value3
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value3} onChange={(event) => { setValue3(event.target.value.toUpperCase()) }} />
            </div>
            <div className='result-item4'>
              <label>9. </label>
              <input style={
                isSubmit
                  ? data[3].conrrectAnswer === value4
                    ? { backgroundColor: 'green', color: '#fff' }
                    : { backgroundColor: 'red', color: '#fff' }
                  : {}
              } value={value4} onChange={(event) => { setValue4(event.target.value.toUpperCase()) }} />

            </div>
            <div className='result-item5'>
              <label>10. </label>
              <input style={
                isSubmit
                  ? data[4].conrrectAnswer === value5
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
        <div className='func'>
          <FunctionComponent setIsSubmit={setIsSubmit} />

        </div>

      </div>
    </div>
  )
}
export default Part2;