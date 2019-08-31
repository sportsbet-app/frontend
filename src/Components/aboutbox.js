import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

const AboutBox = (props) => {

    if (props.info === 1) {
        return (
            <div>
                aboutinfo1
            </div>
        )
    }
    if (props.info === 2) {
        return (
            <div>
                aboutinfo2
            </div>
        )
    }
    if (props.info === 3) {
        return (
            <div>
                aboutinfo3
            </div>
        )
    }

    if (props.info === 4) {
        return (
            <div>
                aboutinfo4
            </div>
        )
    }
}

export default AboutBox;
