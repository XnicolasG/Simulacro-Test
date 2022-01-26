export const imgUpload = async (img) =>{
    const Cloudi = 'https://api.cloudinary.com/v1_1/dlkynkfvq/upload';
    const formData = new formData();
    formData.append('upload_preset', 'inventario Vinos');
    formData.append('img', img);

    const resp = await fetch(Cloudi, {
        method: 'POST',
        body: formData
    })

    const CloudResp = await resp.json();
    return CloudResp.secure_url;
}