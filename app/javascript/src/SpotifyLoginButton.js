import React, { useContext } from "react"
import { UriContext } from "../packs/index"

export default function SpotifyLoginButton() {
    const auth_uri = useContext(UriContext)
    return(
        <a className={"spotify-login-button"} href={ auth_uri }> 
            LOG IN TO SPOTIFY*, DONT B AFRIAD &#128514;</a>
    )
}
