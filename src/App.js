import React, { useMemo, useRef } from 'react'
import {useSelector , useDispatch} from "react-redux"
import {buycake } from "./Action/index"
import {resetcake } from "./Action/index"

import "./App.css"

function App() {

  const newref= useRef()
  const btn = useRef()
  const mystate = useSelector((state)=>
    state.change
  )
  const dispatch = useDispatch()

  const first = useMemo(()=>{
      return <h1>Initial Number of cakes in store {mystate}</h1>
  },[])

 

  const handler=()=>{
    if(mystate ===0){
      newref.current.innerText = "Can't buy stock is over"
    }
    if(mystate>0){
      dispatch(buycake())

    }
    console.log(newref.current.innerText.length)
  }

  const handler1=()=>{
    newref.current.innerText = ""
    dispatch(resetcake())
  }

  
  return (
    <div className="App">
      {first}
     {/* <h1>Initial Number of cakes in store {mystate}</h1> */}
     <h1>Current Number of cakes in store {mystate}</h1>
     <button onClick={handler}>Buy Cake</button>
     <h1 style={{color:"red"}} ref={newref}> </h1>
     {mystate===0?<button ref={btn} onClick={handler1} id="reset_btn">Reset</button>:""}
    </div>
  );
}

export default App;
