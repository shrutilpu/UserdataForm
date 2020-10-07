import React,{useEffect,useState} from 'react';
import ListData from './ListData';
import './List.css';
import axios from 'axios';
function List({editHnadler}) {
    const [listItem,setListItem ]=useState([]);
    useEffect(() => {
        if(listItem.length===0)
        {axios.get(`https://userdata-4e250.firebaseio.com/data.json`).then(res=>{ 
            const result =Object.entries(res.data);
          return setListItem(result.map(items=>{return {id:items[0],value:items[1]}}));
        })}
      },[listItem.length])
    return (
        <div className="List">
            {listItem.length!==0?listItem.map(item=><ListData key={item.id} id={item.id} 
            name={item.value.Name} email={item.value.Email} editHandler={editHnadler}/>):null}
        </div>
    )
}

export default List
