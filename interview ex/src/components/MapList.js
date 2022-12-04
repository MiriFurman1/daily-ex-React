import data from '../assets/data.json'

import ListItem from './ListItem/ListItem'


export function MapList(){
    return(
        <div>
        {data.map((item)=>{
            return <ListItem itemData={item.name}/>
          })}
          </div>
    )
}