import React, { useContext, useReducer, useRef, useState } from 'react'
import { MyContext } from '../../App'
import HodimDataTable from './HodimDataTable'
import HodimDataTableHeader from './HodimDataTableHeader'
import Modal from './Modal'

function Hodim() {

    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');
    const [item, setItem] = useState({});
    const { dispatch, dataHodim, dataLavozim, dataDaraja } = useContext(MyContext)

    function addHodim(event) {
        event.preventDefault()
        let hodimData = {
            id: dataHodim.length + 1,
            name: event.target[0].value,
            lastName: event.target[1].value,
            phone: event.target[2].value,
            lavozim_id: event.target[3].value === 'false' ? 1 : +event.target[3].value,
            ilmiy_daraja_id: event.target[4].value === 'false' ? 1 : +event.target[4].value
        } 

        dataHodim.forEach((element,index) => {
            if(element.name === event.target[0].value){
                dataHodim.splice(index,1);
            }
        });

        dispatch({
            type: 'ADD_HODIM',
            payload: hodimData
        })

        event.target[0].value = null
        event.target[1].value = null
        event.target[2].value = null
        event.target[3].value = 'false'
        event.target[4].value = 'false'

    }

    function deleteHodim(id) {
        dataHodim.forEach((element, index) => {
            if (element.id === id) {
                dataHodim.splice(index, 1);

                dispatch({
                    type: 'DELETE_HODIM',
                })
            }
        });

    }

    function changeHodim(item) {
        setShowModal(true);
        setItem(item);
    }

    return (
        <div className='row'>
            <div className={showModal ? 'col-8' : 'col-12'}>
                <div className='card'>
                    <div className='card-header'>
                        <HodimDataTableHeader setShowModal={setShowModal} setSearch={setSearch} />
                    </div>
                    <div className='card-body'>
                        <HodimDataTable data={dataHodim} changeHodim={changeHodim} deleteHodim={deleteHodim} search={search} />
                    </div>
                </div>
            </div>
            {showModal && <Modal addHodim={addHodim} setShowModal={setShowModal} dataDaraja={dataDaraja} dataLavozim={dataLavozim} item={item} setItem={setItem} />}
        </div>
    )
}

export default Hodim