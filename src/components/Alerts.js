import React from 'react'

export default function Alerts(props) {
    const Capitalize=(word)=>{return word.charAt(0).toUpperCase()+word.slice(1);}
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}: </strong>{props.alert.msg}
            </div>
        </div>
    )
}
