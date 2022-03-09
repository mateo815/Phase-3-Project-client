import React, { useState } from "react";

// entry has date as string, emotion, note

function NewEntryForm({ onAddEntry }) {
    const [formData, setFormData] = useState({
        date: '',
        emotion: '',
        note: '',
        user_id: ''
    })

    function handleChange(e) {
        setFormData((prevState) => {
            return {
                ...prevState, [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newForm = {
            date: formData.date,
            emotion: formData.emotion,
            note: formData.note,
            user_id: formData.user_id
        }


        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newForm)
        }

        fetch("http://localhost:9292/entries", config)
            .then(r => r.json())
            .then(onAddEntry)

        setFormData({
            date: '',
            emotion: '',
            note: '',
            user_id: ''
        })
    }
    return (
        <form
            onSubmit={handleSubmit}>
            <input onChange={handleChange}
                type='text'
                name="date"
                placeholder="today's date mm/dd/yyyy"
                value={formData.date} />
            <input onChange={handleChange}
                type='text'
                name="emotion"
                placeholder="One word for the emotion you feel right now" rows={5}
                value={formData.emotion} />
            <textarea onChange={handleChange}
                type='text'
                name="note"
                placeholder="Write an entry about how you feel"
                value={formData.note} />
            <input
                type="submit" value="Submit your entry" />
        </form>

    )
}
export default NewEntryForm;