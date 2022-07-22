import { useState } from "react";

const useForm = (initialState={}) => {

    const [data, setData] =useState(initialState)

    const reset = ()=>{
        setData(initialState)
    }

    const handleChange =({target})=> setData(
        {
            ...data, 
            [target.name]: target.value
    
        }
    )

    const handleChangeSelect = (e)=> setData({
        ...data,
        tipo: e 
    })    

    const handleUploadImg = (url)=> setData({
        ...data,
        imagen: url
    })

    return[reset, data, handleChange, handleChangeSelect, handleUploadImg];
};

export default useForm;