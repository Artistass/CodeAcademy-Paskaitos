import { useSettingsContext } from '../../Context/DarkAndLightModes';
import styles from './Body.module.css';

export default function Body() {
  const { isDarkMode } = useSettingsContext();

  return (
    <div className={`${styles.body} ${isDarkMode ? styles.dark : ''}`}>
      <h1>Understanding useContext in React.js</h1>
      <p>The <code>useContext</code> hook in React.js is a powerful tool that allows developers to manage state across components efficiently. It provides a way to share values like functions or data without passing props down manually at every level.</p>
      <ul>
        <li><code>useContext</code> simplifies state management.</li>
        <li>Helps in avoiding prop drilling.</li>
        <li>Improves code readability and maintainability.</li>
        <li>Facilitates the creation of global state accessible by multiple components.</li>
      </ul>
      <p>To get started with <code>useContext</code>, first create a context using the <code>createContext</code> function. Then, wrap your component tree with a context provider and pass the state you want to share as the value. Finally, consume the context in any component using the <code>useContext</code> hook.</p>
      <p>Here's a brief example:</p>
      <pre>
        <code>
{`import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
    const [value, setValue] = useState('Hello, world!');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
}

function MyComponent() {
    const { value } = useContext(MyContext);

    return <p>{value}</p>;
}

function App() {
    return (
        <MyProvider>
            <MyComponent />
        </MyProvider>
    );
}

export default App;`}
        </code>
      </pre>
    </div>
  );
}
