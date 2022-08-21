import React, { useState } from 'react'

const Calculator = () => {
    const [val, setVal] = useState("");
    const backspace = () => {
        try {
            setVal(val.slice(0, -1))
        } catch (error) {
            setVal("")
        }
    }
    const calculate = () => {
        try {
            setVal(eval(val));
        } catch (error) {
            setVal("Error")
        }
    }
    return (
        <>
            <div className="container my-2">
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='display-5 fw-border text-center text-primary'> Calculator</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div class='card mb-3 pt-3 shadow'>
                            <div class='card-body text-primary'>
                                <input type='text' className='form-control form-control-lg md-4 text-center bg-light fs-4 text-primary shadow' value={val} onClick={(e) => setVal(e.target.value)} />
                                <div className='row mt-2'>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='1' onClick={(e) => setVal(val + e.target.value)}>1</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='2' onClick={(e) => setVal(val + e.target.value)}>2</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='3' onClick={(e) => setVal(val + e.target.value)}>3</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='C' onClick={() => backspace()}>C</button>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='4' onClick={(e) => setVal(val + e.target.value)}>4</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='5' onClick={(e) => setVal(val + e.target.value)}>5</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='6' onClick={(e) => setVal(val + e.target.value)}>6</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='+' onClick={(e) => setVal(val + e.target.value)}>+</button>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='7' onClick={(e) => setVal(val + e.target.value)}>7</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='8' onClick={(e) => setVal(val + e.target.value)}>8</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='9' onClick={(e) => setVal(val + e.target.value)}>9</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='*' onClick={(e) => setVal(val + e.target.value)}>X</button>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='0' onClick={(e) => setVal(val + e.target.value)}>0</button>
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-light text-primary shadow p-4  fs-4' value='=' onClick={() => calculate()}>=</button>
                                    </div>
                                    <div className='col-2'>
                                        <button className='btn btn-light text-primary shadow p-3 m-2 fs-4' value='.' onClick={(e) => setVal(val + e.target.value)}>.</button>
                                    </div>

                                    <div className='col-2'>
                                        <button className='btn btn-light text-primary shadow mt-2 pt-3 pb-3 pl-4 pr-4  fs-4' value='/' onClick={(e) => setVal(val + e.target.value)}>/</button>
                                    </div>
                                    <div className='col-2'>
                                        <button className='btn btn-light text-primary shadow mt-2 pt-3 pb-3 pl-4 pr-4 fs-4' value='-' onClick={(e) => setVal(val + e.target.value)}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Calculator