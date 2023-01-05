import { DisplayName } from "./DisplayName";


export const Nemos = ({ products,setState}) => {
    

    return (
        <>
            {
                products.map(sym => {
                    
                    return <DisplayName key={sym.symbol} sym ={sym} setState ={setState}  />
                })
            }
        </>
    )
}
