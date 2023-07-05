import React from 'react'

function DarajaDataTableHeader({ setShowModal, setSearch }) {
  return <div className='row'>
    <div className='col-4'><input className='form-control' onChange={(e) => setSearch(e.target.value)} placeholder='search...' /></div>
    <div className='col-4 text-center'><h3>Daraja</h3></div>
    <div className='col-4 text-end'><button className='btn btn-danger' onClick={() => setShowModal(prev => !prev)}>Add+</button></div>
  </div>
}

export default DarajaDataTableHeader