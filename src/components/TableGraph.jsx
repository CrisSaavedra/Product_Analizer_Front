
import {  useState } from "react";
import LineChart from "./LineChart";


export const TableGraph = ({ name }) => {

    const [dates, setDates] = useState([]);

    return (
        <>
            <LineChart setDates={setDates} name={name}/>
        </>
    )
}
