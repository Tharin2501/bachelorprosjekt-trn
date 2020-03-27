import React from "react"
export const CheckBox = (props) => {
    return (
        <div>
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" defaultChecked={props.isChecked} value={props.value} /> {props.displayValue}
        </div>
    )
}
export default CheckBox