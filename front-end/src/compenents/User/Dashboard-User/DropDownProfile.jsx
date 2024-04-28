import React from 'react'

const DropDownProfile = ({handleLogout}) => {
  return(
    <div>
        <ul className='dropdownprofile'>
            <li>
                <a href="/user/profile">Profile</a>
            </li>
            <li>
                <a href="/user/myorder">My Order</a>
            </li>
            <hr />
            <li>
                <a href="" onClick={handleLogout}>Logout</a>
            </li>
        </ul>

    </div>
  )

 }

export default DropDownProfile