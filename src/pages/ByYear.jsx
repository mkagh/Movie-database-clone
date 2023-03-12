import React from 'react'
import { Link } from 'react-router-dom'
let years = []

for (var i = 1950; i < 2024; i++) {//umesto 2024 napisi pomocu date objekta
    years.push(i)
}
const byYear = () => {
    return (<>
        <h1 style={{ textAlign: "center" }}>BROWSE BY YEAR</h1>
        <div className='years'>
            {
                years.map((year) => {
                    return <Link to={`/byYear/${year}`}><p>{year}</p></Link>
                })
            }</div>
    </>
    )
}

export default byYear