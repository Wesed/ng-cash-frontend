import React from 'react'

const Error = ({error}) => {
  return (
    <p style={{color: 'rgba(255,0,0,.8)', margin: '1rem 0', fontWeight: 'bold', fontSize: '0.8rem'}}>{error}</p>
  )
}

export default Error;