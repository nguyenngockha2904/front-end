import React, { memo } from 'react';

const demoHookChildren = (props) => {
    console.log('Demo Children rerender');
    return (
        <div>
            <h5>Sum :</h5>
            <button className="btn btn-outline-success" onClick={props.calSum}>Calculate sum</button>
        </div>
    );
};

export default memo(demoHookChildren);