/* eslint-disable react/prop-types */
import "../styles/Froms.css";

function Personal({ nombre, telefono, email, onChangePersonal }) {
  return (
    <div className="personal">
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={nombre}
          onChange={(e) => onChangePersonal("nombre", e.target.value)}
        />
        <input
          type="text"
          placeholder="Number"
          value={telefono}
          onChange={(e) => onChangePersonal("telefono", e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => onChangePersonal("email", e.target.value)}
        />
      </form>
    </div>
  );
}

export default Personal;
