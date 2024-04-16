
import { Outlet } from "react-router-dom";
import Navigation from "../../component/Navigation/navigation.component";
import { useContext } from "react";

import './home.styles.scss';
import { UserContext } from "../../context/user/user.context";
import Authentication from "../Authentication/authentication.component";
const Home = () => {
    const {isLogIn} = useContext(UserContext);
    return (
        <div className='full-page'>
            <Navigation/>
            {
                isLogIn ?  (<div className="outlet">
                <Outlet/>
            </div>) : (<Authentication/>)
            }
        </div>
    );
}

export default Home;
