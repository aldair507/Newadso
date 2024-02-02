import Proptotypes from "prop-types";

export const MotoviajoAp = ({ Pnombre, Snombre, edad }) => {
  return (
    <>
     <img
      className="avatar"
      src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg"
      width={500}
      height={500}
    />
      <h4>{Pnombre}</h4>
      <h4>{Snombre}</h4>
      <h4>{edad}</h4>
    </>
  );
};

MotoviajoAp.prototype = {
  Pnombre: Proptotypes.string.isRequired,
  Snombre: Proptotypes.string,
  edad: Proptotypes
};

MotoviajoAp.defaultProps = {
  Pnombre: "aldair",
  Snombre: "torres",
  edad: 19,
};
