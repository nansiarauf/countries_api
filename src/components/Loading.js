import Spinner from 'react-bootstrap/Spinner'
// import ProgressBar from 'react-bootstrap/ProgressBar'
const Loading = () => {
    return (
        // <div className="Spinner-border" style={{height:50,width:50}}>
        //     <Spinner/>
        // </div>
        <div className="load-spinner">
            <Spinner animation="grow" />
        </div>
    )
}

export default Loading
