
import {ENDPOINT} from "../constants/app_constants";

export const app_service = {
    getAPIResponse : function(){
        return fetch(ENDPOINT).then((response) => response.json())
    }
}
