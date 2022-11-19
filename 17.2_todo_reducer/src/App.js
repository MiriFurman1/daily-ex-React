import React, { useState, useEffect, useReducer } from 'react';

//! useReducer ????

const initialState = [
  { name: 'Bob', song: 'One Love', id: 1, like: 0 },
  { name: 'Micheal', song: 'Black or white', id: 2, like: 10 },
  { name: 'Roger', song: "We don't need no education", id: 3, like: 2 },
];

// useReducer(reducerFunc,initialState)

export const artistsReducer = (state, action) => {
  // console.log('action', action);
  // console.log('state', state);
  switch (action.type) {
    case 'add_artist':
      return [...state, action.payload];
    case 'add_like':
      const id = action.payload;
      return state.map((artist) => {
        if (id === artist.id) {
          artist.like++;
          return artist;
        }
        return artist;
      });
    default:
      return state;
  }
};

function App() {
  const [artists, dispatchArtists] = useReducer(artistsReducer, initialState);
  const [taskArr, setTaskArr] = useState(
    localStorage.taskArr ? JSON.parse(localStorage.taskArr) : []
  );
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    const dataToLS = JSON.stringify(taskArr);
    localStorage.setItem('taskArr', dataToLS);
  }, [taskArr]);
  //! read localStorage and update the state

  const handleInput = ({ target: { value } }) => {
    setInputVal(value);
  };

  //! update localStorage
  //? Create
  const handleAddTask = () => {
    //! ↓↓↓↓↓↓↓ state is Async!!!!!
    //! no so very good practice ↓
    if (inputVal.trim()) {
      // const tempState = [...taskArr, { value: inputVal, done: false }];
      setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
      setInputVal('');
    }
  };

  //! update localStorage
  //? Update
  const handleUpdate = (index) => {
    //?
    setTaskArr((prev) => {
      return prev.map((task, mapIndex) => {
        // mapIndex !== index ? task : { ...task, done: !task.done }
        if (mapIndex !== index) {
          return task;
        } else {
          task.done = !task.done;
          return task;
        }
      });
    });
  };

  //! update localStorage
  //? Delete
  const handleDelete = (index) => {
    setTaskArr((prevState) =>
      prevState.filter((task, mapIndex) => {
        return mapIndex !== index;
      })
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      {console.table(artists)}
      <button
        onClick={() => {
          dispatchArtists({
            type: 'add_artist',
            payload: { name: 'Jim', song: 'Baby you can', id: 5, like: 11 },
          });
        }}
      >
        Add Artist
      </button>
      <button
        onClick={() => {
          dispatchArtists({
            type: 'add_like',
            payload: 1,
          });
        }}
      >
        Add Like
      </button>
      {/* <input value={inputVal} onChange={handleInput} /> */}
      {/* <button onClick={handleAddTask}>Add Task</button> */}
      {/* //? Read */}
      {/* {taskArr.map((task, mapIndex) => (
        <div key={task.value + mapIndex}>
          <h3
            onClick={() => {
              handleUpdate(mapIndex);
            }}
          >
            {task.value} - {task.done ? 'V' : 'X'}
          </h3>
          <button
            onClick={() => {
              handleDelete(mapIndex);
            }}
          >
            Delete
          </button>
        </div>
      ))}{' '} */}
    </div>
  );
}

export default App;
