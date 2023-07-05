import React, { useContext, useReducer, useState } from 'react'
import { MyContext } from '../../App';
import LavozimDataTable from './LavozimDataTable'
import LavozimDataTableHeader from './LavozimDataTableHeader'
import Modal from './Modal'

function Lavozim() {

    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');
    const {dispatch,dataLavozim} = useContext(MyContext);

    function addLavozim(event) {
        event.preventDefault()
        let LavozimData = {
            id: dataLavozim.length+1,
            name: event.target[0].value,
            price: event.target[1].value + '$'
        }

        dispatch({
            type: 'ADD_LAVOZIM',
            payload: LavozimData
        })

        console.log(LavozimData);

        event.target[0].value = null
        event.target[1].value = null

    }

    function deleteLavozim(id) {
        dataLavozim.forEach((element, index) => {
            if (element.id === id) {
                dataLavozim.splice(index, 1);

                dispatch({
                    type: 'DELETE_LAVOZIM',
                })
            }
        });
    }

    return (
        <div className='row'>
            <div className={showModal ? 'col-8' : 'col-12'}>
                <div className='card'>
                    <div className='card-header'>
                        <LavozimDataTableHeader setShowModal={setShowModal} setSearch={setSearch} />
                    </div>
                    <div className='card-body'>
                        <LavozimDataTable data={dataLavozim} deleteLavozim={deleteLavozim} search={search} />
                    </div>
                </div>
            </div>
            {showModal && <Modal addLavozim={addLavozim} setShowModal={setShowModal}/>}
        </div>
    )
}

export default Lavozim