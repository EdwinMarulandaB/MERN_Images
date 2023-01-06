import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"suasesino",
    api_key:"827488295475572",
    api_secret:"Cbyj5mdM3S2r9x5e8gVOPv9ZLik"
})
export const uploadImage = async(filePath)=>{
     return await cloudinary.uploader.upload(filePath,{
        folder:'posts'
    })
}


export const deleteImage = async(public_id) =>{
    return await cloudinary.uploader.destroy(public_id)
}