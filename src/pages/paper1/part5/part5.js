import React, { useState } from 'react';
import './part5.scss';
import dataPart5 from '../../../data/paper1/part5';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';

//const data = dataPart5[2];
const questionStart = 20;
let pageIndex = 0;

const LoadData = () => {
    return dataPart5[pageIndex];
}

export default function Part5() {
    const [data, setData] = useState(LoadData());
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const [value7, setValue7] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const getValues = [value1,value2,value3,value4,value5,value6, value7];
    const setValues = [ setValue1, setValue2, setValue3, setValue4, setValue5, setValue6, setValue7];



    const HandleOnClickChangeTest = (event) => {
        pageIndex = event.target.value;
        setData(LoadData());
        setIsSubmit(false);
        setDefaultValue();
        //setValue0(LoadData().questions[0].answer ?? "")
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
        <>
            <div className='contentPart5'>
                <div className='post'>
                    <h3>{data.post.title}</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: data.post.content }}></div> */}
                    <div>
                        {
                            data.post.contents.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='question'>
                    {
                        data.question.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p> <b>{index > 0 ? index + 20 : index}. </b> {item.content}</p>
                                    <ul>
                                        {
                                            item.answers.map((answer) => {
                                                return (
                                                    <li key={answer.id}><b className={
                                                        (isSubmit && data.correctAnswer[index] === answer.id) ? 'conrrect' : ""
                                                    }>{answer.id}</b> {answer.content}</li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
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
                        <input
                            style={
                                isSubmit
                                    ? data.correctAnswer['0'] === data.correctAnswer['0']
                                        ? { backgroundColor: 'green', color: '#fff' }
                                        : { backgroundColor: 'red', color: '#fff' }
                                    : {}
                            }
                            value={data.correctAnswer['0']}
                        />
                    </div>
                    <div className='result-item1'>
                        <label>{questionStart + 1}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['1'] === value1
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value1} onChange={(event) => { setValue1(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item2'>
                        <label>{questionStart + 2}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['2'] === value2
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value2} onChange={(event) => { setValue2(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item3'>
                        <label>{questionStart + 3}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['3'] === value3
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value3} onChange={(event) => { setValue3(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item4'>
                        <label>{questionStart + 4}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['4'] === value4
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value4} onChange={(event) => { setValue4(event.target.value.toUpperCase()) }} />

                    </div>
                    <div className='result-item5'>
                        <label>{questionStart + 5}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['5'] === value5
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value5} onChange={(event) => { setValue5(event.target.value.toUpperCase()) }} />

                    </div>

                    <div className='result-item6'>
                        <label>{questionStart + 6}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['6'] === value6
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value6} onChange={(event) => { setValue6(event.target.value.toUpperCase()) }} />

                    </div>
                    <div className='result-item7'>
                        <label>{questionStart + 7}. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['7'] === value7
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value7} onChange={(event) => { setValue7(event.target.value.toUpperCase()) }} />

                    </div>

                </div>


            </div>
            <div className='func'>
                <FunctionComponent setIsSubmit={setIsSubmit} />
            </div>
        </>

    )
}
