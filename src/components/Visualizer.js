import React from "react"
import "./Visualizer.css"

const Visualizer = ({ size, board, clsName, prevBoard }) => {
  const rowsCols = size
  const rowArray = []
  for (let i = 0; i < rowsCols; i++) {
    const colArray = []
    for (let j = 0; j < rowsCols; j++) {
      let colClassName = null
      if (i % 2 === 0) {
        if (j % 2 === 0) colClassName = "col checkered-white"
        else colClassName = "col checkered-black"
      } else {
        if (j % 2 === 0) colClassName = "col checkered-black"
        else colClassName = "col checkered-white"
      }
      let queen = null
      if (!Array.isArray(board)) {
        // if we got the solution then shown prev board
        if (prevBoard[i][j] === "Q") {
          queen = React.createElement("img", {
            src: "/images/chess.comqueen.png",
            className: "queen",
          })
        }
      } else if (board[i][j] === "Q") {
        queen = React.createElement("img", {
          src: "/images/chess.comqueen.png",
          className: "queen",
        })
      }
      const col = React.createElement("div", { className: colClassName }, queen)
      colArray.push(col)
    }
    const row = React.createElement("div", { className: "row" }, colArray)
    rowArray.push(row)
  }

  // console.log("Visulizer.js", Aboard);
  return React.createElement("div", { className: clsName }, rowArray)
}

export default Visualizer
