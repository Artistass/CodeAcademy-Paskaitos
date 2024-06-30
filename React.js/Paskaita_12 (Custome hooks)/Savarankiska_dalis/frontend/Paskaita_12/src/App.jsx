import './App.css';
import { useHover } from './hooks/useHover';

function App() {
 const elementRef = useHover()

  return (
    <div>
      <h1 ref={elementRef}>
        H1 Elementas
      </h1>
    </div>
  );
}

export default App;
