"use client"
import React from 'react'
function Orderlist(props){
  const{data}=props
      return <div>
          <ol>
              {
                  data.map((obj,inde,oa)=>{
                      return <li>{obj.name}</li>
                  })
              }
              </ol>
              </div>
  }
   export const Fetch=() => {
    const [users, setUsers] = React.useState([])
    
    const handleClick =  async () => {
    const result= await fetch("https://jsonplaceholder.typicode.com/users")
    const res= await result.json()
    setUsers(res)
    }


    return <div>
        <button onClick={handleClick}>Get List</button>
       <Orderlist data={users}/>
    </div>
  }
