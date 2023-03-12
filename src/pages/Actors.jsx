import React from 'react'
import { Link } from 'react-router-dom'

const Actors = ({ actors }) => {
    let images = []
    let help = []
    actors.forEach((actor) => {


        help.push(actor.s.split(","))
        images.push(actor.i.imageUrl)
        images.push(actor.i.imageUrl)
    })

    const mergedArray = [].concat(...help);


    return (
        <div className='actors-list'>
            {
                mergedArray.map((actor, index) => {

                    return (
                        <div key={index}>
                            <Link to={`/actors/${actor}`}> <h2>  {actor}</h2></Link>
                            <div style={{
                                backgroundImage: `url(${images[index]})`, backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} className="img">


                            </div>

                        </div>
                    )
                })
            } </div>
    )
}

export default Actors