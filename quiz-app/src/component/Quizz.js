import React, { useContext, useState } from 'react'
import { QuizContext } from '../contest/Quiz';

const Quizz = () => {
  const [current, setCurrent] = useState(0);
  const {quizzes} = useContext(QuizContext);
  return (
    <div className='w-full h-screen flex justify-center items-center'> 
    <h1>

    </h1>
    <Box current ={current} handler={setCurrent}/>
    </div>
  )
}

const Box =({current, handler})=>{
  const {quizzes,correct,setCorrect,setExit} = useContext(QuizContext);
  const [ans,setAns] = useState("c");
  const saveHandler = () => {
   if(quizzes[current].correct === ans){
    setCorrect(correct + 1);
   }

    setAns("");
    if((current + 1) === quizzes.length){
      setExit()
    } else{
    handler(current + 1);
  }
   
  }
    return(
        <div className='w-[40%]  border shadow-lg rounded-md overflow-hidden'>
        <div className='p-2 text-2xl'>{current+1} {quizzes[current].question}</div>
           <div className='grid grid-cols-2 mt:3'>
            <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 hover:text-white' : ''}
             hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("a")}>{quizzes[current].a}</div>
           
            <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 hover:text-white' : ''} 
            hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("b")}>{quizzes[current].b}</div>
           
            <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 hover:text-white' : ''} 
            hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("c")}>{quizzes[current].c}</div>
            
            <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 hover:text-white' : ''}
             hover:bg-blue-400 hover:text-white cursor-pointer`} onClick={()=>setAns("d")}>{quizzes[current].d}</div>
           </div>
           <div className='flex justify-between'>
            <div className='h-[30px] px-3 bg-orange-700' onClick={()=> setAns("")}>Reset</div>
            <div className='h-[30px] px-3 bg-green-700' onClick={saveHandler}>Save & Next</div>
            <div className='h-[30px] px-3 bg-red-700' onClick={()=>setExit(true)}>Exit</div>
           </div>
            </div>
    )
}
export default Quizz