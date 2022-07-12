import React from "react";
import List from "./List";

export default function Todo() {
    const arr1 =  ['walk','cook','bake'];
    const arr2 = ['study','Code','Eat'];

    return (
        <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>

            <List  arr = {arr1}/>
            <h2>Tomorrow</h2>
            <List arr= {arr2} />
        </div>
    );
};

