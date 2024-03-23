import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           <h1>Opps!!!!</h1> 
           <Link to={'/'}>GO Back Homepage
           </Link>
        </div>
    );
};

export default Error;