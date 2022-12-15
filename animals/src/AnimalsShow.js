import './AnimalsShow.css'
import { useState } from 'react'

import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
// import { useState } from 'react'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    heart
}


function AnimalShow({ type }) {
    // console.log({ type })

    const [clicks, setClick] = useState(0)

    const handleClick = () => {
        setClick(clicks + 1)
    }

    return (
        <div onClick={handleClick} className='animal-show'>
            <img src={svgMap[type]} alt={type} className='animal' />
            <img
                className='heart'
                alt="hearts"
                src={heart}
                style={{ width: 10 + 10 * clicks + "px" }}

            />

        </div>
    )
}

export default AnimalShow;