import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice, { incrementByAmount } from './counterSlice'

export default function IncrementByAmount() {
    const count = useSelector((state) =>
        state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <span>{count}</span>
                {/* {increment by amount} */}
                <br></br>
                <br></br>Enter your amount:<input type="text" id="firstname"/>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(incrementByAmount (parseInt(document.getElementById("firstname").value)))}
                >
                    Increment by amount 
                </button>
            </div>
        </div>
    )
}