const Menu = ({menumakanan, menuminuman, children}) => {
    return ( 
        <>
        {children}
            <h2>Menu Makanan</h2>
            <ol>
                {menumakanan.map((makanan, index) =>(
                    <li key={index}>
                        <p>{makanan}</p>
                    </li>
                ))}
            </ol>
            <hr/>
            <h2>Menu Minuman</h2>
            <ol>
                {menuminuman.map((minuman, index) =>(
                    <li key={index}>
                        <p>{minuman}</p>
                    </li>
                ))}
            </ol>
        </>
     );
}
 
export default Menu;