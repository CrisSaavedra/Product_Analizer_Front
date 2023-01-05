import { useEffect, useState } from 'react';
import { getHistorical } from '../helpers/getHistorical'

export const useFetchHistorical = (name) => {
    const [historical, setHistorical] = useState([]);
    const [loading, setLoading] = useState(true);

    const copyData = async () => {
       
        const data = await getHistorical(name); 
        setHistorical(data);
        setLoading(false);
    }
    
    useEffect(() => {
        copyData();

    }, [name])

    return {
        historical,
        loading
    }
};