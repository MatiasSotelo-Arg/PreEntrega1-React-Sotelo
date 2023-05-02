import CartWidget from "../CardWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="contenedor-nav">
            <h3 className="titulo">
                Tienda Relojes
            </h3>
            <div className="contendor-ele-nav">
                <button>Tressa</button>
                <button>Knock Out</button>
                <button>Stone</button>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar