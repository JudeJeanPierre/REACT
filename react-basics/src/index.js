// import React from "react";
import React, { useState } from "react";

import ReactDOM  from "react-dom";

// const element = <>
// <h1> hello world</h1><p>lorem ipsum</p>;
// </>

function Webpage() {
    const name = "Jude JP";
    // const date = new Date()
    return <>
    <section>
    <header>
        <h2>Hello {name}</h2>
        </header>
    <p>lorem ipsum</p>
    </section>

    {/* <Clock time={date}/> */}
    <Clock />
    </>
}

// function Clock(props){
    function Clock(){
        // let time = new Date().toLocaleTimeString("US");
        const [time, setTime] = useState(new Date().toLocaleTimeString("US"));
        setInterval(() => setTime(new Date().toLocaleTimeString("US")), 1000)
        
        // setInterval(setTime, 1000);
        // function setTime(){
            // time = new Date().toLocaleTimeString("US");
            // console.log(time);
        
    // return <p>It's currently: {new Date().toLocaleTimeString("US")}</p>
    // return <p>It's currently: {props.time.toLocaleTimeString("US")}</p>
    return <p>It's currently: {time}</p>

}

ReactDOM.render(<Webpage/>, document.getElementById("root"));

// ReactDOM.render(element, document.getElementById("root"));
