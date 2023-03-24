import axios from "axios";

const Header = () =>{
    // process.env.OAUTH
    // https://accounts.google.com/o/oauth2/v2/auth
    // https://accounts.google.com/o/oauth2/v2/auth?
    // scope=https://www.googleapis.com/auth/userinfo.email&
    // include_granted_scopes=true&
    // response_type=token&
    // state=state_parameter_passthrough_value&
    // redirect_uri=http://localhost:3001/auth/&
    // client_id=82657227381-jiv8dbkh5unpbed4kt04rrffogiqtcok.apps.googleusercontent.com
    const oAuth = () =>{
        axios.get()

    }


    return(
        <div className="Header">
            <h1>KSP Share</h1>
            {/* <label>search</label>
            <input type="search"defaultValue="Kraken Drive"></input> */}
            <button onClick={e => oAuth()}>Login</button>
        </div>
    );
}
export default Header;