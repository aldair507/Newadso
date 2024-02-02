import"./App.css"

export const Avatar = () => {
  return (
    <>
      <img className="img1"
        src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg" 
        width={200}
        height={200}
      />
    </>
  );
};

export function Data({ Nombre, Apellido,edad }) {
  return (
    <>
      <h3>{Nombre}</h3>
      <h3>{Apellido}</h3>
      <h3>{edad}</h3>
    </>
  );
}
