"use client"
import React from 'react'
export const Table = (props) => {
  const{headers,data,columns,handleDelete}=props
  return <table border="2px">
      <thead>
          <tr>
              {
                  headers.map((val, ind) => {
                      return <th key={ind}>{val}</th>
                  })
              }
              <th>Delete</th>
          </tr>
      </thead>
      <tbody>
          {
              data.map((obj, ind) => {
                  return <tr key={ind}>
                      {
                          columns.map((key, index) => {
                              return <td  key={index}>{obj[key]}</td>
                          })
                      }
                      <td><button  onClick={()=>handleDelete(obj)}>Delete</button></td>
                  </tr>
              })
          }
      </tbody>
  </table>
}
 const Xml = () => {
  const [users, setUsers] = React.useState([])
  const handleDelete=(row)=>{
      const cloneusers=[...users]
const index=cloneusers.findIndex((obj)=>{
      return obj.id==row.id
     })
     cloneusers.splice(index,1)
     setUsers(cloneusers)
  }
  const handleClick = () => {
      //Create an object for XMLHttpRequest

      const httpObj = new XMLHttpRequest();

      // prepare the request

      httpObj.open("get", "https://jsonplaceholder.typicode.com/users")

      // send the request

      httpObj.send();

      // success call

      httpObj.onload = function () {
          let res = httpObj.responseText;
          res = JSON.parse(res);
          setUsers(res);
      }

      // error 

      httpObj.onerror = function () {
          console.log("fail")
      }

  }
  return <div>
      <button onClick={handleClick}>Get users</button>
      {users.length > 0 && <Table
          headers={["Name", "Phone Number", "Email"]}
          data={users}
          columns={['name', 'phone', 'email']}
          handleDelete={handleDelete}
      />
      }
  </div>
}
export default Xml
