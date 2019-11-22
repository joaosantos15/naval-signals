import React from 'react'

export const NavButton = (props) => {
  const {label, handler, active} = props

  return <button className={`nav-button ${active && 'active'}`} onClick={handler}>{label}</button>
}
