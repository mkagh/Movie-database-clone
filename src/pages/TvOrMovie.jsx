import React from 'react'
import { useParams, Link } from 'react-router-dom'

const TvOrMovie = ({ tvMovieArr }) => {
    const { id } = useParams()
    let newTvMovieArr = []
    if (id === "top 5") {
        newTvMovieArr = tvMovieArr.sort((a, b) => {
            console.log(newTvMovieArr)
            return a.y - b.y
        }).slice(0, 5)
    }
    else {

        newTvMovieArr = tvMovieArr.filter((tma) => {
            return tma.qid === id
        })
    }


    return (
        <>
            {newTvMovieArr.map((ntma) => {
                const { l, qid, s, rank, y, id } = ntma
                const splited = s.split(",")
                console.log(splited)
                return (
                    <div key={id} className='tvMovie'>
                        <p>{l}</p>
                        <div className='underMotionPicture'>
                            <p>rank: {rank}</p>
                            <p>year:{y}</p>
                        </div>
                        <p>type:{qid}</p>
                        {/*     <p>{qid}</p> */}
                        <p style={{ marginTop: "2em" }}>Cast:</p>
                        <p>{splited[0]}</p>
                        {/*    <p>{yr}</p> */}
                        <div style={{ textAlign: "center" }}>

                            <Link to={`${l}`}  >  <button >Details</button></Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TvOrMovie