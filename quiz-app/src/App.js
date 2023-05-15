
import './App.css';
import Start from './component/Start';
import Quizz from './component/Quizz';
import Result from './component/Result';
import {QuizContext} from './contest/Quiz'
import { useContext } from 'react';
function App() {
  const {start, exit} = useContext(QuizContext);
  return (
    <div>
      {
        exit === false
        ?
      <>      {
        start === true
        ?
        <Quizz/>
        :
        <Start/>
      }
    
    </>
    :<Result/>
    }
         
      
  </div>
  );
}

export default App;
