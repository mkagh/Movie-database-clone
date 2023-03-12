import React from 'react'
import { useParams } from 'react-router-dom'


const Actor = ({ actors }) => {
    const { actor } = useParams()
    console.log(actor)
    const uniqueactorArr = actors.filter((oneActor) => {
        const { s } = oneActor
        return s.includes(actor)
    })
    return (
        <div>{uniqueactorArr.map((uniqueactor) => {
            const { l, qid, rank, s, y, id } = uniqueactor
            return (
                <div key={id} className='uniqueactor'>
                    <h1>{actor}</h1>
                    <div className="name">
                        <h3>Motion picture:{l}</h3>
                    </div>
                    <div className="type">
                        <h3>type:{qid}</h3>
                    </div>
                    <div className="rank">
                        <h3>rank:{rank}</h3>
                    </div>
                    <div className="year">
                        <h3>released:{y}</h3>
                    </div>
                    <div className="cast">
                        <h3>Cast:</h3>
                        <h3>{s}</h3>
                    </div>

                </div>
            )
        })}</div>
    )
}

export default Actor