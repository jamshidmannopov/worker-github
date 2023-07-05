import React from 'react'

function Modal({ addDaraja, setShowModal,useMemo }) {
    return <div className='col-4'>
        <div className='card'>
            <div className='card-header'>
                Add Daraja
            </div>
            <div className='card-body'>
                <form onSubmit={addDaraja} id='form-daraja'>
                    <input className='form-control' placeholder='Name' type={'text'} required/>
                    <input className='form-control my-3' max={100} min={0} placeholder='Bonus' type={'number'} required/>
                </form>
            </div>
            <div className='card-footer'>
                <div className='d-flex float-end gap-2'>
                    <button className='btn btn-danger' onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                    <button className='btn btn-primary' form='form-daraja'>Save</button>
                </div>
            </div>
        </div>
    </div>
}

export default Modal