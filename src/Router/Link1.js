import React from 'react'
import {Link} from 'react-router-dom'

function Link1() {
  return  <div className='row mb-4'>
  <div className='col-4 text-center'><Link className='btn btn-danger' to={'/hodimlar'}>Hodimlar</Link></div>
  <div className='col-4 text-center'><Link className='btn btn-danger' to={'/darajalar'}>Darajalar</Link></div>
  <div className='col-4 text-center'><Link className='btn btn-danger' to={'/Lavozimlar'}>Lavozimlar</Link></div>
</div>
}

export default Link1