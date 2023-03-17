import { Avatar, Button, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
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
    <div style={{display:"flex",flexDirection:"column",minHeight:"80vh",justifyContent:"space-around",alignItems:"center"}}>
      <div style={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
      <Typography variant="h5">Balance:{cash}</Typography>
        <div style={{marginTop:"20px"}}>
        <Button id="add__money" variant="outlined" onClick={()=>addCash(Number(prompt()))}>Add amount</Button>
        <Button variant="contained" onClick={()=>{const amount = parseInt(prompt());if(cash-amount<0)alert("You can't get more than you have");else getCash(amount);}}>Get amount</Button>
      </div>
      </div>
      <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
      <Typography variant="h5">Userlist</Typography>
          {customers.map((customer,ind)=>{
            return(<ListItemButton key={ind} onClick={(e)=>{removeCustomer(customer)}}>
                    <ListItemAvatar>
                      <Avatar/>
                    </ListItemAvatar>
                    <ListItemText primary={customer} style={{textTransform:"capitalize"}}/>
                  </ListItemButton>)
          })}
      <Button variant="outlined" onClick={()=>{const name = prompt();if(name.trim().length>2)addCustomer(name);else alert("Wrong input data") }}>Add customer</Button>
      </div>
    </div>
  );
}

export default App;
