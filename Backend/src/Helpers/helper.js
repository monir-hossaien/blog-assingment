
export const getPublicID = (imageURL)=>{
    const publicId = imageURL.split('/').pop().split('.')[0];
    return publicId;
}
