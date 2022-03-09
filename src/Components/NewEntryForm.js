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
        setFormData({
            ...formData,
            [e.target.date]: e.target.value
        })
    }

    function handleSubmit() {
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
            onSubmit={handleSubmit}
            className="new-entry-form">
            <input onChange={handleChange}
                placeholder="today's date mm/dd/yyyy"
                value={formData.date} />
            <input onChange={handleChange}
                placeholder="One word for the emotion you feel right now" rows={5}
                value={formData.emotion} />
            <textarea onChange={handleChange}
                placeholder="Write an entry about how you feel"
                value={formData.note} />
            <input
                type="submit" value="Submit your entry" />
        </form>

    )
}
export default NewEntryForm;