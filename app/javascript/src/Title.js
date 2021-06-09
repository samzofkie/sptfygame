import React from "react"

export default function Title() {
    return(
        <>
        <svg viewBox="0 0 500 300">
            <path id="curve" d="M 10 150 Q 222 333, 300 150 T 490 150" />
            <text className={"title"} width="500">
                <textPath href="#curve">
                    Welcome 2 tha Spotify Used CD Pile
                </textPath>
            </text>
        </svg>
        </>
    )
}
