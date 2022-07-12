import React, { useState } from "react";

export default function MyComponent() {
    const [message] = useState("welcome to Techmojo!");

    return (
        <>
        {message}
        </>
    );
}