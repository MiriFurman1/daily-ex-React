import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



export default function App() {
  const [cats, setCats] = useState([])
  const [newName, setNewName] = useState("")
  const [newBreed, setNewBreed] = useState("")
  const [newCountry, setNewCountry] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  const [id,setId]=useState("")
  const [updateFinished,setUpdateFinished]=useState(false)

  useEffect(() => {
 
    const fetchData = async () => {
      const { data } = await axios.get('https://637389a9348e9472990f6169.mockapi.io/cats');
      setCats(data)
      setUpdateFinished(false)

    };
    fetchData();
  

  }, [updateFinished])

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('https://637389a9348e9472990f6169.mockapi.io/cats', { name: newName, breed: newBreed, country: newCountry })

    setCats((prev) => { return ([...prev, { name: newName, breed: newBreed, country: newCountry }]) })
    setNewName('')
    setNewBreed('')
    setNewCountry('')
  }


  function handleNewName(e) {
    setNewName(e.target.value)
  }
  function handleNewBreed(e) {
    setNewBreed(e.target.value)
  }
  function handleNewCountry(e) {
    setNewCountry(e.target.value)
  }

  function handleDelete(index) {
    let id = (cats[index].id)
    axios.delete(`https://637389a9348e9472990f6169.mockapi.io/cats/${id}`)
    setCats((prev) => {
      return prev.filter((cat, catIndex) => {
        return id !== cat.id
      })
    })
  }

  function handleEdit(index) {
    setId (cats[index].id)
    console.log(id);
    setIsEditing(true)

  }
  function handleCancel(){
setIsEditing(false)
  }
  function handleSave(e){
e.preventDefault()
handleUpdate()
setIsEditing(false)
setNewName('')
setNewBreed('')
setNewCountry('')
  }

  async function handleUpdate(){
    try {
      const { data } = await axios.put(`https://637389a9348e9472990f6169.mockapi.io/cats/${id}`, 
      { name: newName, 
        breed: newBreed, 
        country: newCountry });
      console.log(data);
      setIsEditing(false)
      setUpdateFinished(true)
  } catch (e) {
      setErrorMessage(e.message);
      setTimeout(() => {
          setErrorMessage(null);
      }, 1500);
  }
  }
  return (
    <div className="App">
      <div>
        <h1> Create New Cat</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input name='name' onChange={handleNewName} value={newName}></input>
          <label htmlFor='breed'>Breed</label>
          <input name='breed' onChange={handleNewBreed} value={newBreed}></input>
          <label htmlFor='country'>Country</label>
          <input name='country' onChange={handleNewCountry} value={newCountry}></input>
          {!isEditing ? <button type='submit'> Add Cat</button> : (
            <div>
              <button onClick={handleSave}>save</button>
              <button onClick={handleCancel}>cancel</button>
            </div>)}


        </form>
      </div>
      <div className='catDiv'>

        {cats?.map((cat, index) => {
          return <div className="cat" key={cat.id}>
            <h3>Name: {cat.name}</h3>
            <h5>Breed: {cat.breed}</h5>
            <h5>Country: {cat.country}</h5>
            <button onClick={() => { handleDelete(index) }}>delete</button>
            <button onClick={() => { handleEdit(index) }}>edit</button>
          </div>
        })}

      </div>

    </div>
  );
}