import React, { useContext } from 'react'
import { QuizContext } from '../contest/Quiz'

const Result = () => {
  const {correct,setExit,setStart,quizzes} = useContext (QuizContext) 
 const playAgain = () =>{
  setExit(false);
  setStart(false);
 }
  return (
    <div className='w-full h-screen justify-center items-center items-center'>
    <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
    <h2 className='text-4xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
    <button onClick={playAgain} className='border border-orange-500 p-3 text-5xl rounded'>playAgain</button>
    </div>
    </div>
  )
}

export default Result