import React from 'react'

import './radioList.scss'

const RadioList = ({array, state, setState}) => {
    return (
        <div className="listRadio">
            {
                array && array.map(({_id, label}) => (
                    <div key={_id} onClick={() => setState(_id)} 
                        className={`listRadio__radio  ${state === _id ? " active" : ''} `} 
                    >
                        <span></span>
                        <p>{label}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RadioList