
import logo from './logo.webp'
function App() {
  return (
    
    <div>
     <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color": "#e3e3e3"}}>
      
     <a className="navbar-brand mb-0 h1" href="#"><img src={logo} style={{'height':'52px'}}></img>Genix Auction</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav my-2 ms-auto">
     
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Auctions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Bidding
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         About us
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         English
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Get Started</button>
      </li>
      <tr/>

    </ul>
    
  </div>
</nav>
    </div>
  );
}

export default App;
