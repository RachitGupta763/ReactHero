import { useRouteError } from "react-router-dom";
const ErrorHandle = () => {
  const err=useRouteError();

  console.log(err);
  return <div>
    <h1>Opps!!!!</h1>
    <h2>SomeThing Went Wrong</h2> 

    <h3>
        {err.status}
    </h3>
  </div> 
}
export default ErrorHandle;