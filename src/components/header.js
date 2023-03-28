import "./header.css";
function NavArea() {
  return (
    <header className="Ourheader">
      <nav className="navBar">
        <div className="logo">
            <h2>Aman</h2>
        </div>
        <ul className="navLinks">
            <li><a href="#" className="navItem">Home</a></li>
            <li><a href="#" className="navItem">About Us</a></li>
            <li><a href="#" className="navItem">Services</a></li>
            <li><a href="#" className="navItem">Portfolio</a></li>
            <li><a href="#" className="navItem">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default NavArea;
