import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [add, setAdd] = useState(0); 
  const [subs, setSubs] = useState(100); 

  // function multiply(){
  //   console.log('Hello from multiply')
  //   return subs * 10
  // }

  // function multiply(){
  //   console.log('Hello from multiply')
  //   return add * 10
  // }

  const multiplication = useMemo(function multiply(){
    console.log('Hello from multiply')
    return add * 10
  },[add])

  return (
    <>
    <div>
    Add : {add}
    <button onClick={()=> {setAdd(add + 1)}}>Let's Add</button>
    </div>

    <div>
    Subs : {subs}
    <button onClick={()=> {setSubs(subs - 1)}}>Let's Substract</button>
    </div>
    <div>
      {multiplication}

      {/* {multiply()} */}
    </div>
    </>
  );
}

export default App;
