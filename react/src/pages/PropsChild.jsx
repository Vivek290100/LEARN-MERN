import React from 'react'

const PropsChild = (props, {isLoggedIn}) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>

        {/* Conditional Rendering */}
        <h1>{!isLoggedIn ? "welcome" : "you are not authorized"}</h1>
    </div>
  )
}

export default PropsChild 