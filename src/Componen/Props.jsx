function Props(props) {
    const{meja, makanan, minuman, pelanggan} = props.pesanan;
    return ( 
        <>
        {pelanggan ?
            <div>
                <h3>pesan dari meja : {meja}</h3>
                <p>makanan : {makanan}</p>
                <p>minuman : {minuman}</p>
            </div> :
            <p>Anda bukan pelanggan</p>
        }
        </>
     );
}

export default Props;