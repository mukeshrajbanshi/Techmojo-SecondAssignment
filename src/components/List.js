import React  from "react";

const List = (props) => {
    

    return (
        <p>{props.arr.map((i)=>i).join(", ")}</p>
        
    );
};

export default List;