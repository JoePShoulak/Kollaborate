import axios from "axios";
import { useGoogleLogin,googleLogout } from '@react-oauth/google';
const Header = () =>{
    // process.env.OAUTH
    const savedCreds = localStorage.getItem("kollabDeets");
    const establishUser = (res) =>{
        console.log("Establishing user.");
        // if(!savedCreds){
        //     console.log("Nothing found in local storage saving.");
        //     savedCreds=res;
        //     let temp = JSON.stringify(savedCreds);
        //     console.log(temp);
        //     localStorage.setItem("kollaDeets",temp);
        // }
        console.log(res);
        axios({
            method: "get",
            url: `https://people.googleapis.com/v1/people/me?personFields=emailAddresses`,
            headers: {
                Authorization: `Bearer ${res.access_token}`,
                Accept: 'application/json',
            }

        }).then((res)=>{
            console.log(res);
        });
    }

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            //maybe slap it into local storage for the time being
            establishUser(tokenResponse)
        },
    });

    return(
        <div className="Header">
            <h1>KSP Share</h1>
            {/* <label>search</label>
            <input type="search"defaultValue="Kraken Drive"></input> */}

            <button onClick={() => login()}>Login</button>
            <button onClick={() => googleLogout()}>Logout</button>

        </div>
    );
}
export default Header;