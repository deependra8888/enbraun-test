import { useRef, useState } from 'react'


function App() {
  const [step, setStep] = useState(0)
  // const [disabled, setDisabled] = useState(true);
  const [Theme, setTheme] = useState('blue')

  return (
    <div className="App">
      <section className='right'>
      <StepOne setStep={setStep} step={step} theme={Theme} />
      <StepTwo setStep={setStep} step={step}  theme={Theme} />
      <StepThree setStep={setStep} step={step}  theme={Theme} />
      <StepFour setStep={setStep} step={step}  theme={Theme} setTheme={setTheme} />
      <StepFive setStep={setStep} step={step}  theme={Theme} />
      <StepSix setStep={setStep} step={step}  theme={Theme} />
      <StepSeven setStep={setStep} step={step}  theme={Theme} />
      </section>
      <section className='left' style={{
        backgroundColor: Theme
      }}>
        
      </section>
    </div>
  )
}

export default App

const StepOne = ({ setStep, step, theme }) => {
  return <div className='rela'>
    <h3>Welcome, Maaya Singh</h3>
    <h3>Our mission is to make you more productive</h3>
    <h3>This will only take a minute</h3>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >Let's do it!</button>
    <div className='abs' style={{
      position: step === 0 ? 'static' : 'absolute',
    }}></div>
  </div>
}


const StepTwo = ({ setStep, step, theme }) => {
  const [userInput, setuserInput] = useState('')
  const handleInput = (e) => {
    setuserInput(e.target.value)
  }
  return <div className='rela'>
    <h3>Name your Worksapce:</h3>
    <input type="text" value={userInput} onChange={handleInput} />
    <label htmlFor="text"> You can also use the name of  your company or org</label>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)}>Next</button>
    <div className='abs' style={{
      position: step === 1 ? 'static' : 'absolute',
    }}></div>
  </div>
}

const StepThree = ({ setStep, step, theme }) => {
  const [color, setcolor] = useState('green')
  return <div className='rela'>
    <h3>customize your workspace's avatar</h3>
    <div className="pickColor">
    <div className='avatar' style={{
      backgroundColor: color
    }}></div>
    
    <button className='colors red' onClick={() => setcolor('red')}></button>
    <button className='colors blue' onClick={() => setcolor('blue')}></button>
    <button className='colors orange'onClick={() => setcolor('orange')}></button>
    <button className='colors green' onClick={() => setcolor('green')}></button>
    </div>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >I'm happy so far</button>
    <div className='abs' style={{
      position: step === 2 ? 'static' : 'absolute',
    }}></div>
  </div>
}

const StepFour = ({ setStep, step, theme, setTheme }) => {
  
  return <div className='rela'>
    <div className="pickColor">
      <button className='colors red' onClick={() => setTheme('red')}></button>
      <button className='colors blue' onClick={() => setTheme('blue')}></button>
      <button className='colors orange' onClick={() => setTheme('orange')}></button>
      <button className='colors green' onClick={() => setTheme('green')}></button>
    </div>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >happy</button>
    <div className='abs' style={{
      position: step === 3 ? 'static' : 'absolute',
    }}></div>
  </div>
}


const StepFive = ({ setStep, step, theme }) => {
  const [num, setNum] = useState(0)
  return <div className='rela'>
    <h3>How many people will you be working with</h3>
    <button style={{color:'black', border: 1 === num ? `1px solid ${theme}` : 'none'}}  className='people'  onClick={() =>{  setNum(1)}}>just me</button>
    <button style={{color:'black', border: 2 === num ? `1px solid ${theme}` : 'none'}}   className='people'  onClick={() => {  setNum(2)}}>2-5</button>
    <button style={{color:'black', border: 3 === num ? `1px solid ${theme}` : 'none'}}  className='people'  onClick={() =>{  setNum(3)}}>6-10</button>
    <button style={{color:'black', border: 4 === num ? `1px solid ${theme}` : 'none'}}  className='people'  onClick={() => {setNum(4)}}>I'dont know</button>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >next</button>
    <div className='abs' style={{
      position: step === 4 ? 'static' : 'absolute',
    }}></div>
  </div>
}

const StepSix = ({ setStep, step, theme }) => {
  return <div className='rela'>
    <h3>how do you want to start using clickup</h3>
    <p>I'll start using clickup</p>
    <select name="" id="">
      <option value="IT">IT</option>
      <option value="support">support</option>
      <option value="marketing">marketing</option>
      <option value="operations">operations</option>
      <option value="other">other</option>
    </select>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >Next</button>
    <div className='abs' style={{
      position: step === 5 ? 'static' : 'absolute',
    }}></div>
  </div>
}

const StepSeven = ({ setStep, step, theme }) => {

  const [num, setNum] = useState(0)
  return <div className='rela'>
    <h3>how did you hear about us?</h3>
    <button onClick={() => setNum(1)} style={{color:'black', border: 1 === num ? `1px solid ${theme}` : 'none'}}>Youtube</button>
    <button onClick={() => setNum(2)} style={{color:'black',border: 2 === num ? `1px solid ${theme}` : 'none'}}>TikTok</button>
    <button style={{
      backgroundColor : theme
    }} onClick={() => setStep(prev => prev + 1)} >next</button>
    <div className='abs' style={{
      position: step === 6 ? 'static' : 'absolute',
    }}></div>
  </div>
}