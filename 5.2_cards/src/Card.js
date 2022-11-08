import './Card.css'

function Card(props){
return <div className="card">
    <h1>{props.name}</h1>
    <p>{props.text}</p>
    <a
          className="App-link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          click me
        </a>

        <img
        src={props.image} alt="img">
</img>
</div>

}


export default Card;