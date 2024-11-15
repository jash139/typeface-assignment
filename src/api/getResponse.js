import axios from "axios"
import { handleError } from "./handleError";

export const getResponse = (URL) => {
    if (URL) {
        return axios.get(URL).then(response => {
            return response;
        }).catch(error => {
            handleError(error, 500);
        })
    }
};