import React from "react";
import toaster from "toasted-notes";
import '../CustomNotification/style.css'

const CustomNotification = (title, type) => {

    type === "error" ?
        toaster.notify(<div className="Toaster__alert error">{title}</div>,
            { "position": "bottom-right", "type": "success" })
        :
        toaster.notify(<div className="Toaster__alert success">{title}</div>,
            { "position": "bottom-right", "type": "success" })

};

export default CustomNotification;