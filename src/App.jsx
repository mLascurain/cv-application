import "./styles/App.css";
import Personal from "./components/Personal.jsx";
import Educacion from "./components/Educacion.jsx";
import Trabajo from "./components/Tranajo.jsx";
import { useState } from "react";

function App() {
  const [formulariosEducacion, setFormulariosEducacion] = useState([
    {
      id: 0,
      institucion: "Universidad Tecnologica Nacional",
      titulo: "Tecnico Universitario en Programacion",
      fecha: "2024",
    },
  ]);
  const [formulariosTrabajo, setFormulariosTrabajo] = useState([
    {
      id: 0,
      empresa: "Google",
      puesto: "Desarrollador Frontend",
      fecha: "2025",
    },
  ]);

  const [formularioPersonal, setFormularioPersonal] = useState({
    nombre: "Matias Lascurain",
    telefono: "4923-1294",
    email: "queteimporta@gmail.com",
  });

  const agregarEducacion = () => {
    setFormulariosEducacion((prevFormularios) => [
      ...prevFormularios,
      { id: prevFormularios.length, institucion: "", titulo: "", fecha: "" },
    ]);
  };

  const borrarEducacion = (id) => {
    setFormulariosEducacion((prevFormularios) =>
      prevFormularios.filter((formulario) => formulario.id !== id)
    );
  };

  const actualizarEducacion = (id, campo, valor) => {
    setFormulariosEducacion((prevFormularios) =>
      prevFormularios.map((formulario) =>
        formulario.id === id ? { ...formulario, [campo]: valor } : formulario
      )
    );
  };

  const agregarTrabajo = () => {
    setFormulariosTrabajo((prevTrabajo) => [
      ...prevTrabajo,
      { id: prevTrabajo.length, empresa: "", puesto: "", fecha: "" },
    ]);
  };

  const borrarTrabajo = (id) => {
    setFormulariosTrabajo((prevTrabajo) =>
      prevTrabajo.filter((trabajo) => trabajo.id !== id)
    );
  };

  const actualizarTrabajo = (id, campo, valor) => {
    setFormulariosTrabajo((prevTrabajo) =>
      prevTrabajo.map((trabajo) =>
        trabajo.id === id ? { ...trabajo, [campo]: valor } : trabajo
      )
    );
  };

  const actualizarPersonal = (campo, valor) => {
    setFormularioPersonal((prevPersonal) => ({
      ...prevPersonal,
      [campo]: valor,
    }));
  };

  return (
    <div className="App">
      <div className="cv-forms">
        <h2 className="titulos">Información personal</h2>
        <div className="container">
          <Personal
            nombre={formularioPersonal.nombre}
            telefono={formularioPersonal.telefono}
            email={formularioPersonal.email}
            onChangePersonal={(campo, valor) =>
              actualizarPersonal(campo, valor)
            }
          />
        </div>
        <h2 className="titulos">Educación</h2>
        <div className="default">
          {formulariosEducacion.map((formulario) => (
            <div className="container" key={formulario.id}>
              <Educacion
                id={formulario.id}
                institucion={formulario.institucion}
                titulo={formulario.titulo}
                fecha={formulario.fecha}
                onBorrar={() => borrarEducacion(formulario.id)}
                onChangeEdu={(campo, valor) =>
                  actualizarEducacion(formulario.id, campo, valor)
                }
              />
            </div>
          ))}
          <button className="boton" onClick={agregarEducacion}>
            + Agregar educación
          </button>
        </div>
        <h2 className="titulos">Trabajo</h2>
        <div className="default">
          {formulariosTrabajo.map((trabajo) => (
            <div className="container" key={trabajo.id}>
              <Trabajo
                id={trabajo.id}
                empresa={trabajo.empresa}
                puesto={trabajo.puesto}
                fecha={trabajo.fecha}
                onBorrar={() => borrarTrabajo(trabajo.id)}
                onChange={(campo, valor) =>
                  actualizarTrabajo(trabajo.id, campo, valor)
                }
              />
            </div>
          ))}
        </div>
        <button className="boton" onClick={agregarTrabajo}>
          + Agregar trabajo
        </button>
      </div>

      <div className="cv-container">
        <div className="personal-info">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>{" "}
            {formularioPersonal.telefono}
          </p>
          <h2>{formularioPersonal.nombre}</h2>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>{" "}
            {formularioPersonal.email}
          </p>
        </div>
        <div className="content">
          <div className="educacion-info">
            <h2>Educación</h2>
            {formulariosEducacion.map((formulario) => (
              <div className="educacion" key={formulario.id}>
                <div className="line"></div>
                <p>{formulario.institucion}</p>
                <p>
                  {formulario.titulo} - {formulario.fecha}
                </p>
              </div>
            ))}
          </div>
          <div className="trabajo-info">
            <h2>Experiencia Laboral</h2>
            {formulariosTrabajo.map((trabajo) => (
              <div className="trabajo" key={trabajo.id}>
                <div className="line"></div>
                <p>{trabajo.empresa}</p>
                <p>
                  {trabajo.puesto} - {trabajo.fecha}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
