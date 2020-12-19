import React, {useState} from 'react'
import {Link} from 'react-router-dom'


//Component showing the rooms built
export default function ShowRooms(props) {
    const [divStyle, setDivStyle] = useState({
            border: "2px solid black",
            width: '130px',
            height: '130px',
            backgroundColor: props.color
        })
    const [roomIndex, setRoomIndex] = useState([props.index,props.name,props.type])
        let rturnFunc = () =>{
            props.func(roomIndex[0],roomIndex[1],roomIndex[2])
        }
    return (
        <div>
        <div className={'room'} style={divStyle}>
           <Link
            style={{ textDecoration: 'none' }}
            to='/room' ><p 
           className={'roomName'}
           onClick={rturnFunc}>{props.name}</p></Link>
        </div>
        </div>
    )
}
