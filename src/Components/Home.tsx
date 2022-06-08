import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <ul>
            <button> <Link to="/page1">ir pagina 1</Link></button>
            <li> <Link to="/page2">ir pagina 2</Link></li>
        </ul>
    </div>
  )
}
