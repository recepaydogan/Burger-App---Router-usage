import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <p>© 2024 Burger Project</p>
    </div>
  );
}

export default Footer;
