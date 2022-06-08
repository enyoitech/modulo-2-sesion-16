import React from 'react'
import { Link } from "react-router-dom";


export const Pagina1 = () => {
  const id = 5
  return (
    <div>
      <ul>
        <li><Link to={`/detalle/${id}`}>ir pagina 2</Link></li>
      </ul>
    </div>
  )
}
