export const getSymbols = async () => {
    const url = `http://localhost:9090/api/historical`

    const resp = await fetch(url);

    const data = await resp.json();
    
    const products = data.map(sym => ({
        symbol: sym.symbol,
        historical : sym.historical,
    }))

    return products;

};
