import React, { useState } from 'react';
import './part6.scss';
import dataPart6 from '../../../data/paper1/part6';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';

//const data = dataPart6[1];
const questionStart = 27;
let pageIndex = 0;

const LoadData = () => {
    return dataPart6[pageIndex];
}

export default function Part6() {
    const [data, setData] = useState(LoadData());
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const [value7, setValue7] = useState("");
    const [value8, setValue8] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const getValues = [value1,value2,value3,value4,value5, value6,value7,value8];
    const setValues = [ setValue1, setValue2, setValue3, setValue4, setValue5, setValue6, setValue7, setValue8];


    const SetClassNameCorrectResult = (questionIndex, resultCurrent) => {

        return isSubmit ? data.correctAnswer[questionIndex] === resultCurrent ? "answerTrue" : "answerFalse" : "";
    }
    let i = 27;
    let a = 0;


    const getVliiiii = ()=>{
        let result = data.questtion.find(s=>s.id===(a)).answers.find(s=>s.id === data.correctAnswer[a]).content;
        a++;
        return result;
    }

    const HandleOnClickChangeTest = (event)=>{
        pageIndex = event.target.value;
        setData(LoadData());
        setIsSubmit(false);
        setDefaultValue();
        // setValue0(LoadData().questions[0].answer ?? "")
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

    console.log(data.questtion.find(s=>s.id===a).answers.find(s=>s.id === "A").content);
    return (
        <div className='main-contentPart6'>
            <div className='contentPart6'>
                <div className='post'>
                    <h3>{data.post.title}</h3>
                    <div>
                        {
                            data.post.contents.map((item, index) => {

                                return (
                                    <p>{
                                        item.section.map((dv, idx) => {
                                            return (

                                                <>
                                                    

                                                    <span> {(idx === 0) ? ""
                                                        :
                                                        isSubmit? <b>{getVliiiii()}</b> :

                                                         (index === 0 && idx === 1)
                                                            ? <b className='bold'> ({index})................</b>
                                                            : <b className='bold'> ({++i})................</b>
                                                    } {dv} </span>
                                                </>




                                            )
                                        })
                                    }</p>
                                )
                            })
                        }
                    </div>







                </div>
                <div className='question'>

                    {
                        data.questtion.map((item, index) => {
                            return (
                                <ul>
                                    <b>{index > 0 ? index + 27 : index}</b>
                                    {item.answers.map((answer, ind) => {
                                        return (
                                            <li><b className={
                                                (isSubmit && data.correctAnswer[index] === answer.id) ? 'conrrect' : ""
                                            }>{answer.id}</b> {answer.content}</li>
                                        )
                                    })}
                                </ul>
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
                    <div className='result-item0'>
                        <span>Result </span>
                        <label>0. </label>
                        <input className={SetClassNameCorrectResult(0, data.correctAnswer['0'])}

                            value={data.correctAnswer['0']}
                        />
                    </div>
                    <div className='result-item1'>
                        <label>{questionStart + 1}. </label>
                        <input className={SetClassNameCorrectResult(1, value1)}
                            value={value1} onChange={(event) => { setValue1(event.target.value.toUpperCase()) }}
                        />
                    </div>
                    <div className='result-item2'>
                        <label>{questionStart + 2}. </label>
                        <input className={SetClassNameCorrectResult(2, value2)}
                            value={value2} onChange={(event) => { setValue2(event.target.value.toUpperCase()) }}
                        />
                    </div>
                    <div className='result-item3'>
                        <label>{questionStart + 3}. </label>
                        <input className={SetClassNameCorrectResult(3, value3)}
                            value={value3} onChange={(event) => { setValue3(event.target.value.toUpperCase()) }}
                        />
                    </div>
                    <div className='result-item4'>
                        <label>{questionStart + 4}. </label>
                        <input className={SetClassNameCorrectResult(4, value4)}
                            value={value4} onChange={(event) => { setValue4(event.target.value.toUpperCase()) }}
                        />

                    </div>
                    <div className='result-item5'>
                        <label>{questionStart + 5}. </label>
                        <input className={SetClassNameCorrectResult(5, value5)}
                            value={value5} onChange={(event) => { setValue5(event.target.value.toUpperCase()) }}
                        />

                    </div>

                    <div className='result-item6'>
                        <label>{questionStart + 6}. </label>
                        <input className={SetClassNameCorrectResult(6, value6)}
                            value={value6} onChange={(event) => { setValue6(event.target.value.toUpperCase()) }}
                        />

                    </div>
                    <div className='result-item7'>
                        <label>{questionStart + 7}. </label>
                        <input className={SetClassNameCorrectResult(7, value7)}
                            value={value7} onChange={(event) => { setValue7(event.target.value.toUpperCase()) }}
                        />

                    </div>
                    <div className='result-item8'>
                        <label>{questionStart + 8}. </label>
                        <input className={SetClassNameCorrectResult(8, value8)}
                            value={value8} onChange={(event) => { setValue8(event.target.value.toUpperCase()) }}
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
