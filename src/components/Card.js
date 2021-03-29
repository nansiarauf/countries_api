import { Link } from "react-router-dom"
import Loading from "../components/Loading";
import Error from "../components/Error";
const Card = ({ name, img, population,isloading,error }) => {
    return (
        <div className="card m-3 shadow-lg"
            style={{ height: "18rem", width: "18rem" }}>
                {isloading && <Loading/>}
                {error && <Error/>} 
            <img src={img} alt="" className="card-img-top img-fluid" style={{height:"10rem",width:"18rem"}}/>
            <div className="card-body">

            <Link to={`/details/${name}`} className="nav-link">
                    <h4>{name}</h4>
                    <h4>{population}</h4>
            </Link>
        </div>
        </div>
    );
}

export default Card
