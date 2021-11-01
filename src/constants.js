export const ROOT_URL = 'https://api.spotify.com/v1'
export const HEADER = {
    headers: {
        'Content-Type': 'application/json',
    }
}
export const TOKEN = 'token'
export const SCOPE = [
    "streaming",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-private",
    "user-read-currently-playing", 
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
];
export const NO_PLAYING = "No song is playing"
export const CLIENT_ID = "38f371b382974633a699ed26951ac3a1";
export const REDIRECT_URI = "http://localhost:3000/";
export const LOGO_URL = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"