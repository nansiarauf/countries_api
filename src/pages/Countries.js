import useCountries from "../hooks/useCountries";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { numberWithCommas } from "../utils/numbersComma";

const Countries = () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const {countries,isloading,error} =useCountries(url)
    return (
        <section className="mt-5" >
            <div className="container">
                <div>
                <h1>List of Countires in the World</h1>
            </div>
            <div className="row text-center">
                {isloading && <Loading/>}
                {error && <Error/>}  
                {countries &&
                    countries.map((country) =>(
                        <Card
                            name={country.name}
                            img={country.flag}
                            population={numberWithCommas(country.population)}
                            
                        />
                    ))
                }
            </div>

            </div>
        </section>
    );
}

export default Countries;