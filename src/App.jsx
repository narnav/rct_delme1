import { useState } from 'react';
import About from './About';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0)
    const anyStyle={backgroundColor:`rgb(${counter*20}, ${counter*10}, ${counter+100*20})`}    
    // const addOne =()=>{
    //     setCounter(counter+1)
    //     if(counter === 10)
    //     {
    //         setCounter(0)
    //     }
    // }
    return (
        <div>
            <button onClick={()=>setCounter((counter + 1) % 10)}>add</button>
         <div style={anyStyle}>   {counter}</div>
         <About userName="tal" ></About>
         <About userName="gal"></About>
         <About userName="david"></About>
         <About userName="oren"></About>
        </div>

    );
}

export default App;
