import Axios from 'axios';
import store from '../store.js'

export default () => {
    Axios.get("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=Vh2YVntOxHyZz6MOhatQcxDMtWrFOsBP")
                           .then(res => {store.dispatch({type: 'LIST', payload: res.data.results});})
                        };