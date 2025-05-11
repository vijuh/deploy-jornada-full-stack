// Fetch ou Axios
import "dotenv/config";
import axios from "axios";

//const { NODE_ENV } = process.env;
//const URL = "http://localhost:3001/api";
const URL = "https://deploy-jornada-full-stack-qj5w.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
