import React, { memo, useState, useEffect, useRef } from 'react'

const StateHook: React.FC = memo(() => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(false);
    const domRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log('document title effect is running')
        document.title = `like被点击了${ like }次`;
    }, [like])
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus();
        }
    })
    return (
        <>
            <input type="text" ref={ domRef } />
            <button onClick={ e => setLike(like + 1) }>
                { like }
            </button>
            <button onClick={ e => setOn(!on) }>
                { on ? "ON" : "OFF" }
            </button>
        </>
    )
})

export default StateHook