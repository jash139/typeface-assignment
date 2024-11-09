import axios from "axios"
import { handleError } from "./handleError";

export const postRequest = (URL, payload) => {
    if (URL) {
        return axios.post(URL, payload).then(response => {
            return response;
        }).catch(error => {
            handleError(error, 500);
        })
    }
};