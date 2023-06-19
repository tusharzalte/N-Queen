import React, { useEffect, useState } from "react";

const ChessBoard = ({ rowsCols }) => {
  const [chessBoard, setChessBoard] = useState([]);

  useEffect(() => {
    const rowArray = [];
    for (let i = 0; i < rowsCols; i++) {
      const colArray = [];
      for (let j = 0; j < rowsCols; j++) {
        let colClassName = null;
        if (i % 2 === 0) {
          if (j % 2 === 0) colClassName = "col checkered-white";
          else colClassName = "col checkered-black";
        } else {
          if (j % 2 === 0) colClassName = "col checkered-black";
          else colClassName = "col checkered-white";
        }
        const col = React.createElement("div", { className: colClassName });
        colArray.push(col);
      }
      const row = React.createElement("div", { className: "row" }, colArray);
      rowArray.push(row);
    }

    setChessBoard(rowArray);
  }, [rowsCols]);

  return React.createElement("div", { className: "new-table" }, chessBoard);
};

export default ChessBoard;

// import React from "react";

// const ChessBoard = () => {
//   return (
//     <>
//       <div className='new-table'>
//         <div class='row'>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//         </div>
//         <div class='row'>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//         </div>
//         <div class='row'>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//         </div>
//         <div class='row'>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//         </div>{" "}
//         <div class='row'>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//         </div>
//         <div class='row'>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//         </div>{" "}
//         <div class='row'>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//         </div>
//         <div class='row'>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//           <div class='col checkered-black'></div>
//           <div class='col checkered-white'></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChessBoard;

