import { Input } from "./Avatar";

export const App = () => {
  return (
    <>
    <br />
      <Input value="id" /> 
      <br />
      <br />
      
      <Input value="name" />
      <br />
      <br />
      <Input value="apellido" /> 
      <br />
      <br />
      <Input type="email" value="email" /> 
      <br />
      <br />
      <Input value="edad" />
      <br />
      <br />
      <input type="submit" onClick={()=>{alert("no has registardo nada webon")}}/>

    </>
  );
};
