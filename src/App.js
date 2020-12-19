import React, {useState} from 'react'
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home'
import AddNewRoom from './components/AddNewRoom'
import Rooms from './components/Rooms'
import './App.css';

//Welcome to my code .. follow the comments and everything will be fine


function App(props) {


 
  //The state that contains all the rooms
  const [rooms, setRooms] = useState([
    {roomType:'', roomName: "Sample room", roomColor: "#F24452",appliances:['',]}
  ])


  //A function passed through props to component 'AddNewRoom'
  let NewRoom = (t,n,c) => {
    setRooms([...rooms,{roomType: t, roomName: n, roomColor: c, appliances:['',]}])
  }

  //It's the state that is responsible for bringing appliances into the room
  const [appliancesObg , setAppliancesObg] = useState([])

  //Function for inserting new appliances
  let newAppliances = (a,i) => {
   setAppliancesObg(appliancesObg =>[...appliancesObg,a])
      rooms.map((item,index,arr)=>{
        let newArr = rooms
        if(index === i){
          newArr[index].appliances = [...appliancesObg,a]
         setRooms(newArr)
         console.log(newArr[index].appliances)
        }
      })

  }

  //State after providing to each app the index of each room
  const [indexRoom, setIndexRoom] = useState([])
  let chack = (rIndex,rName,rType) =>{setIndexRoom([rIndex, rName, rType])}
  


  //A function responsible for changing the color of appliances in rooms
  let colorChange = (indexApp,indexRoom) =>{
    let appArr = rooms
    console.log(appArr[indexRoom].appliances.length)
    if(rooms[indexRoom].appliances[indexApp].color === 'red'){
      appArr[indexRoom].appliances[indexApp].color = 'lime'
      setRooms(rooms)
      setRooms(appArr)
    }else{
      appArr[indexRoom].appliances[indexApp].color = 'red'
      setRooms(appArr)
    }
  }









 





  return (
    <div className="App">
      
       <Router>
        <Switch>
          <Route exact path = '/' >
           <Home
             arr = {rooms}
             func = {chack}
             
          />
          
          </Route>
          <Route  path = '/addroom' render= { (props) =><AddNewRoom add = {NewRoom}{...props}/>}/>


          <Route path = '/room'>

            <Rooms 
              arr = {rooms}
              index = {indexRoom[0]}
              name = {indexRoom[1]}
              type = {indexRoom[2]}
              funcApp = {newAppliances}
              colorFunc ={colorChange}
            />

          </Route>
        </Switch>
      </Router>
    
     
     
    </div>
  );
}

export default App;
