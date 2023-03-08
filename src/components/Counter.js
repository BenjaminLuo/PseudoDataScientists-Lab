import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setVal } from './counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setVal(document.getElementById('textval').value))
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