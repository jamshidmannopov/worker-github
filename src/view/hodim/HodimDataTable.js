import React from 'react'
import Table from './Table'

function HodimDataTable({ data, changeHodim, deleteHodim, search }) {
    return <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Telefon</th>
                <th>Lavozim</th>
                <th>Ilmiy Daraja</th>
                <th>O'zgartirish</th>
                <th>O'chirish</th>
            </tr>
        </thead>
        <tbody>
            {
                data
                    .filter((element) => search.toLowerCase() === '' ? element : element.name.toLowerCase().includes(search))
                    .map((item, index) => <Table key={index} item={item} index={index} deleteHodim={deleteHodim} changeHodim={changeHodim} />)
            }
        </tbody>
    </table>
}

export default HodimDataTable