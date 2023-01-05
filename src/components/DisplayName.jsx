
export const DisplayName = ({sym,setState}) => {


    return (
        <>
            <tr>
                <td><a href="#"  onClick={()=>setState({name:sym.symbol, loading: false,})}> {sym.symbol}</a></td>
            </tr>


        </>

    )
}
