import store from '../store.js'
import Axios from 'axios'

export default () => {
    Axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?order=by-opening-date&api-key=Vh2YVntOxHyZz6MOhatQcxDMtWrFOsBP")
    .then(res => store.dispatch({type: "NEWEST", payload: res.data.results}));
}