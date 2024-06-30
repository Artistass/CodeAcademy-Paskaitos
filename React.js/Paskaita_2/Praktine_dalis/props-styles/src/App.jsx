import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input';

function App() {

  function handleClickButton1 () {
    console.log(`As esu pirmas mygtukas`);
  }

  function handleClickButtonOther () {
    console.log(`Paspaustas ne pirmas mygtukas`);
  }

  function handleChange (e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <Button text={"Mygtukas1"} onClick={handleClickButton1}/>
      <Button text={"Mygtukas2"} onClick={handleClickButtonOther}/>
      <Button text={"Mygtukas3"} onClick={handleClickButtonOther}/>

      <Input bigFont={true} id={"pirmasInputas"} label={"Name"} onChange={(e) => {
        console.log(e.target.value);
      }}/>

      <Input id={"antrasInputas"} label={"Surname"} onChange={handleChange} type={"text"}/>

      <Input id={"date"} label={"Date"} onChange={(e) => console.log(e.target.value)} type={"date"}/>

    </div>
  )
}

export default App
