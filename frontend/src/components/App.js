import React,{Component} from 'react';
import Routes from '../routes';
import {BrowserRouter} from 'react-router-dom';
//import HomePage from './homepage';
// import RoomJoinPage from './Roomjoinpage';
// import CreateRoomPage from './CreateRoomPage';



class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="center">
                {/* <HomePage/> */}
                {/* <RoomJoinPage/>
                <CreateRoomPage/> */}
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </div>
        
        );
    }
}

export default App;