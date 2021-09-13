import React,{Component} from 'react';

import {
    Button, 
    Grid,
    Typography,
    TextField,
    FormHelperText,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    Collapse
} from '@material-ui/core';

import {Alert} from '@material-ui/lab';
import { Link } from 'react-router-dom';


class RoomPage extends Component {
    
    static defaultProps={
        votesToSkip:2,
        guestCanPause:true,
        update:false,
        roomCode:null,
        performed:false,
        success:null,
        updateCallBack:()=>{},

    }
    constructor(props){
        super(props);
    }

    state = {
        guestCanPause:this.props.guestCanPause,
        votesToSkip:this.props.votesToSkip,
        performed:this.props.performed,
        success:this.props.success,
        Msg:''
    }

    handleVotesChange = (e) =>{
        this.setState({
            votesToSkip:e.target.value,
        })
    }

    handleGuestCanPauseChange =(e)=>{
        this.setState({
            guestCanPause:e.target.value === 'true' ? true : false
        })
    }

    handleCreateRoomButtonPressed = ()=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                votes_to_skip:this.state.votesToSkip,
                guest_can_pause:this.state.guestCanPause
            })
        }

        fetch("/api/create-room", requestOptions)
        .then((response)=>response.json())
        .then((data)=>{
            this.props.history.push('/room/'+data.code);
            //console.log(data)
        });
    }

    handleUpdateButtonPressed = ()=>{
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                votes_to_skip:this.state.votesToSkip,
                guest_can_pause:this.state.guestCanPause,
                code:this.props.roomCode
            })
        }
        
        fetch("/api/update-room", requestOptions)
        .then((response)=>{
            if(response.ok){
                this.setState({
                    performed:true,
                    success:true,
                    Msg:"Room Updated successfully!"
                })
            }else{
                this.setState({
                   performed:true,
                   success:false,
                    Msg:"Error Updating Room..."
                })
                
            }
            this.props.updateCallBack();
        })
        
    }

    renderCreateButtons = ()=>{
        return(
            <>
            <Grid item xs={12} align="center">
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleCreateRoomButtonPressed}>Create A Room</Button>
            </Grid>
            
            </>
        )
    }

    renderUpdateButtons = ()=>{
        return(
            <>
            <Grid item xs={12} align="center">
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleUpdateButtonPressed}
                >
                    Update
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>Back</Button>
            </Grid>
            </>
            
        )
    }


    

    render(){
       const title = this.props.update ? 'Update Room' : "Create A Room";
        //console.log(this.state)
        return(
            // this.renderPage()
            <Grid container spacing={1}> {/* 1 = 8px*/}
            <Grid item xs={12} align="center">
                <Collapse in={this.state.performed}>
                    
                  <Alert 
                        severity={this.state.success ? "success" : "error"} 
                        onClose={()=>{
                            this.setState({
                                Msg:'',
                                performed:false
                            }
                            )
                        }}
                    >  
                        {this.state.Msg}
                    </Alert>
                </Collapse>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    {title}
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Guest Control of Playback State
                        </div>
                    </FormHelperText>
                    <RadioGroup row defaultValue={this.props.guestCanPause.toString()} onChange={this.handleGuestCanPauseChange}>
                        <FormControlLabel 
                            value="true" 
                            control={<Radio color="primary"/>}
                            label="Play/Pause"
                            labelPlacement="bottom"
                        />

                           <FormControlLabel 
                            value="false" 
                            control={<Radio color="secondary"/>}
                            label="No Control"
                            labelPlacement="bottom"
                            />
                    </RadioGroup>
                </FormControl>
            </Grid>
            

            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                        required={true} 
                        type="number" 
                        defaultValue={this.state.votesToSkip}
                        inputProps={{
                            min:1,
                            style:{textAlign:"center"}
                        }}
                        onChange={this.handleVotesChange}
                    />
                    <FormHelperText>
                        <div align="center">Votes Required To Skip Song</div>
                    </FormHelperText>
                </FormControl>
            </Grid>

            {this.props.update ? this.renderUpdateButtons() : this.renderCreateButtons()}
            
            
        </Grid>
        
        )
    }
}


export default RoomPage;