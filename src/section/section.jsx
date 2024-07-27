import React from 'react'
import './section.css'
import Link from 'next/link'
export const Section = () => {
  return (
    <div>
      <ul className='menu'>
        <li><Link href="/Xml">XmlhttpRequest</Link></li>
        <li><Link href="/Fetch">Fetch</Link></li>
        <li><Link href="/Axios">Axios</Link></li>
      </ul>
    </div>
  )
  
}
