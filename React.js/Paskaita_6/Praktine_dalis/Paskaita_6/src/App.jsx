import './App.css'
import GenerateRandom from './components/GenerateRandom/GenerateRandom'
import GenerateRandomAnimal from './components/GenerateRandomAnimal/GenerateRandomAnimal'
import GenerateRandomFood from './components/GenerateRandomFood/GenerateRandomFood'
import GenerateRandomSmile from './components/GenerateRandomSmile/GenerateRandomSmile'
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {

  return (
    <>
    <div>
      <GenerateRandomAnimal/>
      <GenerateRandomFood/> 
      <GenerateRandomSmile/>
      <div>
        <GenerateRandom/>
      </div>
      <ProgressBar/>
  </div>
    </>
  )
}

export default App
