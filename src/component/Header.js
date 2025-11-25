import { Link } from "react-router-dom";

function Header(){
    return(

        <div className="header">
            <h1>
                <Link to="/">TODO 영단어 암기장</Link>
            </h1>
            <div className="menu">
                <a href="#" className="link">Word +</a>
                <a href="#" className="link">Day +</a>
            </div>
        </div>
    )

}

export default Header;