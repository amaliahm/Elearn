import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TimeComponent() {
    const [time, setTime] = useState(15000);
    const navigate = useNavigate()
 
    React.useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setTime((time) => time - 10);
        }, 10);
        if (time === 0) {
            clearInterval(interval);
            navigate('/user/assessment')
        }
        return () => {
            clearInterval(interval);
        };
    },);
 
    return (
        <div className="">
            <span className="text-3xl text-[var(--main-color)]">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="text-3xl text-[var(--main-color)]">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
        </div>
    );
}
 
export default TimeComponent;