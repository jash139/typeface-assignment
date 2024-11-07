import axios from "axios"

export const getResponse = (URL) => {
    if (URL) {
        return axios.get(URL).then(response => {
            return response;
        }).catch(error => {
            logError(error)
        })
    }
}

const logError = (error) => {
    console.error(error);
    // Send some log to backend
}