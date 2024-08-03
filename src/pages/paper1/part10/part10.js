import React, {useState} from 'react';
import FunctionComponent from '../../../components/FunctionComponent/FunctionComponent';

export default function Part10() {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div>
        <h3>QUESTION 56</h3>
        <p>Your friend Sam is comming to your house tomorrow evening.</p>
        <p>Write a note to Sam</p>
        <h5>Tell Sam:</h5>
        <ul>
            <li>What time to come.</li>
            <li>What to bring.</li>
            <li>how to get to your house.</li>
        </ul>
        <h5>Write 25 - 35 words</h5>

        <div className='func'>
        <FunctionComponent setIsSubmit={setIsSubmit} />
      </div>
    </div>
  )
}
