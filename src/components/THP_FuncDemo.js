import React from 'react'

export default function THP_Funcdemo(props) {
  return (
    <div>
      <hr/>
      <h2>Function coponent Demo</h2>
      <h3>Sd thuoc tinh tu props</h3>
      <p>userName: {props.userName}</p>
      <p>fullName: {props.fullName}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
