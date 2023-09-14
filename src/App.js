// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import FunctionCounter from './Components/FunctionCounter';

const App = () => {
  return (
    <div className='App'>
      <hr />
      <ClassCounter />
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <hr />
      <FunctionCounter />
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
};

export default App;
