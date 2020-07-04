import store from '../store.js'
import Axios from 'axios'

export default   query => {
    Axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + query + "&api-key=Vh2YVntOxHyZz6MOhatQcxDMtWrFOsBP")
    .then(res => store.dispatch({type: "SEARCH",
                                 payload: res.data.results}));
}