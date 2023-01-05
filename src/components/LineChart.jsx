import React from 'react'
import { useFetchHistorical } from '../hooks/useFetchHistorical';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";



const LineChart = ({ setDates, name }) => {

    
    const { historical, loading } = useFetchHistorical(name);

    const dates = historical.map(h => {
        return h.date
    })

    const closes = historical.map(h => {
        return h.close
    })



    const labels = dates;

    const data = {

        labels: labels,
        datasets: [
            {
                label:name,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: closes,
            },
        ],
    };


    return (
        <div className="graph">
            <Line data={data} />
        </div>
    );
};

export default LineChart;