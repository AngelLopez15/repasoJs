// Async y Await
// el await hace que se el proceso sea sincrono
// es decir espera que la promersa retorne para ejecutar
// la siguiente linea

const getImagen = async() =>{
    // para manejar los errores en async y await
    // se debe usar los try y catch
    try {
        const apiKey = 'Mt2XmwVPd8YIU6DzqxRowPh77rUyv00Z'
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        // como el Json regresa otra promesa es necesario usar otro await
        const {data} = await resp.json()
        // para evitar la duplicidad del doble data
        // podemos desestructurar la primer peticion de la data
        const {url} =data.images.original
        const img = document.createElement('img')
        img.src=url
        document.body.append(img)
    } catch (error) {
        // manejo de errores del async
        console.error(error)
    }
}

getImagen()
