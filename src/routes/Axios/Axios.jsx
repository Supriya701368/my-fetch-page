"use client"
import React,{useState} from 'react'
import './Axios.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'bootstrap'
function List(props){
  const{data}=props
      return <div>
        <select>
              {
                  data.map((obj,inde,oa)=>{
                      return <option>{obj.name}</option>
                  })
              }
              </select>
        
              </div>
  }
   export const Axios=() => {
    const [users, setUsers] = React.useState([])
    
    const handleClick =  async () => {

    const result= await fetch("https://jsonplaceholder.typicode.com/users")
    const res= await result.json()
    setUsers(res)
    }
    return <div>
        <button onClick={handleClick}><List data={users}/></button>
    </div>
  }