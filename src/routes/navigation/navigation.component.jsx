import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="nav">
            <div> <Link to="/">
                    <CrwnLogo className="logo"/>
                </Link></div>
                <h1>GİTAR SATIŞ</h1>
               <ul>
               <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
               </ul>
            </nav>
                
     
            <Outlet />
        </Fragment>
    );
}

export default Navigation;