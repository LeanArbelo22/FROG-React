import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getUsers () {
  try {
        const response = await axios({
          url: `${baseUrl}/users`,
          method: 'GET'
        })

        console.log("Usuarios extraidos de API mongodb")
        return response
  } catch (e) {
        console.log(e)
  }

}

export async function saveUsers (userData) {
  try {  
    const response = await axios({
          url: `${baseUrl}/new-user`,
          method: 'POST',
          data: userData
        })

        console.log(response)
        if(response.status === 201){
          console.log('Usuario creado correctamente, para ver los usuarios en la BD dirigirse a la ruta "/"')
          alert(`Usuario: ${userData.name}, Email: ${userData.email} creado correctamente.
          Ver consola para mas informacion.
          `)
        }
        return response
  } catch (e) {
        alert("No fue posible crear el usuario, ver consola para mas informacion")
        console.log(e)
  }

}

export async function loginUser (userSignIn) {
  try {
    const response = await axios({
      url: `${baseUrl}/login`,
      method: 'POST',
      data: userSignIn
    })

    console.log(response)
    if(response.status === 200){
      alert(`Usuario logueado correctamente ${userSignIn.email}`)
    }
    return response
  }  catch (e) {
      alert("Usuario o contraseña invalidos")
      console.log(e)
  }
}