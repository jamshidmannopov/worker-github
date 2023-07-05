import React from 'react'

function DarajaDataTable({ data, search, deleteDaraja }) {
    return <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Bonus</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                data
                    .filter((element) => search.toLowerCase() === '' ? element : element.name.toLowerCase().includes(search))
                    .map((item, index) => <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.bonus}</td>
                        <td className='text-end'><button className='btn btn-danger' onClick={() => deleteDaraja(item.id)}>Delete</button></td>
                    </tr>
                    )
            }
        </tbody>
    </table>
}

export default DarajaDataTable