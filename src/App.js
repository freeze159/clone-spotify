import './App.css';
import React, { Fragment, useEffect, useState } from 'react'
import { getTokenFromResponse } from './services/spotify'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './store/auth-slice'
import LandingMain from './components/LandingComponent/LandingMain'
import Main from './components/MainComponent/Main'
import { getPlaylist, getMe, getPlaylistById, transferPlayback, searchSong } from './services/api'

function App() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const [player, setPlayer] = useState(undefined)

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ''
    let _token = hash.access_token;

    const fetchPlaylist = async () => {
      let res = await getPlaylist()
      dispatch(userAction.setPlaylist(res.data.items))

    }
    const fetchMe = async () => {
      let res = await getMe()
      dispatch(userAction.setProfile(res.data))
    }
    const fetchDiscoverWeekly = async () => {
      let discoverWeekly = await searchSong('discover weekly')

      let res = await getPlaylistById(discoverWeekly.data.playlists.items[0].id)
      dispatch(userAction.setDiscoverWeekly(res.data))
    }
    if (_token) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {

        const player = new window.Spotify.Player({
          name: 'Spotify Clone App',
          getOAuthToken: cb => { cb(_token); },
          volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
          transferPlayback(device_id).then(r => {

          })
        });

        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
        
        player.connect();
      };

      sessionStorage.setItem('token', _token)
      dispatch(userAction.setToken(_token))
      fetchPlaylist()
      fetchMe()
      fetchDiscoverWeekly()
    }
  }, [token, dispatch])


  return (
    <Fragment>
      {!token && <LandingMain />}
      {token && <Main />}
    </Fragment>
  );
}

export default App;
