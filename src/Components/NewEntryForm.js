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
            data: '',
            emotion: '',
            note: '',
            user_id: ''
        })
    }
    return (
        <form
            onSubmit={handleForm}
            className="new-entry-form">
            <input onChange={handleNameChange}
                placeholder="Your Name"
                value={name} />
            <input onChange={handleDateChange}
                placeholder="today's date mm/dd/yyyy"
                value={date} />
            <input onChange={handleEmotionChange}
                placeholder="One word for the emotion you feel right now" rows={5}
                value={emotion} />
            <textarea onChange={handleNoteChange}
                placeholder="Write an entry about how you feel"
                value={note} />
            <input
                type="submit" value="Submit your entry" />
        </form>

    )
}
export default NewEntryForm;