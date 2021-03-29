import { useState, useEffect } from "react";
const useCountries = (url) => {
    const [countries, setCountries] = useState();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchCountry = async () => {
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => setError(err));
            setCountries(data);
            setIsloading(false);
        };
        fetchCountry();
        
    }, [url]);

    return {
        countries, isloading, error,
        
    }

    
}

export default useCountries