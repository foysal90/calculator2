import React, { useState } from 'react';
import './style.css'

function App() {
  const [result, setResult] = useState('');
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
 
  }
  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult("");
  }
  const calculate = () => {
    try {
      setResult(eval(result));
    } catch(err) {
      setResult("error")
    }
  }
  return (
    <>
      <h1>calculator</h1>
      <div className='card'>
      <div class="calc-head">
            <input type="text" id="resu" value={result}/>
        </div>

        <div className="calc-body">
        <div>
                <input  onClick={backspace} ID='backspace' type="button" className="btn" value="C"/>
                <input name='+/-' onClick={handleClick} type="button" className="btn" value="+/-"/>
                <input name='%' onClick={handleClick} type="button" className="btn" value="%"/>
                <input name='/' onClick={handleClick} type="button" className="btn btn-style" value="/"/>
            </div>
            <div>
                <input name='7' onClick={handleClick} type="button" className="btn" value="7"/>
                <input name='8' onClick={handleClick} type="button" className="btn" value="8"/>
                <input name='9' onClick={handleClick} type="button" className="btn" value="9"/>
                <input name='*' onClick={handleClick} type="button" className="btn btn-style" value="*"/>
            </div>

            <div>
                <input name='4' onClick={handleClick} type="button" className="btn" value="4"/>
                <input name='5' onClick={handleClick} type="button" className="btn" value="5"/>
                <input name='6' onClick={handleClick} type="button" className="btn" value="6"/>
                <input name='-' onClick={handleClick} type="button" className="btn btn-style" value="-"/>
            </div>

            <div>
                <input name='1' onClick={handleClick} type="button" className="btn" value="1"/>
                <input name='2' onClick={handleClick} type="button" className="btn" value="2"/>
                <input name='3' onClick={handleClick} type="button" className="btn" value="3"/>
                <input name='+' onClick={handleClick} type="button" className="btn btn-style" value="+"/>
            </div>

            <div>
                <input name='0' onClick={handleClick} type="button" className="btn" value="0"/>
                <input name='.' onClick={handleClick} type="button" className="btn" value="."/>
                <input onClick={clear} id='clear' type="button" className="btn" value="DEL"/>
                <input name='=' onClick={calculate} type="button" className="btn"  value="="/>
            </div>

            
        </div>
      
      </div>
      


    
    </>
  )
}

export default App;
