import React from 'react'

function LavozimDataTable({ data, deleteLavozim ,search}) {
    return <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {
                data
                    .filter((element) => search.toLowerCase() === '' ? element : element.name.toLowerCase().includes(search))
                    .map((item, index) => <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td className='text-end'><button className='btn btn-danger' onClick={() => deleteLavozim(item.id)}>Delete</button></td>
                    </tr>
                    )
            }
        </tbody>
    </table>
}

export default LavozimDataTable