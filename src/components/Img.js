import React from "react";
import axios from "axios";
import { useState } from "react";

const Img = () => {
    const [response, setResponse] = useState(null);
    const [desc, setDesc] = useState("");

    return (
        <div>
            <h1>Images</h1>
        </div>
    )
}

export default Img;