import React, { useContext, useReducer, useState } from 'react'
import { MyContext } from '../../App'
import DarajaDataTable from './DarajaDataTable'
import DarajaDataTableHeader from './DarajaDataTableHeader'
import Modal from './Modal'

function Daraja() {

    const [showModal, setShowModal] = useState(false)
    const [search, setSearch] = useState('')
    const { dispatch, dataDaraja } = useContext(MyContext)

    function addDaraja(event) {

        event.preventDefault()

        let darajalar = {
            id: dataDaraja.length + 1,
            name: event.target[0].value,
            bonus: event.target[1].value + '%'
        }

        dispatch({
            type: 'ADD_DARAJA',
            payload: darajalar
        })

        event.target[0].value = null
        event.target[1].value = null

    }

    function deleteDaraja(id) {
        dataDaraja.forEach((element, index) => {
            if (element.id === id) {
                dataDaraja.splice(index, 1);
            }
        });

        dispatch({
            type: 'DELETE_DARAJA',
        })
    }

    return (
        <div className='row'>
            <div className={showModal ? 'col-8' : 'col-12'}>
                <div className='card'>
                    <div className='card-header'>
                        <DarajaDataTableHeader setShowModal={setShowModal} setSearch={setSearch} />
                    </div>
                    <div className='card-body'>
                        <DarajaDataTable data={dataDaraja} search={search} deleteDaraja={deleteDaraja} />
                    </div>
                </div>
            </div>
            {showModal && <Modal addDaraja={addDaraja} setShowModal={setShowModal} />}
        </div>
    )
}

export default Daraja