import { useEffect, useState } from 'react';
import { getSymbols } from '../helpers/getSymbols'

export const useFetchSymbols = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const copyData = async () => {
        const data = await getSymbols(); 
        setProducts(data);
        setLoading(false);
    }
    
    

    useEffect(() => {
        copyData();

    }, [])

    return {
        products,
        loading
    }
};