import { Link } from 'react-router-dom';
import Login from '../identity/Login';
import './Header.css';

export default function Header(props) {

    return (
        <header>
            <div className="container mb-2">
                <div className="d-flex align-items-center justify-content-end">
                    <ul className="nav">
                        <li>
                            <Link to="/home" className="nav-link">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/purchases" className="nav-link">Purchases</Link>
                        </li>
                        <li>
                            <Link to="/strains" className="nav-link pe-0">Strains</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex">
                <form className="col-9">
                    <input id="search-box" type="search" className="form-control form-control" placeholder="Search..." aria-label="Search" />
                </form>
                <div className="col-3 d-flex justify-content-end">
                    <Login />
                </div>
            </div>
        </header>
    );
}