import { useEffect, useState } from "react";
import { useFetchHistorical } from "../hooks/useFetchHistorical"
import { DisplayTable } from "./DisplayTable";

export const TablePriceDate = ({ name }) => {

   
    const {historical,loading} = useFetchHistorical(name);

    return (
        <>
            {
              !loading&& historical.slice(0).reverse().map( hist => {
                return <DisplayTable key={name+hist.date} name={name} hist={hist}/>
              })
            }
        </>
    )
}
