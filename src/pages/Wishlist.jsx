import { useState, useCallback } from "react";
import React from 'react'

const Wishlist = () => {
    const [count, setCount] = useState(0);

    const upClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const downClick = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    return (
        <div className='wishlist'>
            <h1>film</h1>
            <div className="numberOrder">
                <p onClick={upClick} >up</p>
                <input value={count} className='upDown' type="text" />
                <p onClick={downClick}>down</p>
            </div>
        </div>
    )
}

export default Wishlist