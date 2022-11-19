import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import arr from './store';
import { useEffect } from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/products'>products</Link>
    </div>
  );
}
function About() {
  return <h1>About</h1>;
}
function E404() {
  return <h1>404</h1>;
}

function Animal() {
  // fetch all animals names
  return (
    <div>
      <h1>Animal</h1>
      <Link to='/'>Home</Link>
      <Link to='/animal/cat'>Cat</Link>
      <Link to='/animal/dog'>Dog</Link>
    </div>
  );
}
function Products() {
  const params = useParams();
  const [data,setData]=useState("")
  

    // Api call containing params.animalType
    // if error redirect to 404 page
    // else ↓
useEffect(()=>{
setData(arr)
},[])
console.log(data);
if (data){
  return (
    data.map((product)=>{
      return <div>
        <Link to={`/products/${product.title}`}>{product.title}</Link>

      </div>
    })
    )
}

}

function DisplayProduct(product){
  return <div>
  <h4>{product.title}</h4>
  <h4>{product.price}$</h4>
  <h4>{product.size}</h4>
  <img alt="" src={product.imageUrl}></img>
</div>
}

function App() {
  return (
    <div>
      App NavBar
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product' element={<DisplayProduct />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
