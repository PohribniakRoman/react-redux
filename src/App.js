import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();

  const cash = useSelector(state=>state.cash);

  const addCash = (cash) => {
    dispath({type:"ADD_CASH",payload:cash})
  }
  const getCash = (cash) => {
    dispath({type:"GET_CASH",payload:cash})
  }

  return (
    <div>
      <h1>Balance:{cash}</h1>
      <button onClick={()=>addCash(Number(prompt()))}>Add amount</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get amount</button>
    </div>
  );
}

export default App;
