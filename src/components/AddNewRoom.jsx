import React, {useState} from 'react'
import {Link} from 'react-router-dom'


// Component responsible for building all rooms according to validation
export default function AddNewRoom(props) {
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    
    let addNew = ()=> {
        if(name.length > 1){
            props.add(type,name,color)

        }else{
            alert('Room name must be at least 2 characters long')
        }
    }
    return (
     <div className={''}><br/><br/>
     
        <select onChange={e => setType(e.target.value)}>
            <option selected value="">Select one</option>
            <option  value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="Storage">Storage</option>
        </select><br/><br/>
        
            <input onChange={e => setName(e.target.value)}  maxlength="5" type="text" placeholder ='Room name'/><br/><br/><br/>
            <input onChange={e => setColor(e.target.value)} type="text" placeholder ='Room color'/><br/><br/><br/>
            <Link to = '/'><button className={'myButton'} onClick={addNew}>Create</button></Link>
            
        </div>
    )
}
