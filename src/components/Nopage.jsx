import React from 'react'
import { useParams } from 'react-router-dom'
export default function Nopage() {
    const name = useParams();
  return (
    <div>
        <h1>No Page as "{name.id}" </h1>
    </div>
  )
}
