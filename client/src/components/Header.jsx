import axios from "axios";
import { useGoogleLogin,googleLogout } from '@react-oauth/google';
const Header = () =>{
    // process.env.OAUTH
    const establishUser = (res) =>{
        //https://www.googleapis.com/auth/userinfo.email
        axios({
            method: "get",
            url: `https://www.googleapis.com/auth/userinfo.email?${res.access_token}`,
            headers: {
                Authorization: `Bearer ${res.access_token}`,
                Accept: 'application/json',
                
            }

        }).then((res)=>{
            console.log(res);
        })
    }

    const login = useGoogleLogin({
        onSuccess: tokenResponse => establishUser(tokenResponse),
    });

    return(
        <div className="Header">
            <h1>KSP Share</h1>
            {/* <label>search</label>
            <input type="search"defaultValue="Kraken Drive"></input> */}

            <button onClick={() => login()}>Login</button>
            <button onClick={() => googleLogout()}>Logout</button>

            {/* <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />   */}
        </div>
    );
}
export default Header;