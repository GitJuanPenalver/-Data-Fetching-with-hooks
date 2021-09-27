import React, {useState} from "react";

// const [comentario, setComentario] = useState([])
const Comentarios = () => {

    return <form>
        <input type="texarea" name="comentario"></input>
        <input type="submit" value="Comentar"/>
    </form>
}

export default Comentarios;