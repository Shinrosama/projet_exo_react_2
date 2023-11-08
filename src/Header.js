
function Header(){
    
    const isUserLogged = true;
    const itemsIncart = 3

    const userLogged = {
        lastname : "Shinro",
        firstname : "Shinn",
        job : "Web dev",
    }

    return(
        <header>
            <h1>Exo 3 mon titre</h1>

            
            <ul>
                {isUserLogged?(
                <li>{userLogged.lastname} {userLogged.firstname} {userLogged.job}</li>
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