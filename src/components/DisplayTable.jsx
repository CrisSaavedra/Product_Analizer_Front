import { useEffect, useState } from "react";


export const DisplayTable = ({ hist, name }) => {

    const { date, close } = hist;
    return (
        <>
            <tr>
                <td>{close}</td>
                <td>{date}</td>
            </tr>
        </>
    )
}
