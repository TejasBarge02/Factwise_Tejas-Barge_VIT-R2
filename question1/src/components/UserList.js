import React from 'react'

const UserList = ({users}) => {
    const sorted = users ? users.sort((a,b) => a.lastName.localeCompare(b.lastName)):[]
  return (
    <div>
        <div className="user-count">Users: {sorted.length}</div>
        {sorted.length > 0 && (
            <ul>
                {sorted.map((user) =>
                    <li key={`${user.firstName}-${user.lastName}`}>
                        {user.firstName+" "+user.lastName}
                    </li>
                )}
            </ul>
        )}
    </div>
  )
}

export default UserList
