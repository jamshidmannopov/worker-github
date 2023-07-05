import React, { createContext, useReducer } from 'react'
import Router from './Router/Router'
import Link1 from './Router/Link1'

export const MyContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LAVOZIM':
      return { ...state, dataLavozim: [...state.dataLavozim, action.payload] }
    case 'DELETE_LAVOZIM':
      return { ...state, dataLavozim: [...state.dataLavozim] }
    case 'ADD_HODIM':
      return { ...state, dataHodim: [...state.dataHodim, action.payload] }
    case 'DELETE_HODIM':
      return { ...state, dataHodim: [...state.dataHodim] }
    case 'ADD_DARAJA':
      return { ...state, dataDaraja: [...state.dataDaraja, action.payload] }
    case 'DELETE_DARAJA':
      return { ...state, dataDaraja: [...state.dataDaraja] }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    dataHodim: [
      { id: 1, name: 'John', lastName: 'Doe', phone: '99999', lavozim_id: 2, ilmiy_daraja_id: 1 },
      { id: 1, name: 'Tom', lastName: 'Jerry', phone: '12345', lavozim_id: 1, ilmiy_daraja_id: 2 },
    ],
    dataLavozim: [
      { id: 1, name: 'Developer', price: '1000$' },
      { id: 2, name: 'PM', price: '2000$' },
    ],
    dataDaraja: [
      { id: 1, name: 'Middle', bonus: '5%' },
      { id: 2, name: 'Junior', bonus: '2%' },
    ]
  })


  return <div className='container'>
    <MyContext.Provider value={{
      dataHodim: state.dataHodim,
      dataLavozim: state.dataLavozim,
      dataDaraja: state.dataDaraja,
      dispatch: dispatch
    }}>
      <Link1 />
      <Router />
    </MyContext.Provider>
  </div>
}

export default App