export const uploadFile = async (file) => {
console.log('Hola', file)
    const apiCloud = 'https://api.cloudinary.com/v1_1/danimel/upload'

    const formData = new FormData();
    //donde quiero que se carge la foto la ruta - 
    formData.append("upload_preset", "Frontend12");
    //cual es el tipo de documnto y cual es documento
    formData.append("file", file);

    const resp = await fetch(apiCloud, {
        method: "POST",
        body: formData
    })
    const data = await resp.json()
    console.log(data.secure_url)
    return data.secure_url

}