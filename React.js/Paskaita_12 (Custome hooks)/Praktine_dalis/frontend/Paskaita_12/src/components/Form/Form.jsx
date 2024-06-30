import { useDisappieringElement } from "../../hooks/useDisappieringElement";
import { useInput } from "../../hooks/useInput"



export default function Form() {

  const name = useInput("Name");
  const lastName =useInput("Last Name");
  const elementRef = useDisappieringElement();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`name: ${name.value} Last name: ${lastName.value}`);
    
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 ref={elementRef}>As pradingstu</h1>
        <input type="text" {...name}/> <br />
        <input type="text" {...lastName}/> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
