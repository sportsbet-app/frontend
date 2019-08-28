import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import AboutBox from './aboutbox';

const About = () => {
    const [info, setInfo] = useState(1);


    return (
        <div style={{ background: "red", width: "100vw", height: "500px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", background: "red" }}>
                <div style={{ width: "15vw", marginTop: "20px", textAlign: "center" }}>
                    <h3>About Sportsbet</h3>
                    <div style={{ height: "30px", border: "1px solid black", textAlign: "center" }} onClick={() => { setInfo(1) }}>
                        Info 1
                    </div>
                    <div style={{ height: "30px", border: "1px solid black", textAlign: "center" }} onClick={() => { setInfo(2) }}>
                        Info 2
                    </div>
                    <div style={{ height: "30px", border: "1px solid black", textAlign: "center" }} onClick={() => { setInfo(3) }}>
                        Info 3
                    </div>
                    <div style={{ height: "30px", border: "1px solid black", textAlign: "center" }} onClick={() => { setInfo(4) }}>
                        Info 4
                    </div>
                </div>
                <div style={{ border: "1px solid black", width: "55vw", marginTop: "20px" }}>
                    <AboutBox info={info} />
                </div>
            </div>
        </div>
    )
}

export default About;