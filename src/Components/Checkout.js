import { useState } from "react";
import {getFirestore, addDoc, collection, doc, getDoc, updateDoc} from "firebase/firestore";
import { useCartContext } from "./CartContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


export const Checkout = () => {
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [telefono,setTelefono]=useState("");
    const [email,setEmail]=useState("");
    const [emailConfirmacion,setEmailConfirmacion]=useState("");
    const [error,setError]=useState("");
    const [ordenId,setOrdenId]=useState("");
    const [mensaje,setMensaje]=useState("");

 
const {cart, removeProduct, totalPrice} = useCartContext();

const manejadorFormulario = (event) => {
    event.preventDefault();
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
     toast.error("¡PorFavor Complete TODOS los campos requeridos!", {
         position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
     });
        return;
    }
    if(email !== emailConfirmacion){
        toast.error("¡Los Email NO Coinciden!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return;
    }

    const total = totalPrice();
    const orden = {
        items: cart.map((product) =>({
            id: product.id,
            nombre: product.title,
            cantidad: product.quantity,
        })),
          total : total,
          fecha: new Date(),
          nombre,
          apellido,
          telefono,
          email,
    };

    Promise.all(
        orden.items.map(async (productoOrden)=> {
            const db = getFirestore();
            const productoRef = doc(db, "products", productoOrden.id);
            const productoDoc= await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;

            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
            });
        })
    )
  .then(()=>{
    const db = getFirestore();
    addDoc(collection(db, "orders"),orden)
    .then((docRef)=>{
        setOrdenId(docRef.id);
        removeProduct();
        Swal.fire({
            title: "¡Gracias por tu Compra! 🥳",
            html: `<h3>Tu número de Orden es: "${docRef.id}"</h3>`,
            icon: "success",
            confirmButtonText: "Aceptar",
            color:"#000000",
            width:500,
            padding: 10,
            background:"#e5e771",
        });
    })
    .catch((error)=>{
        console.log("Error en la Creacion de la orden", error);
        setError("Error en la Orden");
    });
    
  })

    .catch((error)=>{
        console.log("No se pudo actualizar el stock", error);
        setError("No se actualizo el stock");
    });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    setMensaje("");
};

return(
    <div>
        <h2 className="completeCheck">Complete con tus datos para Confirmar la Compra: </h2>
        <div className="padreCheck">
        <form onSubmit={manejadorFormulario}>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <p>
                        {" "}
                        {producto.nombre} {producto.cantidad}
                    </p>
                    <p>{producto.precio}</p>
                </div>
            ))}
            <div>
                <label className="lab-check label">Nombre:</label>
                <input
                    className="input-check input"
                    type="text"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}/>
            </div> 
            <div>
                <label className="lab-check label">Apellido:</label>
                <input
                    className="input-check input"
                    type="text"
                    value={apellido}
                    onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div>
                <label className="lab-check label">Telefono:</label>
                <input
                    className="input-check input"
                    type="number"
                    value={telefono}
                    onChange={(e)=>setTelefono(e.target.value)}/>
            </div>
            <div>
                <label className="lab-check label">Email:</label>
                <input
                    className="input-check input"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label className="lab-check label">Confirmar Email:</label>
                <input
                    className="input-check input"
                    type="email"
                    value={emailConfirmacion}
                    onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
            </div>
            {error && <p> {error} </p>}
            <div>
                <button type="submit" className="btnConfirmarCheck">Confirmar Compra</button>
            </div>
        </form> 
        </div>
    </div>
);
};