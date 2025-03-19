import React, { useEffect, useState } from 'react'

type User = {
  name: string,
  age: number
}
type Users =User[];

export default function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/users");
      const data = await response.json()
      setUsers(data.Users)
    }
    getUsers();
  })
  return (
    <div><h1>
      Users
      </h1>
      <div>
        <ul>
        {
          users.map((user) => (
            <li>{user.name} : {user.age}</li>
          ))
        }
        </ul>
      </div>

    </div>
  )
}
