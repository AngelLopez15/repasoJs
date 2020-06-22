// Fetch API
// tecnologia nativa de losnavegadores que permite hacer 
// peticiones a HTTP a endpoints sin la necesidad de librerias
// el fetch API se ocupa para hacer peticiones en cadena
const apiKey = 'Mt2XmwVPd8YIU6DzqxRowPh77rUyv00Z'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then(resp => resp.json())
    .then(({data})=>{
        const {url} =data.images.original;
        const img = document.createElement('img')
        img.src=url
        document.body.append(img)
    })
    .catch(console.warn)