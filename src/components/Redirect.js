import React, { useEffect } from "react";

const Redirect = () => {
    console.log("start1")
    useEffect(() => {
        console.log("start2")
        setTimeout(() => {
            console.log("redirecting---");
            window.location.href = "haha";
        }, 10000);
        console.log("end")

    }, [true]);

    return <h5>Redirecting...</h5>;
};

export default Redirect;