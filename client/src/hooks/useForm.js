// write your custom hook here to control your checkout form
import React, { useState } from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)

    const handleChanges = event => {
        const { name, value } = event.target

        setValues({
            ...values,
            [name] : value
        })
    }

    return [values, handleChanges]
}
