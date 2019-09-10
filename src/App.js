import React from 'react';

// function App() {
//   const greeting = "Hiiii!";
//   const dom = <h1 className="foo">{greeting}</h1>
//   return dom;
// }

// function App() {
//   return <input type="text" onChange={() => {console.log("clicked")}} />;
// }

function App() {
  return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("clicked")}} />;
      </React.Fragment>
  )
}

export default App;
