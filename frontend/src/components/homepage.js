import React from 'react';
import {Grid,Button,ButtonGroup,Typography} from '@material-ui/core';

import {Link} from 'react-router-dom';
// import RoomJoinPage from './Roomjoinpage';
// import CreateRoomPage from './CreateRoomPage';

const HomePage=()=>{
    

    return(
        <Grid container spacing={3} className="card-in">
            <Grid item xs={12} align="center">
                <Typography variant="h3" component="h3">
                    Cruise On-line
                </Typography>
                 <Typography variant="p" component="p">
                    One Host. Much Cruise
                </Typography>
            </Grid>
            
            <Grid item xs={12} align="center">
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="primary" to='/join' component={Link}>
                        Join A Room
                    </Button>
                    <Button color="secondary" to='/create' component={Link}>
                        Create A Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        
    )
    
}


export default HomePage;