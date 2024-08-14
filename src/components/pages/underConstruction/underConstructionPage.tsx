import './_underConstructionPage.css';

export default function UnderConstruction(): JSX.Element {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
            <div className="text-center">
                <h1 className="display-4">🚧 Under Construction 🚧</h1>
                <p className="lead">This page is currently under construction. Please check back later!</p>
            </div>
        </div>
    );
}