import React from 'react'
// import '../style/workcard.scss'

export default function WorkCard({link, name, desc}) {
  return (
    <div className="card work-card">
      <a href={link} className='work-img'>
        <img src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
      </a>

      <div className="work-card-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}
