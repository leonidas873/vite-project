import logo from "/thexplace-logo.svg";
import "./Header.css";
import Nav from "./Nav";
import Button from "../Button/Button";


function Header(){
    
    return <div className="header">
        <img src={logo} alt=""/>
        <Nav/>
        <Button text="sign in" type="secondary"/>
        <Button text="join"/>
    </div>
}

export default Header;