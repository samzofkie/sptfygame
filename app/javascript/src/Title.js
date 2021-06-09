import React from "react"

export default function Title() {
    return(
        <>
        <svg viewBox="0 0 500 300">
            <path id="curve" d="M 30 290 Q 100 1, 300 150 T 490 150" />
            <text className={"title"} width="500">
                <textPath href="#curve">
                    Welcome 2 tha Sponify Game
                </textPath>
            </text>
        </svg>
        </>
    )
}
