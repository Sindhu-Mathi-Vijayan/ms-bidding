
import logo from '../Navbar/logo.webp'
import {Link ,useNavigate } from "react-router-dom";

export default function NavBar()
{
    const navigate = useNavigate();
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color": "#e3e3e3"}}>
         
        <Link className="navbar-brand mb-0 h1" to='/'><img src={logo} alt="Logo" style={{'height':'52px'}}></img>Genix Auction</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav my-2 ms-auto">
        
         
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to={"#"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Auctions
           </Link>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           </div>
         </li>
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to={"/#"} id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Bidding
           </Link>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           </div>
         </li>
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to={"/#"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About us
           </Link>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           </div>
         </li>
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to={'/#'} id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            English
           </Link>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           </div>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to={'/login'}>Login</Link>
         </li>
         <li className="nav-item">
         <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={()=>navigate('/signup')}>Get Started</button>
         </li>
         <li className="nav-item">
           <p></p>
         </li>
         <tr/>
   
       </ul>
       
     </div>
   </nav>
   
       </div>
    )
}