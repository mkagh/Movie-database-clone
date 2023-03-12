import React from 'react'
import { useParams } from 'react-router-dom'
const OneYear = ({ forYearsArr }) => {
    const { id } = useParams()
    const filteredArr = forYearsArr.filter((item) => {
        const { y } = item
        return y == id//mora biti ovako dok ne prebacimo u isti data type
    })
    if (filteredArr.length === 0) {
        return (
            <div>THERE IS NO MOVIE MADE THAT YEAR</div>
        )

    }
    else {

        return (
            <>
                {filteredArr.map((element) => {
                    const { id, l, qid, rank, s, y } = element
                    return (
                        <div key={id} className='movieByYear'>
                            <p>{l}</p>
                            <p>{qid}</p>
                            <p>{rank}</p>
                            <p>{s}</p>
                            <p>{y}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default OneYear