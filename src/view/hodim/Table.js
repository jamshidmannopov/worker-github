import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../App"

function Table({ item, index, deleteHodim, changeHodim }) {

    const { dataDaraja, dataLavozim } = useContext(MyContext);

    return <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.phone}</td>
        <td>{dataLavozim.find(element => element.id === item.lavozim_id)?.name}</td>
        <td>{dataDaraja.find(element => element.id === item.ilmiy_daraja_id)?.name}</td>
        <td><button className='btn text-danger' onClick={() => changeHodim(item)}><i className="fa-solid fa-pen"></i></button></td>
        <td><button className='btn btn-danger' onClick={() => deleteHodim(item.id)}>Delete</button></td>
    </tr>
}

export default Table