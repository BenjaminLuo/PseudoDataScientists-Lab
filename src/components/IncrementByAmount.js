import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(incrementByAmount(parseInt(document.getElementById('textval').value)))
    }

    return (
        <div>
            <div>
                <span>{count}</span>
                <form>
                    <input id="textval" type="text" />
                    <button
                        type="submit"
                        aria-label="Increment value"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Set Value
                    </button>
                </form>

            </div>
        </div>
    )
}