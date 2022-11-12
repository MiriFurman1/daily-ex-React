import React from 'react';
import './App.css';
const Mother = ({ children }) => {
  return <div className='mother'>{children}</div>;
};
const Child = ({ children }) => {
  return <div className='child'>{children}</div>;
};
const Balloon = ({ children }) => {
  return <div className={children}></div>;
};
function App2() {
  const arrOfColor = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];
  return (
    <div>
      <Mother>
        <h1>A Tale of Five Balloons</h1>
        <div class='mother_c'>
          {arrOfColor.map((kid) => (
            <Child>
              <h3>{kid.name}</h3>
              <Balloon>{kid.color}</Balloon>
            </Child>
          ))}
        </div>
      </Mother>
    </div>
  );
}

export default App2;
