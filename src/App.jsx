import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();

  const customers = useSelector(state=>state.customer.customers);
  const cash = useSelector(state=>state.cash.cash);

  const addCash = (cash) => {
    dispath({type:"ADD_CASH",payload:cash})
  }
  const getCash = (cash) => {
    dispath({type:"GET_CASH",payload:cash})
  }
  const removeCustomer = (name) => {
    dispath({type:"REMOVE_CUSTOMER",payload:name})
  }
  const addCustomer = (name) => {
    dispath({type:"ADD_CUSTOMER",payload:name})
  }

  return (
    <div>
      <h1>Balance:{cash}</h1>
      <button onClick={()=>addCash(Number(prompt()))}>Add amount</button>
      <button onClick={()=>getCash(Number(prompt()))}>Get amount</button>
      <div>
        <b>Userlist</b><br />
        <ul>
          {customers.map((customer,ind)=>{
            return <li key={ind} onClick={(e)=>{removeCustomer(e.target.innerText)}}>{customer}</li>
          })}
      </ul>
      <button onClick={()=>addCustomer(prompt())}>Add customer</button>
      </div>
    </div>
  );
}

export default App;
