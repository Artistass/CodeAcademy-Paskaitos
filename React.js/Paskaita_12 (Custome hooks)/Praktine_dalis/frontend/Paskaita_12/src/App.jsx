import Card from './components/Card/Card'
import Form from './components/Form/Form'
import { useWindowDimensions } from './hooks/useWindowdimensions'

function App() {

  const dimensions = useWindowDimensions()

  return (
   <div>
    <Card title={"Pirma"}>

    <Card.Header text= {"Header dalis"}/>

    <Card.Body text={"Body dalis"}/> 

    <p>123456789</p>
    <a href="">click</a>

    </Card>

    <Card title={"Antra"}/>
    <Form/>
    <p>
      width: {dimensions.width}
      height: {dimensions.height}
    </p>
   </div>
  )
}

export default App
