import "./Header.css";

function NavItem({name}){
    return <li>{name}</li>
}

function Nav(){
    return(<ul>
       <NavItem name="item1"/>
       <NavItem name="item2"/>
       <NavItem name="item3"/>
    </ul>)
}

export default Nav;