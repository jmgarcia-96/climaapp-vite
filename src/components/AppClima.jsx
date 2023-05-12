import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
