import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="col item social">
          <a
            href="https://www.linkedin.com/in/alonso-chaves-carrillo-9532061a6/"
            target="blank"
          >
            <i className="icon ion-social-linkedin"></i>
          </a>
          <a href="https://github.com/alonsocha07" target="blank">
            <i className="icon ion-social-github"></i>
          </a>
          <a href="https://alonso-chaves-portfolio.netlify.app/" target="blank">
            <i className="icon ion-ios-person"></i>
          </a>
        </div>

        <p className="copyright">
          Este sitio web es realizado como proyecto personal, no planea competir
          ni intentar suplantar a otro sitio llamado con el mismo nombre, el
          nombre estaba cool.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
