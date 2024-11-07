import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className='mt-10'>
        <li><Link href="/dashboard/users/1"></Link>User 1</li>
        <li><Link href="/dashboard/users/1"></Link>User 2</li>
        <li><Link href="/dashboard/users/1"></Link>User 3</li>
        <li><Link href="/dashboard/users/1"></Link>User 4</li>
      </ul>
    </div>
  )
}

export default page
