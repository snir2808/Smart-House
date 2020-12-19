import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ShowRooms from './ShowRooms'

export default function Home(props) {

    return (
        <div>

            <h1>Smart House</h1>

            <Link to = '/addroom'><button className={'myButton'}>Add new room</button></Link>

            {props.arr.map((item,index,arr)=>{
                return( 
                <ShowRooms
                name = {item.roomName}
                color = {item.roomColor}
                index = {index}
                type = {item.roomType}
                func = {props.func}
                clear = {props.clear}
                />
            )})}
            
        </div>
    )
}
