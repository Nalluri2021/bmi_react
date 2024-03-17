import { useState } from 'react'
import './index.css'

function App() {
  
const [height,setHeight]=useState('');
const [weight,setWeight]=useState('');
const [bmi,setBmi]=useState('');
const [bmimessage,setBmimessage]=useState('');

function handleHeight(e){
let h=e.target.value;
setHeight(h);
}

function handleWeight(e){
  let w=e.target.value;
  setWeight(w);
}

function calculateBmi(){
  if(height && weight){
    const bmi=(weight*100*100/(height*height)).toFixed(2);
    setBmi(bmi)
;    let message = ''; 
    if (bmi < 18.5) { 
        message = 'You are Underweight'; 
    } else if (bmi >= 18.5 && bmi < 25) { 
        message = 'You are Normal weight'; 
    } else if (bmi >= 25 && bmi < 30) { 
        message = 'You are Overweight'; 
    } else { 
        message = 'You are Obese'; 
    } 

    setBmimessage(message);
  }
  else{
    setBmimessage('');
    setBmi('');
  }

}

  return (
    <>
     <h1 className='h1'>BMI CALCULATOR</h1>
     <div className='input-container'>
      <label htmlFor='height'>Enter your height in cm: </label>
      <input type='number' id='height' className='input-class' placeholder='Height' onChange={handleHeight}></input>
     </div>
     <div className='input-container'>
      <label htmlFor='weight'>Enter your weight in kg: </label>
      <input type='number' id='weight' className='input-class' placeholder='weight' onChange={handleWeight}></input>
     </div>
     <button className="calculate-btn" onClick={calculateBmi}> 
                Click to Calculate BMI 
    </button> 

    {bmi && bmimessage && (
      <div  className='result-container'>
      <p> Your BMI: <span className="bmi-value">{bmi}</span> </p> 
      <p> Result: <span className="bmi-message">{bmimessage}</span> </p> 
      </div>
    )}
    </>
  )
}

export default App
