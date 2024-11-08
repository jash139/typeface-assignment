import React from "react";
import { useRouteError } from "react-router-dom";
import { handleError } from "../api/handleError";

const ErrorPage = () => {
    const error = useRouteError();
    // call a function to log error to backend 
    handleError(error, 404);

    return (
        <div>
            <center>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </center>
        </div>
    );
}

export default ErrorPage;