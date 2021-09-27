import React, { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)
    return (
        <div>
            {contador}
            <button onClick={() => setContador(contador + 1)}>
                ❤️
            </button>
        </div>);
};

export default Contador;

// export default function Contador(){
//     const [contador, setContador] = useState(0)
//     return (
//         <div>
//             {contador}
//             <button onClick={() => setContador(contador + 1)}>
//                 ❤️
//             </button>
//         </div>);  
// }
