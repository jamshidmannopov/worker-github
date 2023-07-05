import React, { useEffect, useRef } from 'react';

function Modal({ addHodim, setShowModal, dataDaraja, dataLavozim, item, setItem}) {


    const form1 = useRef();

    useEffect(() => {
        if(item.name){
            form1.current[0].value = item.name
            form1.current[1].value = item.lastName
            form1.current[2].value = item.phone
            form1.current[3].value = item.lavozim_id
            form1.current[4].value = item.ilmiy_daraja_id 

            setItem({});
        }

    }, [item]);

    return <div className='col-4'>
        <div className='card'>
            <div className='card-header'>
                Add Hodim
            </div>
            <div className='card-body'>
                <form onSubmit={addHodim} ref={form1} id='form-hodim'>
                    <input className='form-control' placeholder='Ism' type={'text'} required />
                    <input className='form-control my-3' placeholder='Familya' type={'text'} required />
                    <input className='form-control my-3' placeholder='Telefon' type={'text'} required />
                    <select className='form-select my-3'>
                        <option value={'false'}>Lavozim</option>
                        {
                            dataLavozim.map((item, index) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                    <select className='form-select my-3'>
                        <option value={'false'}>Daraja</option>
                        {
                            dataDaraja.map((item, index) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </form>
            </div>
            <div className='card-footer'>
                <div className='d-flex float-end gap-2'>
                    <button className='btn btn-danger' onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                    <button className='btn btn-primary' form='form-hodim'>Save</button>
                </div>
            </div>
        </div>
    </div>
}

export default Modal