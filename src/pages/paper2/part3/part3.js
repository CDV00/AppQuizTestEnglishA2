import React, { useState } from 'react'
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import './part3.scss';
import dataPart3 from '../../../data/paper2/part3';

const letters = 'ABC';
let pageIndex = 0;
const pageSize = 5;

const LoadData = () => {
    return dataPart3.filter(o=>o.id<=(pageIndex*pageSize+pageSize) && o.id >pageIndex*pageSize);
}




export default function Part3() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState(LoadData());
    //const data = 
    //dataPart3.filter(o => o.id <= (randomNum * 5) && o.id > (randomNum * 5 - 5));


    let getValues = [value1, value2, value3, value4, value5];
    let setValues = [setValue1, setValue2, setValue3, setValue4, setValue5];

    const HandleOnChangeValue = (index, valueCurrent) => {
        setValues[index](valueCurrent);
    }

    const checkBoxCheck = (answer, answerCurrent, value) => {
        //console.log("answer: " + answer + "| answerCurrent: " + answerCurrent + " | value: " + value)
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

    const HandleOnClickChangeTest = (event)=>{
        pageIndex = event.target.value;
        setData(LoadData());
        setDefaultValue();
        setIsSubmit(false);
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


    return (
        <div className='content-part-3'>
            <h2>Part 3</h2>
            <div className='main-content'>
                <div className='question'>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='question-item'>
                                    <p><b>{index + 11}. </b><span>{item.question}</span></p>
                                    <ul>
                                        {
                                            item.answers.map((it, idx) => {
                                                return (
                                                    <li>
                                                        <b>{letters[idx]}</b>
                                                        <span>{it}</span>
                                                        <input
                                                            className={SetClasNameAnswer(index, item.correctAnswer, letters[idx])}
                                                            checked={checkBoxCheck(item.correctAnswer, letters[idx], getValues[index])}
                                                            type='checkbox'
                                                            onClick={() => HandleOnChangeValue(index, letters[idx])}
                                                        />

                                                    </li>
                                                )
                                            })
                                        }
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
