import React from 'react'
import { useEffect, useState} from 'react'

function Timer({seconds, isRunning}) {
    
    return (
    <div>
      { isRunning ? <span id="timer" className="timer">{seconds}</span> : <span id="timer" className="timer"></span>} 
    </div>
  )
}

export default Timer



// const [counter, setCounter] = React.useState(60);
// React.useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);
//   return (
//     <div className="App">
//       <div>Countdown: {counter}</div>
//     </div>
//   );
// }
//https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3
//^^^explination^^^