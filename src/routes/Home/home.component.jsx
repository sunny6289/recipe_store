
import { Outlet } from "react-router-dom";
import Navigation from "../../component/Navigation/navigation.component";

import './home.styles.scss';
const Home = () => {
    return (
        <div className='full-page'>
            <Navigation/>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    );
}

export default Home;
