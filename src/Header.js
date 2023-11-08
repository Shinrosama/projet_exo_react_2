const isUserLogged = false;


function Header(){
    return(
        <header>
            <h1>Exo 3 mon titre</h1>

            {isUserLogged?(
                <li>Shinro</li>
            ):(
                <li>Not logged</li>
            )}
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header;