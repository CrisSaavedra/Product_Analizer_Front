export const getHistorical = async (id) => {
    const url = `http://localhost:9090/api/historical/${id}`

    const resp = await fetch(url);

    const {historical} = await resp.json();
    

    const priceDate = historical.map(sym => ({
        date: sym.date,
        close : sym.close,

    }))

    return priceDate;

};