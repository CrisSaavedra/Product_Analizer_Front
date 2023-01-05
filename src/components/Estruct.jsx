import { useEffect, useState } from "react";
import { getSymbols } from "../helpers/getSymbols";
import { useFetchSymbols } from "../hooks/useFetchSymbols";
import { Nemos } from "./Nemos"
import { TableGraph } from "./TableGraph";
import { TablePriceDate } from "./TablePriceDate";



export const Estruct = () => {

    const { products } = useFetchSymbols(getSymbols);
    const [state, setState] = useState({
        name: '',
        loading: true,
    });

    const { name, loading } = state;


    return (
        <>
            <div className="container ">
                <div className="title">
                    <h1>Product Analyzer</h1>
                </div>

                <div className="grid-dir">
                    <div className="namesTable">
                        <table className=" table ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Nemos products={products} setState={setState} />
                            </tbody>
                        </table>

                    </div>

                    <div className="pricesTable ">

                        <table className="table-price table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !loading && <TablePriceDate name={name} />
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="graphicTable">
                        {
                             !loading &&  <TableGraph  name={name}/>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
