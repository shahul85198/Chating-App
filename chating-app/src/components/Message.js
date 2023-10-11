import React from "react";

function Message() {
    return (
        <div className="message owner">
            <div className="messageinfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_wbx6WdmBtyVvJ1k6maH-I4Ij1kXXC-ijbYDeOSyw&s" alt="" />
                <span>just now</span>
            </div>
            <div className="messagecontent">
                <p>Hello</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_wbx6WdmBtyVvJ1k6maH-I4Ij1kXXC-ijbYDeOSyw&s" alt="" />
            </div>
        </div>
    )
}

export default Message