import React, { useEffect } from "react";

const Redirect = () => {
    useEffect(() => {
        window.location.href = "haha";
    }, []);

    return <h5>Redirecting...</h5>;
};

export default Redirect;