import "./header.css";
import './banner.css';
function Banner() {
  return (
    <div className="hero-banner">
      <div className="hero-contents">
        <div className="hero-col hero-col-left">
          <h1>
            I’m <span>Aman</span> Raj
          </h1>
          <h4>Freelance UI/UX Designer</h4>
          <div className="hero-social-links">
            <a href="/" className="facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="/" className="linkdin"><i class="fa-brands fa-linkedin"></i></a>
            <a href="/" className="quora"><i class="fa-brands fa-quora"></i></a>
          </div>
        </div>
        <div className="hero-col hero-col-right">
          <img src="/src/Images/hero.png"  alt="Hero-Bg"/>
          {/* Getting Error Here This Image Is Not Inserted Please Check This  */}
        </div>
      </div>
    </div>
  );
}
export default Banner;
