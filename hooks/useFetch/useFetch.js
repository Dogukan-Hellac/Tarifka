import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, []);

    return { error, loading, data }
}

