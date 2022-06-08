import React, {Dispatch, FC, SetStateAction } from 'react'
import { useNavigate } from "react-router-dom";

  //setTokenUser: React.Dispatch<React.SetStateAction<boolean>>
interface IProps{
  setTokenUser: Dispatch<SetStateAction<boolean>>
}

export const Login:FC<IProps> = ({setTokenUser}) => {

    const navigate = useNavigate();

    const login = () =>{
      setTokenUser(true)
            navigate('/');
      }
  return (
    <div>
        <button
        onClick={()=> login()}
        >Logear</button>
    </div>
  )
}
