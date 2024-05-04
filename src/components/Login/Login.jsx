import { useEffect, useState } from "react"

const Login = () => { 
    const [nameValue, setNameValue] = useState("")
    useEffect(()=>{

        if (nameValue.includes("o") || nameValue.includes("O")){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    }, [nameValue])
    const checkOs = () => {
        let user = document.getElementById("usernameInput").value.trim()

        if (user == "" || user.toLowerCase().includes("o")){
            return alert("Usuario inválido para registrarse") 
        }
        else{
            return alert("¡Usuario registrado correctamente!")
        }
    }
    return(
        <>
                <input type="text" id="usernameInput" onChange={() => setNameValue(document.getElementById("usernameInput").value)}/><br/>
                <button onClick={() => checkOs()} ></button> <br/>
                <p>{nameValue == "" ? "ingrese el nombre de usuario" : nameValue}</p>
        </>
    )
}

export default Login
