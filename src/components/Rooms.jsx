import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Bulb} from '@styled-icons/ionicons-outline/Bulb'
import {HotTub} from '@styled-icons/material-twotone/HotTub'
import {Radio} from '@styled-icons/zondicons/Radio'
import {Fan} from '@styled-icons/fa-solid/Fan'

//A component that is responsible for displaying the contents of the room and adding electrical products.
// Note! There are lots of variables here with similar names and each one has a different use.
export default function Rooms(props) {

    const newArr = props.arr[props.index].appliances
    //This is a state that forces React to render.
    // To prevent bugs
    const [chack, setChack] =useState(0)

    const [disply, setDisply] = useState('none')
    let disFunc = () =>{
        if(disply === 'none'){
            setDisply('block')
        }else{
            setDisply('none')
        }
    }
    // state that holds the appliance that the user wants to add
    const [applist, setAppList] = useState()

    //The function looks strange? In fact it prevents a lot of bugs.
    //It forces React to render and update to state before sending the variables to the next function
    let colorChange = (i) => {
        setChack(chack+1)
        props.colorFunc(i,props.index)
    }

    //A function that links the product selection menu to the local state
    let appliances = (e) =>{
        let eventValue = e.target.value
        if(eventValue === '<Fan/>' ){
            setAppList({applist: <Fan/>, color: 'red'})
        }else if(eventValue === '<HotTub/>'){
            setAppList({applist: <HotTub/>, color:'red'})
            boilerVal()
        }
        else if(eventValue === '<Radio/>'){
            stereoVal()
        }
        else if(eventValue === '<Bulb/>'){
            setAppList({applist: <Bulb/>, color: 'red'})
        }   
    }

    //A function that sends the values to the main state,
    // and also validates the amount of appliances in each room

    let newAppliances = () =>{
        if(props.arr[props.index].appliances.length === 5){
            alert('you have already 5 appliances in this room! ')
        }else{
        
            props.funcApp(applist,props.index)
            setDisply('none')
            setChack(applist)
        }
    }
    
   let boilerVal = () =>{
        if (props.type === 'Bathroom' ){
            setAppList({applist: <HotTub/>, color:'red'})
            props.funcApp(applist,props.index)
            setDisply('none')
            setChack(applist)
        }else {
            alert('A boiler can only be in the bathroom!')
            setAppList({applist: <HotTub/>, color:'red'})
        }
   }

   let stereoVal = () =>{
        props.arr[props.index].appliances.map((element) => {
        if(element.color === '#FF0000'){
            setAppList({applist: ' ', color: 'black'})
            alert('Only one stereo system in each room!')
        }else{
            setAppList({applist: <Radio/>, color: '#FF0000'})
            
        }
    });
} 


    return (
        <div>
            <h1>Smart House</h1>
            
            <Link to='/'><button className={'myButton'}>Back to rooms</button></Link>
            <p className={'pNT'}>Room type: {props.type}</p>
            <p className={'pNT'}>Room name: {props.name}</p>
            <button className={'myButton'} onClick={disFunc}>Add appliances</button><br/><br/><br/>

            <div style={{display: disply}}>

            <select className={'smallSelect'}
            onChange={appliances}>
                <option selected value=" ">Add</option>
                <option  value={'<Fan/>'}>Air-Conditioner</option>
                <option value={'<HotTub/>'}>boilermaker</option>
                <option value={'<Bulb/>'}>lamp</option>
                <option value={'<Radio/>'}>stereo system</option>
            </select><br/>

            <button className={'myButton'} onClick={newAppliances}>Add</button>
            </div>

            {newArr.map((item,index) => { 
                return(
                <p style={{color: item.color}}
                 className={'app'}
                 onClick = {() =>{colorChange(index)}}
                 >
                  {item.applist}
                </p>)
            }) }
            
        </div>
    )
}
