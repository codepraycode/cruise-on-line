import React,{Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/homepage'
import RoomJoinPage from './components/Roomjoinpage';
//import CreateRoomPage from './components/CreateRoomPage';
import RoomPage from './components/RoomPage';
import Room from './components/Room';

class Routes extends Component{
     state = {
        roomCode:null
    }

    async componentDidMount(){
        fetch('/api/user-in-room')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                roomCode:data.code
            })
        })
    }

    clearRoomCode=()=>{
        this.setState({
            roomCode:null
        })
    }
    render(){
        return (
        <Switch>
            {/* <Route path="/" exact component={HomePage}/> */}
            <Route path="/" exact render={() => {
                return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`}/>): <HomePage/>
            }}/>
            {/* <Route path="/room/:code"  component={Room}/> */}
            <Route path="/room/:code" render={(props)=>{
                return <Room {...props} leaveRoomCallBack={this.clearRoomCode}/>
            }}/>
            <Route path="/join"  component={RoomJoinPage}/>
            {/* <Route path="/create" component={CreateRoomPage}/> */}
            <Route path="/create" render={(props)=>{
                return <RoomPage update={false} {...props}/>
            }}/>
        </Switch>
        )
    }
    
}


export default Routes;