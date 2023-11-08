const isUserLogged = false;

const itemsIncart = 3


function Header(){
    return(
        <header>
            <h1>Exo 3 mon titre</h1>

            
            <ul>
                {isUserLogged?(
                <li>Shinro</li>
            ):(
                <li>Not logged</li>
            )}
                
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>
                
                {itemsIncart > 0 ?(
                    <li>{itemsIncart} au panier</li>
                ):(
                    <li>Pas d'item au panier</li>
                )}
            </ul>
        </header>
    )
}

export default Header;