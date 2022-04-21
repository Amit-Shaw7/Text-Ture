import React from 'react'

function Alert(props) {
  return (
    <div style={{ height: "40px" }}>
      {props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>}
    </div>
  )
}

{/* <div style={{ height: '50px' }}>
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  </div>}
</div> */}

export default Alert