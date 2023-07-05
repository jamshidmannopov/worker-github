import React from 'react'

function Modal({addLavozim,setShowModal}) {
  return <div className='col-4'>
    <div className='card'>
        <div className='card-header'>
            Add Lavozim
        </div>
        <div className='card-body'>
            <form onSubmit={addLavozim} id='form-lavozim'>
                <input className='form-control' placeholder='Lavozim' type={'text'} required/>
                <input className='form-control my-3' placeholder='Price' min={1000} max={10000} type={'number'} required/>
            </form>
        </div>
        <div className='card-footer'>
            <div className='d-flex float-end gap-2'>
                <button className='btn btn-danger' onClick={()=> setShowModal(prev => !prev)}>Cancel</button>
                <button className='btn btn-primary' form='form-lavozim'>Save</button>
            </div>
        </div>
    </div>
  </div>
}

export default Modal