import React from "react"
export const CheckBox = (props) => {
    return (
        <div className="checkboxItem">
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" defaultChecked={props.isChecked} value={props.value} />
            {props.displayValue}
        </div>
    )
}
export default CheckBox