import React from 'react'

const Quotes = ({quote}) => {
    return (
        <p>
            {quote.text} <br />
            <span>- {quote.author} </span>
        </p>
    )
}

export default Quotes