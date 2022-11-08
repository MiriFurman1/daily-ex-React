import Card from './Card';
import './App.css';



function App() {
  return (
    <div className="App">
      <Card name="first card" text="text text text text text text text" url="https://www.youtube.com/" image="https://source.unsplash.com/random/300x300/?wallpaper,landscape"></Card>
      <Card name="second card" text="hello hello hello hello hello " url="https://mdl.appleseeds.org.il/" image="https://source.unsplash.com/random/300x300/?wallpaper,landscape"></Card>
      <Card name="third card" text="welcome welcome welcome welcome " url="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597082#overview" image="https://source.unsplash.com/random/300x300/?wallpaper,landscape"></Card>


    </div>
  );
}

export default App;
