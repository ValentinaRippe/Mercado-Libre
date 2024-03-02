import notfound from "../../assets/notFound.svg";
import "./NotFound.scss";
export const NotFound = () => {
  return (
    <div className="content">
      <div className="notfound">
        <div className="notfound-icon">
          <img src={notfound} alt="notfound" />
        </div>
        <div className="notfound-text">
          <h3>No encontramos productos que coincidan.</h3>
          <ul>
            <li>
              <strong>Revisa la ortografía</strong> de la
              palabra.
            </li>
            <li>
              Utiliza{" "}
              <strong>palabras más genéricas</strong> o
              menos palabras.
            </li>
            <li>
              <a href="https://www.mercadolibre.com.co/categories.html">
                {" "}
                Navega por las categorías
              </a>{" "}
              para encontrar un producto similar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
