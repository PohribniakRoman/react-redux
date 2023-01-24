const defaultState = {
    customers:[],
  }


export const customer = (state = defaultState,action) => {
        switch (action.type) {
          case "ADD_CUSTOMER":
              return {...state,customers:[...state.customers,action.payload]} 
            case "REMOVE_CUSTOMER":
              return {...state,customers:state.customers.filter(customer => customer !== action.payload)} 
          default:
            return state
        }
}