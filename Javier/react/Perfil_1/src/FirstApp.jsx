export const Avatar = () => {
  return (
    <img
      className="avatar"
      src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTAyNTc0Nzg3NDA1MDcz/messi-jersey-real-madridjpg.jpg"
      width={500}
      height={500}
    />
  );
};

export function Data({ nombre, edad, apellido }) {
  return (
    <>
      <h1>{nombre}</h1>
      <h1>{edad}</h1>
      <h1>{apellido}</h1>
    </>
  );
}
