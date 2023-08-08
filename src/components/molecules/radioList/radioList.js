import React from 'react';

import './radioList.scss';

function RadioList({ array, state, setState }) {
    return (
        <div className='listRadio'>
            {array &&
                array.map(({ _id, label }) => (
                    <div
                        key={_id}
                        aria-hidden='true'
                        onClick={() => setState(_id)}
                        className={`listRadio__radio  ${state === _id ? ' active' : ''} `}
                    >
                        <span />
                        <p>{label}</p>
                    </div>
                ))}
        </div>
    );
}

export default RadioList;
