import React from 'react'
import { useParams } from 'react-router-dom'

const OneMotionPicture = ({ OneMotionPictureArr }) => {
    const { name } = useParams()
    const filteredOneMotionPictureArr = OneMotionPictureArr.
        filter((item) => {

            return item.l == name
        })
    console.log(filteredOneMotionPictureArr)
    return (
        <div>
            {filteredOneMotionPictureArr.map((item) => {
                const { s, qid, l, y, yr, i, id } = item
                const { imageUrl } = i

                return (
                    <div key={id} className='singleMotionPicture'>
                        <div className="upperpart">

                            <p>{l}</p>
                            <p>{qid}</p>
                            <p>year:{y}</p>
                            <p>duration:{yr}</p>
                            <p style={{ margin: "2em" }} >cast:<br />{s}</p>
                        </div>
                        <div className="name-image">
                            <div>
                                <img src={imageUrl} alt="" />

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OneMotionPicture