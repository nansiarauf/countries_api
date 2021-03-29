import { Card, Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
const Home = () => {
    return (
            <section
                className="bg-secondary d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100vh" }}>
                <div className="container text-white">
                    <h1 className="mb-5 text-warning">Know Your Countries</h1>
                    <h2>
                    This APP allows you to browse through <br></br>all the countries
                    around of the world
                    </h2>
                    <Link to="/countries" className="btn btn-info">
                    SEE MORE
                    </Link>
            </div>
            <Container style={{display: "flex"}}>
                <Col xs={4} md={4}
                    style={{ display: "flex", right: "-700px", width: "400px", height: "auto" }}>
                <Card.Img  src="earth.png">

                </Card.Img>
            </Col>
            </Container>
            </section>
    )
}

export default Home
