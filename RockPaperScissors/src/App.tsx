import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let list = ["Rock","Paper","Scissors"]
  const [choice, setChoice] = useState(NaN)
  const [ptext, setPText] = useState("")
  const [text, setText] = useState("")
  const [res, setRes] = useState("")
  const [point, setPoint] = useState(0)
  const [PCpoint, setPCPoint] = useState(0)
  useEffect(() => {setPText(list[choice])},[choice])
  function doThing(){
    let rnd = Math.floor(Math.random() * 3)
    setText(list[rnd])

    if (choice == rnd){
      setRes("Draw!")
    }
    else if (choice == 0 && rnd == 2 || choice == 1 && rnd == 0 || choice == 2 && rnd == 1){
      setRes("You won!")
      setPoint(point + 1)
    }
    else{
      setRes("You lost!")
      setPCPoint(PCpoint + 1)
    }
  }

  function clear(){
    setChoice(NaN)
    setText("")
    setRes("")
    setPoint(0)
    setPCPoint(0)
  }

  return (
    <>
    <h1>{list}</h1>
    <button onClick={() => setChoice(0)}>{list[0]}</button>
    <button onClick={() => setChoice(1)}>{list[1]}</button>
    <button onClick={() => setChoice(2)}>{list[2]}</button>
    <p>Player choice : <text>{ptext}</text></p>
    <button onClick={() => doThing()}>Play!</button>
    <p>Bot choice : <text>{text}</text></p>
    <br/>
    <p>{res}</p>
    <p>ScoreBoard : <text>{point}</text> X <text>{PCpoint}</text></p>
    <br/>
    <button onClick={() => clear()}>Reset</button>
    </>
  )
}

export default App