import axios from 'axios';

const PICK_REST_API_BASE_URI = "http://localhost:8081/picks/v1" ;

class PickService {

    getPicks() {
        return axios.get(PICK_REST_API_BASE_URI);
    }
}

export default new PickService()