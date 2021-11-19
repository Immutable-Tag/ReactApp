import {useState, useEffect} from 'react'

const useForm = () => {
    console.log("Inside useform")
    const [values, setValues] = useState({
        repoURL: '',
        tagID: ''
    })
    // const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value 
        })
    } 

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    return { handleChange, values, handleSubmit }
}

export default useForm;