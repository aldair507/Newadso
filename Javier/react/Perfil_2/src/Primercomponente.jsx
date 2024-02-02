export const Avatar = () => {
  return (
    <img
      className="usuario"
      src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Lionel_Messi%2C_Player_of_FC_Barcelona_team.JPG"
      alt="usuarios"
      width={250}
      height={250}
    />
  );
};

export function Data({ nombre, edad, apellido }) {
  return (
    <>
      <p> nombre:{nombre}</p>
      <p> edad:{edad}</p>
      <p>apellido:{apellido}</p>
    </>
  );
}
