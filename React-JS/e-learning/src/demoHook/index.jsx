import React, { useState, useEffect, useCallback } from 'react';
import DemoHookChildren from './child';
const DemoHook = () => {
    const [count, setCount] = useState(0);
    const [isAgree, setIsAgree] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const calSum = () => {
        console.log(num1 + num2);
        return num1 + num2;
    }
    const callSumUseCallBack = useCallback(() => calSum(), [num1]);
    const increaseCourse = () => {
        if (isAgree) {
            setCount(count + 1);
        }
    };
    useEffect(() => {
        console.log('num1: ' + num1);
    });
    const increaseCountUseCallBack = useCallback(() => increaseCourse, []);
    const agreeToChangeCount = () => {
        setIsAgree(!isAgree);
    }
    useEffect(() => {
        console.log('useEffect DidMount === componentDidMount ')
    }, []);

    //  đại diện cho 3 lifecycle : didmount , didupdate, willunmount
    // useEffect(() => {
    //     console.log('useEffect run');
    // });

    // useEffect này chỉnh chạy khi isAgree thay đổi, khi đó ta truyền tham số ta 
    // muốn quan sát vào đối số thứ 2 của Effect 
    useEffect(() => {
        console.log('UseEffect just run when the variable isAgree change');
    }, [isAgree]);
    return (
        <div>
            <h1>Demo Hook</h1>
            <button className="btn btn-success" onClick={increaseCourse}>Increase count</button>
            <button className="btn btn-success" onClick={agreeToChangeCount}>Agree change count</button>
            <h1 className="display-4">Count: {count}</h1>
            {/**<DemoHookChildren count={count} increaseCourse={increaseCountUseCallBack} /> */}
            <DemoHookChildren calSum={callSumUseCallBack} />

            <button className="btn btn-primary" onClick={() => {
                setNum1(num1 + 2);
            }}>Change num1</button>

        </div>
    );
};

export default DemoHook;