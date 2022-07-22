import "./styles.css"
import logo from "../../assets/imgs/logo.svg"

function header() {
    return (
      <>
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                Desenvolvido por
                <a href="#"> Syllas Braga</a>
                </p>
            </div>
        </header>
      </>
    )
  }
  
  export default header