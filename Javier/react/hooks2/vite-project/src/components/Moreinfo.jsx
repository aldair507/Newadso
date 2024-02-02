import React from 'react'
import UseUserConstext from '../hooks/UseUser.constext'
export default function Moreinfo() {
  const {name, years}= UseUserConstext()

  console.log(name)
  return (
    <div>
        <h1>
            informacion de el usuario
            <p>nombre:{name}</p>
            <p>edad:{years}</p>
        </h1>
    </div>
  )
}
