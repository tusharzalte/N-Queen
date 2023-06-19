import React, { useState, useEffect } from "react"
//Importing Logic
import { nQueens } from "../../Logic/n-queen-logic"
import MainComponent from "../MainComponent"

export default function Visualize() {
  const [allSteps, setAllSteps] = useState([])
  const [allSolutions, setAllSolutions] = useState([])

  useEffect(() => {
    let steps = []
    let solutions = []
    for (let i = 1; i <= 8; i++) {
      steps.push(nQueens(i, "steps"))
      solutions.push(nQueens(i, "solutions"))
    }
    setAllSteps(steps)
    setAllSolutions(solutions)
  }, [])
  return (
    <div className='container'>
      <MainComponent allSteps={allSteps} allSolutions={allSolutions} />
    </div>
  )
}
