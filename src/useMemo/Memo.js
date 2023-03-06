import React, { useMemo, useState } from 'react'

export default function Memo() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    function incrementOne() {
        setCounter1(counter1 + 1)
    }

    function incrementTwo() {
        setCounter2(counter2 + 1)
    }


    // AS THIS IS IRRESPOSIBLE FOR "counter2" STILL WHEN WE ENVOKE "counter2" THIS WILL AFFECT THAT
    // const isEven = () => {
    //     let i = 0
    //     while (i < 20000000000)
    //         i++

    //     return (counter1 === 0)

    // }

    // SO FOR THIS PREVENTION AND OPTIMIZATION WE HAVE TO USE "useMemo"


    // THIS USEMEMO RETURN THE Memoized FUNCTION
    const isEven = useMemo(() => {
        // let i = 0
        // while (i < 2000)
        //     i++

        return (counter1 === 0)

        // as this function should depend on counter1
    }, [counter1])

    console.log(isEven);

    return (
        <div>

            <button onClick={incrementOne}> Counter - {counter1}</button>
            <br />

            <p>{isEven ? "Even" : "Odd"}</p>

            <button onClick={incrementTwo}> Counter - {counter2}</button>

        </div>

        // Yes, besides optimizing the performance of expensive calculations, useMemo can be useful in a variety of other use cases, including:

        //  1.    Memoizing function callbacks:
        // You can use useMemo to memoize function callbacks that are passed as props to child components. This can be helpful in preventing unnecessary re-renders of child components when the parent component re-renders.

        // 2. Memoizing complex objects:
        // If you have a complex object that is computationally expensive to create, you can use useMemo to memoize the object and prevent unnecessary re - renders of your component.


        // 3. Memoizing expensive API calls:
        // If you have an API call that is expensive to make, you can use useMemo to memoize the result of the API call and prevent unnecessary re - renders of your component.
    )
}