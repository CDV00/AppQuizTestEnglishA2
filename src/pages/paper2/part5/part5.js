import React, { useState } from 'react';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';
import './part5.scss';
import dataPart5 from '../../../data/paper2/part5';

//const data = dataPart4[2];
const questionStart = 15;
let pageIndex = 0;

const LoadData = () => {
    return dataPart5[pageIndex];
}


export default function Part5() {






    const [data, setData] = useState(LoadData());
    //LoadData(setData);
    //setData(LoadData());
    //console.log(data)
    const [value0, setValue0] = useState(data.questions[0].answer ?? "");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
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
    const setDefaultValue = () => {
        setValues.map((item) => {
          item("");
        })
      }
    const HandleOnClickChangeTest = (event)=>{
        pageIndex = event.target.value;
        setData(LoadData());
        setIsSubmit(false);
        setDefaultValue();
        setValue0(LoadData().questions[0].answer ?? "")
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
        <div className='content-part-4'>
            <h2>Part 5</h2>
            <div className='main-content'>
                <div className='question'>
                    <h2>{data.title}</h2>
                    {
                        data.questions.map((item, index) => {
                            if(!item.content)
                                return;
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



                    {
                        renderSelectBox(setData)
                    }




                </div>
                <div className='func'>
                    <FunctionComponent setIsSubmit={setIsSubmit} />
                </div>

            </div>
        </div>
    )
}
