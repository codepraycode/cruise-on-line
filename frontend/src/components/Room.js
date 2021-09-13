import React from 'react';
import { Component } from 'react';
import {Grid,Button,Typography} from '@material-ui/core';
import RoomPage from './RoomPage';
import CreateRoomPage from './(trash)CreateRoomPage';
import MusicPlayer from './musicPlayer';


class Room extends Component{
    constructor(props){
        super(props)
        this.roomCode = this.props.match.params.code;
        this.getRoomDetail();
        //this.getCurrentSong();
    }
    state = {
        votesToSkip:2,
        guestCanPause:false,
        isHost:false,
        showSettings:false,
        spotifyAuthenticated:false,
        song:{}
    }

    componentDidMount(){
        this.interval = setInterval(this.getCurrentSong, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    authenticateSpotify = ()=>{
        fetch('/spotify/is-authenticated')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                spotifyAuthenticated:data.status
            })
            if(!data.status){
                fetch('/spotify/get-auth-url')
                .then((response)=>response.json())
                .then((data)=>{
                    window.location.replace(data.url);
                })
            }
        })
    }

    getRoomDetail = ()=>{
        let url = `/api/get-room?code=${this.roomCode}`;

        fetch(url)
        .then((response)=>{
            if (!response.ok){
                this.props.leaveRoomCallBack();
                this.props.history.push('/')
            }
            return response.json();
        })
        .then((data)=>{
            
            this.setState({
                votesToSkip:data.votes_to_skip,
                guestCanPause:data.guest_can_pause,
                isHost:data.is_host
            });
            if(this.state.isHost){
                this.authenticateSpotify();
            }
        })
    }


    getCurrentSong = ()=>{
        fetch('/spotify/current-song')
        .then((response)=>{
            if(!response.ok){
                return {};
            }else{
                return response.json();
            }
        })
        .then((data)=> {
            this.setState({ song:data });
            //console.log(data);
           
        })
    }

    leaveButtonPressed=()=>{
        const requestOptions = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
        }
        fetch('/api/leave-room', requestOptions).then((_response)=>{
            this.props.leaveRoomCallBack();
            this.props.history.push('/')
        })
    }

    updateShowSettings = (value) => {
        this.setState({
            showSettings:value
        })
    }

    renderSettings = ()=>{
        let template = (
            <Grid container spacing={1}>
                <RoomPage 
                    update={true} 
                    votesToSkip={this.state.votesToSkip} 
                    guestCanPause={this.state.guestCanPause} 
                    roomCode={this.roomCode} 
                    updateCallBack={()=>this.getRoomDetail}
                  
                />

            </Grid>
            
        )

        return template;
    }


    renderSettingsButton=()=>{
        return (
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={()=>this.updateShowSettings(true)}>
                    Settings
                </Button>
            </Grid>
        )
    }
    render(){
        
        if(this.state.showSettings){
            return this.renderSettings();
        }
        return(

            <Grid container spacing={1} className="card-in">
                <Grid item xs={12} align="center">
                    <Typography variant="h5" component="h5">
                      Room Code: {this.roomCode}
                    </Typography>
                </Grid>

                {/* {this.state.song} */}
                <MusicPlayer {...this.state.song}/>
                {this.state.isHost ? this.renderSettingsButton() : null}

                <Grid item xs={12} align="center">
                        <Button color="secondary" variant="contained" onClick={this.leaveButtonPressed}>
                            Leave Room
                        </Button>
                </Grid>

              
            </Grid>

        )
    }
}


/* 
<Grid item xs={12} align="center">
                    <Typography variant="h6" component="h6">
                     Votes: {this.state.votesToSkip.toString()}
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                    <Typography variant="h6" component="h6">
                       Guest Can Pause: {this.state.guestCanPause.toString()}
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                    <Typography variant="h6" component="h6">
                  Host: {this.state.isHost.toString()}
                    </Typography>
                </Grid> */
/* <div>
                <h4>Room (Room Code: {this.roomCode})</h4> 
                <p>Votes: {this.state.votesToSkip.toString()}</p>
                <p>Guest Can Pause: {this.state.guestCanPause.toString()}</p>
                <p>Host: {this.state.isHost.toString()}</p>
            </div> */
export default Room;