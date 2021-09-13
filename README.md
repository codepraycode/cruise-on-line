# Cruise on-line
A Web based music controller, a project while learning rest-framework and working with Spotify's Api, It was fun on my side😋.
# Story
I was learning django rest framework and joined @techwithtim on a youtube series where we built a web based music controller using Spotify's API.
I followed through the tutorial,learnt a lot and built it succesfully, added some features to the app and Here it is😂

# Setup Procedures
I didn't go further into looking out to deploying, but maybe later in the future I'll make it easily consumable, but at this stage..😅..if you want to use it, just follow the following steps to set it up on your computer:
- **[_required_]** Make sure you have [python](https://www.python.org/) and [node](https://nodejs.org/en/) installed if you don't.
- **[_required_]** Make sure you have your [Spotify account](https://spotify.com/), then open your [dashboard](https://developer.spotify.com/) to get your credentials.
- create a python virtual environment, and activate it.
- open two command prompts, one from `.\frontend\` which will serve as the frontend server, and the other from the **root** directory, i mean the directory where`manage.py` is located, this will server as the backend server.
- **[_required_]** install python requirements, just run `pip install -r requirements.txt` on the backend server command prompt
-  **[_required_]** install node js requirements, just run `npm install` on the frontend server command prompt.
- in `.\spotify\credentials(example).py`, fill the empty strings there with your own credentials from the dashboard, after that, rename it to `credentials.py`(it's important)
- with all that set, on your browser, use the url `http://127.0.0.1:8000/` to **Cruise on-online**

> **Note (Warning)**: 
If you want to adjust or do anything...make sure you understand the flow and procedures, I'll advice you learn by watch the [tutorial videos](https://www.youtube.com/watch?v=Lsq9oRZ2WiU&list=RDCMUC4JX40jDee_tINbkjycV4Sg&start_radio=1&rv=Lsq9oRZ2WiU&t=0), or message me for guidiance tho🙄😏.

## How to use it
Using it is simple, the song is played on spotify,but the app communicates with spotify, therefore with the app, the song can be paused and skipped. so...
### As a host(Cruiser)
* As host, you create a room,and you'll login to spotify
* Share your room code with others to join
* What ever song you play on spotify will reflect on the app, you can skip at will.

### As a member(Cruisee)
* You'll join a room
* Type in a room code (received from the host)
* you'll vote for a song to be skipped, only the host can skip a song, however if a certain number of votes is met, the app will skip (majority carries the vote😄)

>Note:
- If the host leaves the room, everyone leaves
- Except the host's account is a premium spotify account, nobody can skip, just pause, Yes!....it's Spotify's thing, not the App😏.

## Tools 
Tools invloved weren't much, they are:
- Django
- Django rest framework
- React
- [Spotify's API](https://developer.spotify.com/)
that's all, you should watch Tim's [video](https://www.youtube.com/watch?v=Lsq9oRZ2WiU&list=RDCMUC4JX40jDee_tINbkjycV4Sg&start_radio=1&rv=Lsq9oRZ2WiU&t=0) cause using Spotify's API isn't eazy like those we use in [Rapid Api](https://rapidapi.com/)😂😂. Tim did a great job explaining and using them, at least I understood it through his video.

<hr>

## Credits

**Tech with Tim** @techwithtim, you should check out his [youtube channel](https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg) 

Also checkout the [tutorial i watched](https://www.youtube.com/watch?v=Lsq9oRZ2WiU&list=RDCMUC4JX40jDee_tINbkjycV4Sg&start_radio=1&rv=Lsq9oRZ2WiU&t=0) 👈.
