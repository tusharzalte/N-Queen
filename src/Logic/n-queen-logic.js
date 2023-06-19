// n-queen Logic
function createBoard(rowsCols) {
  const board = []

  for (let i = 1; i <= rowsCols; i++) {
    let row = "."
    row = row.repeat(rowsCols)
    board.push(row)
  }

  return board
}

function canPlace(board, row, col) {
  /* Check this row on left side */
  for (let i = 0; i < col; i++) if (board[row][i] === "Q") return false

  /* Check upper diagonal on left side */
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] === "Q") return false

  /* Check lower diagonal on left side */
  for (let i = row, j = col; j >= 0 && i < board.length; i++, j--)
    if (board[i][j] === "Q") return false

  return true
}

function place(board, row, col, val, table) {
  const newRow = board[row].split("")
  newRow[col] = val
  board[row] = newRow.join("")
}

function solver(board, row, col, steps, solutions) {
  if (col === board.length) {
    steps.push([...board])
    solutions.push([...board])
    steps.push(solutions.length)
    return
  }
  steps.push([...board])

  for (let i = 0; i < board.length; i++) {
    if (canPlace(board, i, col)) {
      place(board, i, col, "Q")
      solver(board, row, col + 1, steps, solutions)
      place(board, i, col, ".")
      steps.push([...board])
    }
  }
}

export function nQueens(n, type = "solutions") {
  const steps = []
  const solutions = []
  const board = createBoard(n)

  solver(board, 0, 0, steps, solutions)
  // console.log(n,"Steps",steps,"Solution",solutions)
  if (type === "steps") return steps
  else return solutions
}

export const allStepFun = () => {
  const allSteps = {
    1: nQueens(1, "steps"),
    2: nQueens(2, "steps"),
    3: nQueens(3, "steps"),
    4: nQueens(4, "steps"),
    5: nQueens(5, "steps"),
    6: nQueens(6, "steps"),
    7: nQueens(7, "steps"),
    8: nQueens(8, "steps"),
  }
  return allSteps
}
export const allSolutionsFun = () => {
  const allSolutions = {
    1: nQueens(1, "solutions"),
    2: nQueens(2, "solutions"),
    3: nQueens(3, "solutions"),
    4: nQueens(4, "solutions"),
    5: nQueens(5, "solutions"),
    6: nQueens(6, "solutions"),
    7: nQueens(7, "solutions"),
    8: nQueens(8, "solutions"),
  }
  return allSolutions
}
