export default function Button() {
  function clickMe() {
    console.log("Aš esu mygtuko komponentas");
  }
  return (
    <div>
      <button onClick={clickMe}>Click</button>
    </div>
  )
}
