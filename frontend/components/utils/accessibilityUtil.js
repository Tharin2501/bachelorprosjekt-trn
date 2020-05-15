import React from "react"

export const checkIfSpaceOrEnterPressed = (event) => {
    if (event.code === "Enter" || event.code === "Space") {
        return true;

    }
    return false;
}

/*

function a11yClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode;
        if((code === 32)|| (code === 13)){
            return true;
        }
    }
    else{
        return false;
    }
}
*/