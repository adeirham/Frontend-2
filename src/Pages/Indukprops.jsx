import Button from "../Componen/Button";
import Menu from "../Componen/Menu";
import Props from "../Componen/Props";

const Indukprops = () => {
    const meja="1"
    const makanan="sate"
    const minuman="es teh"

    const menumakanan = ["Nasi goreng",
                         "Nasi rawon",
                         "Nasi soto"]
    const menuminuman = ["Es jeruk",
                         "Es degan",
                         "Es dawet"]

    const pesanan = {"meja" : 1,
                     "makanan" : "nasi soto",
                     "minuman" : "es jeruk",
                     "pelanggan" : true}
    const pesanan2 = {"meja" : 2,
                     "makanan" : "nasi goreng",
                     "minuman" : "es degan",
                     "pelanggan" : false}
    const pesanan3 = {"meja" : 3,
                     "makanan" : "nasi rawon",
                     "minuman" : "es dawet",
                     "pelanggan" : true}
    function handleClick(){
        alert('data berhasil disimpan')
    }
    return ( 
        <>
        <Menu menumakanan={menumakanan} menuminuman={menuminuman}/>
        <p>menggunakan children</p>
        <hr/>
        <Props pesanan={pesanan}/>
        <hr/>
        <Props pesanan={pesanan2}/>
        <hr/>
        <Props pesanan={pesanan3}/>
        <Button onClick={handleClick}/>

            {/*<Props
            meja={meja}
            makanan={makanan}
            minuman={minuman}
            pelanggan={true}/>
            <hr/>
            <Props
            meja="1"
            makanan="sate"
            minuman="es teh"
    pelanggan={false}/>*/}
        </>
     );
}
 
export default Indukprops;