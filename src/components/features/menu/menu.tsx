import { Link } from 'react-router-dom';
import './_menu.css'; // Create and use a custom CSS file for the menu styles

export default function Menu(): JSX.Element {
    return (
        <div className="btn-group m-2 p-2" role="group" aria-label="Basic example">
            <Link to="/home">
            <button type="button" className="btn btn-outline-secondary" style={{ width: '100px' }}>Home</button>
            </Link>
            <Link to="/resume">
            <button type="button" className="btn btn-outline-secondary" style={{ width: '100px' }}>Resume</button>
            </Link>
        </div>
    );
}
