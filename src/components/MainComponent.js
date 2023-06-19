import React, { useState, useEffect } from "react"
import "./MainComponent.css"
import { allStepFun, allSolutionsFun } from "../Logic/n-queen-logic"
import Visualizer from "./Visualizer"

const MainComponent = () => {
  const [allSteps, setAllSteps] = useState(() => allStepFun())
  const [allSolutions, setAllSolutions] = useState(() => allSolutionsFun())
  const [boardSize, setBoardSize] = useState(4)
  const [speed, setSpeed] = useState(3)
  const [allSolutionsBtn, setAllSolutionsBtn] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)
  // console.log(allSteps)
  useEffect(() => {
    if (isRunning) {
      let counter = count
      let time =
        speed === "1"
          ? 1000
          : speed === "2"
          ? 500
          : speed === "5"
          ? 1
          : speed === "4"
          ? 25
          : 100
      const interval = setInterval(() => {
        if (counter >= allSteps[boardSize].length) {
          setIsRunning(false)
          setCount(0)
          clearInterval(interval)
        } else {
          if (!Array.isArray(allSteps[boardSize][counter])) {
            // console.log("got solution")
            setDisplayCount(allSteps[boardSize][counter])
          }
          setCount(count => count + 1)
          counter++ // local variable that this closure will see
          // console.log("interval useEffect run");
        }
      }, time)

      // console.log("interval useEffect done")
      return () => clearInterval(interval)
    }
  }, [isRunning, speed, count])

  // console.log(allSteps[boardSize].slice(count, count + 1))
  let showAllStepsOnBoard = allSteps[boardSize]
    .slice(count, count + 1)
    .map((individualBoard, index) => {
      // console.log(allSteps[boardSize][count]);
      return (
        <Visualizer
          size={boardSize}
          prevBoard={allSteps[boardSize][count - 1]}
          board={individualBoard}
          clsName='new-table'
        />
      )
    })
  let displayFoundSolutions = allSolutions[boardSize]
    .slice(0, displayCount)
    .map(sol => {
      return (
        <Visualizer size={boardSize} board={sol} clsName='solution-table' />
      )
    })
  const boardSizeChangeHandler = size => {
    // console.log("BOARD SIZE", size);
    setCount(0)
    setDisplayCount(0)
    setBoardSize(size)
  }
  const speedChangedHandler = spd => {
    // console.log("SPEED", spd)
    setSpeed(spd)
    console.log(speed)
  }

  const startBtnHandler = () => {
    // console.log("start")
    // if all Solution are displayed and we click the start button then clear the right screen
    if (allSolutions[boardSize].length === displayCount) setDisplayCount(0)
    setIsRunning(true)
  }
  const stopBtnHandler = () => {
    // console.log("stop")
    setIsRunning(false)
  }
  const allSolutionsBtnHandler = () => {
    // console.log("allSolutions")
    setCount(0)
    setBoardSize(prevBoard => prevBoard)
    setIsRunning(false)
    setDisplayCount(allSolutions[boardSize].length)
  }
  const stepBackwardHandler = () => {
    if (!Array.isArray(allSteps[boardSize][count - 2]))
      setDisplayCount(allSteps[boardSize][count - 2])
    setCount(count => count - 1)
  }
  const stepForwardHandler = () => {
    if (!Array.isArray(allSteps[boardSize][count + 2]))
      setDisplayCount(allSteps[boardSize][count + 2])
    setCount(count => count + 1)
  }

  return (
    <div className='problem-container'>
      <div className='left-container'>
        <div className='options-container'>
          <p className='rules'>
            The n-queens puzzle is the problem of placing
            <strong> n</strong> queens on an <strong>nxn</strong> chessboard
            such that no two queens attack each other.
          </p>
          <div className='inputs-container'>
            <div className='sliders-container'>
              <div className='board-size-container'>
                <div className='board-size'>
                  <label className='label-text'>Board Size</label>
                  <input
                    id='selection'
                    type='range'
                    min='1'
                    max='8'
                    step='1'
                    value={boardSize}
                    disabled={isRunning}
                    onChange={e => boardSizeChangeHandler(e.target.value)}
                  />
                  <label className='label-text'>
                    {boardSize}x{boardSize}
                  </label>
                </div>
              </div>
              <div className='speed-container'>
                <div className='speed-selection'>
                  <label className='label-text'>Speed</label>
                  <input
                    id='speed'
                    type='range'
                    min='1'
                    max='5'
                    value={speed}
                    disabled={isRunning}
                    onChange={e => speedChangedHandler(e.target.value)}
                  />
                </div>
                <label className='label-text'>
                  {speed == 1
                    ? "Slow"
                    : speed == 2
                    ? "Medium"
                    : speed == 3
                    ? "Fast"
                    : speed == 4
                    ? "Super Fast"
                    : "Lighting Fast"}
                </label>
              </div>
            </div>
            <div className='solution-text-container'>
              <h1 className='solution-title-left'>
                {allSolutions[boardSize].length} Possible Solutions
              </h1>
              <h1 className='solution-title-right'>
                {displayCount} Solutions Found
              </h1>
            </div>
            <div className='buttons-container'>
              <button
                className='start'
                type='button'
                disabled={isRunning}
                onClick={startBtnHandler}
              >
                Start
              </button>
              <button
                className='stop'
                type='button'
                disabled={!isRunning}
                onClick={stopBtnHandler}
              >
                Stop
              </button>
              <button
                className='solutions-button'
                type='button'
                disabled={isRunning}
                onClick={allSolutionsBtnHandler}
              >
                Solutions
              </button>
              <div className='backward-forward-btn'>
                <button
                  // className='solutions-button'
                  type='button'
                  disabled={count <= 0 || isRunning}
                  onClick={stepBackwardHandler}
                >
                  <i className='fas fa-step-backward'></i>
                </button>
                <button
                  // className='solutions-button'
                  type='button'
                  disabled={count >= allSteps.length || isRunning}
                  onClick={stepForwardHandler}
                >
                  <i className='fas fa-step-forward'></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='tables-container'>{showAllStepsOnBoard}</div>
      </div>

      <div className='right-container'>
        <div className='solutions-container'>
          <div className='solutions'>{displayFoundSolutions}</div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
