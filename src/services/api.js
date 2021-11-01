import axios from 'axios'
import {ROOT_URL,TOKEN} from '@const'
axios.interceptors.request.use((config) => {
    const _token = sessionStorage.getItem(TOKEN)
    config.headers.Authorization = `Bearer ${_token}`
    return config
})

export const getPlaylist = async () => {
    return axios.get(`${ROOT_URL}/me/playlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
export const getMe = async () => {
    return axios.get(`${ROOT_URL}/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
export const getPlaylistById = async (id) => {
    return axios.get(`${ROOT_URL}/playlists/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
export const searchSong = async (q) => {
    return axios.get(`${ROOT_URL}/search/?q=${q}&type=track,playlist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
export const getPlaybackState = async () => {
    return axios.get(`${ROOT_URL}/me/player/currently-playing `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const playSong = async (uri) => {
    return axios.put(`${ROOT_URL}/me/player/play`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        uris: [uri],
    })
}

export const pauseSong = async () => {
    return axios.put(`${ROOT_URL}/me/player/pause`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
export const resumeSong = async () => {
    return axios.put(`${ROOT_URL}/me/player/play`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
export const transferPlayback = async (deviceId) => {
    return axios.put(`${ROOT_URL}/me/player`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        device_ids: [`${deviceId}`]
    })
}

export const getMydevice = async () => {
    return axios.get(`${ROOT_URL}/me/player/devices`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const getPlayerState = async () => {
    return axios.get(`${ROOT_URL}/me/player`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const seekToPosition = async (ms) => {
    return axios.put(`${ROOT_URL}/me/player/seek?position_ms=${ms}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// Discover weekly 37i9dQZEVXcD5SdRMnAdhZ
