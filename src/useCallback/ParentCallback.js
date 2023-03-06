import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

const ParentCallback = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)


    const incrementOne = () => {
        setCounter1(counter1 + 1)
    }

    const calling = useCallback(() => {
        console.log("Rendered !!!");

    }, [counter1])

    console.log(calling); // return the memoized function

    return (
        <div>

            {/* without "memo" if we click on button still ChildCallback will render which should not be done */}
            {/* but if their is some state passed then even with "memo" it will be called */}
            {/* THEN AT THAT TIME WE WOULD HAVE TO USE CALLBACK HOOK */}
            <ChildCallback counter2={counter2} calling={calling} />


            <button onClick={incrementOne}>Counter - {counter1}</button>
        </div>
    )

    // When you define a function inside a component, it is recreated on every render. This can be inefficient if the function is passed as a prop to a child component, because the child component may unnecessarily re-render. In such cases, you can use useCallback to memoize the function and prevent unnecessary re-renders.

    // other use cases are -
    // 1. When you define an event handler inside a component, it is recreated on every render. This can be inefficient if the event handler is passed as a prop to a child component, because the child component may unnecessarily re-render. In such cases, you can use useCallback to memoize the event handler and prevent unnecessary re-renders.
    // 2. Memoizing complex computations
    // 3. Memoizing expensive API calls
}

export default ParentCallback