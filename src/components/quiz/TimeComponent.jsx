import React, { useState } from "react";

function ControlButtons(props) {
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-one">
                {"Resume"}
            </div>
        </div>
    );
 
    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}

function Timer(props) {
    return (
        <div className="text-black">
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
        </div>
    );
}

function TimeComponent() {
    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(15);
 
    React.useEffect(() => {
        let interval = null;
        if (isActive === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);
 
    const handleStart = () => {
        
    };
 
 
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };
 
    return (
        <div>
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                handleStart={handleStart}
                handleReset={handleReset}
            />
        </div>
    );
}
 
export default TimeComponent;