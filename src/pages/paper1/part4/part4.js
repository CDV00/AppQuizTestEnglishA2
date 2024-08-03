import React, { useState } from 'react';
import './part4.scss';
import dataPart4 from '../../../data/paper1/part4';
import Index from '..';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';


// const randomNum = Math.floor(Math.random() * 4) + 1;

// const data = dataPart4.filter(o => o.id == randomNum)[0];

let pageIndex = 0;

const LoadData = () => {
    return dataPart4[pageIndex];
}


export default function Part4() {

    //console.log(data.question.clauseB.filter(o=>o.id === "A")[0].content)
    const [data, setData] = useState(LoadData());
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const getValues = [value1,value2,value3,value4,value5];
    const setValues = [ setValue1, setValue2, setValue3, setValue4, setValue5];

    let { characterA, characterB } = data.question.clauseA;

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

    return (
        <>
            <div className='contentPart4'>
                <div className='clauseA'>
                    {
                        data.question.clauseA.content.map((item, index) => {

                            return (
                                <>
                                    <p className='item' key={index}><b className='character'>{characterA}: </b> {item}</p>
                                    {/* {isSubmit && <p >{data.question.clauseA.translateVi[index]}</p>} */}
                                    {
                                        (index < data.question.clauseA.content.length - 1) &&
                                        <p className='item'><b className='character'>{characterB}:  </b>
                                            {isSubmit ?
                                                <>
                                                    
                                                    <b className='conrrect'>{data.question.clauseB.filter(o => o.id === data.correctAnswer[index])[0].content}</b>
                                                </>
                                                : <span><b>{index > 0 ? index + 15 : index}</b> ..............................................................................................</span>
                                            }

                                        </p>
                                    }

                                </>
                            )
                        })
                    }

                </div>
                <div className='clauseB'>
                    {data.question.clauseB.map((item, index) => {
                        return (
                            <>
                                <p><b>{item.id}. </b> {item.content}</p>
                            </>
                        )
                    })}

                </div>




            </div>
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
                        <label>16. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['1'] === value1
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value1} onChange={(event) => { setValue1(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item2'>
                        <label>17. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['2'] === value2
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value2} onChange={(event) => { setValue2(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item3'>
                        <label>18. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['3'] === value3
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value3} onChange={(event) => { setValue3(event.target.value.toUpperCase()) }} />
                    </div>
                    <div className='result-item4'>
                        <label>19. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['4'] === value4
                                    ? { backgroundColor: 'green', color: '#fff' }
                                    : { backgroundColor: 'red', color: '#fff' }
                                : {}
                        } value={value4} onChange={(event) => { setValue4(event.target.value.toUpperCase()) }} />

                    </div>
                    <div className='result-item5'>
                        <label>20. </label>
                        <input style={
                            isSubmit
                                ? data.correctAnswer['5'] === value5
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
        </>


    )
}
