import { useState } from 'react';
import './App.css';

function App() {

  const [isStartActive, setIsStatActive] = useState(false)
  const [isStopActive, setIsStopActive] = useState(false)
  const [isResetActive, setIsResetActive] = useState(true)

  const [isDeenergize, setIsDeenergize] = useState(false)
  const [isStart, setStart] = useState(false)



  const handleStart = () => {
    setIsResetActive(false)
    setIsStatActive(true)
    setIsStopActive(false)
    alert(1)
  }


  const handleStop = () => {
    setIsResetActive(false)
    setIsStatActive(false)
    setIsStopActive(true)
    alert(0)
  }


  const handleReset = () =>{
    setIsResetActive(true)
    setIsStatActive(false)
    setIsStopActive(false)
  }


  const handleDeenergize = () =>{
    setIsDeenergize(!isDeenergize)
  }


  const handleDeStart = () =>{
    setStart(!isStart)
  }
  return (

    <div>

        <div class="firstbutton">
            <div class="one">
              <button onClick={handleDeenergize}>Deenergize</button>
              <input type="checkbox" name="documents" id="" checked={isDeenergize === false ? false : true}/>
            </div>
            <div class="two">
              <button onClick={handleDeStart}>Start</button>
              <input type="checkbox" name="hobbies" id="" checked={isStart === false ? false : true}/>
            </div>
        </div>


            <div class="all button">

              <div class="buttonA">
                <button onClick={handleStart}>Start</button>
              </div>


              <div class="buttonB">
                <button onClick={handleStop}>Stop</button>
              </div>


              <div class="buttonC">
                <button onClick={handleReset}>Reset</button>
              </div>


              {isStartActive && <button className='bgBtn startActive'></button>}
              {isStopActive && <button className='bgBtn stopActive'></button>}
              {isResetActive && <button className='bgBtn resetActive'></button>}
            </div>


    </div>

  );
}

export default App;
