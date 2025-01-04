/* eslint-disable react/prop-types */
import "../styles/Froms.css";

function Personal({
  fullName,
  phoneNumber,
  email,
  onNameChange,
  onPhoneNumberChange,
  onEmailChange,
}) {
  return (
    <div className="personal">
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={onNameChange}
        />
        <input
          type="text"
          placeholder="Number"
          value={phoneNumber}
          onChange={onPhoneNumberChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
      </form>
    </div>
  );
}

export default Personal;
