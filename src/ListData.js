import React from 'react'
function ListData({name,email,id,editHandler}) {
    
    return (
        <div className="ListData">
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={()=>editHandler(id)} type="button">edit</button>
        </div>
    )
}

export default ListData
