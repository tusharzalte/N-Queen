import React from "react"
import {Link} from 'react-router-dom'
import "./Home.css"
export default function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='intro'>
          <div className='chessboard-4-img'>
            <img src='/images/home-images/chessboard6.png' alt='chessBoard-4' />
          </div>
          <div className='problem-statement'>
            <h1>The N-queens Problem</h1>
            <p className='problem-text'>
              The N queens puzzle is the problem of placing eight chess queens
              on an n×n chessboard so that no two queens threaten each other.
              Thus, a solution requires that no two queens share the same row,
              column, or diagonal.
            </p>
          </div>
        </div>
      </div>
      <div className='footer-btn'>
        <Link to='/visualize'>
        <button className='btn-visualize'>Visualize  <i class="fas fa-arrow-right"></i></button>
        </Link>
      </div>
    </>
  )
}
