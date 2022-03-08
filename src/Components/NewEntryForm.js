import React, {useState} from "react";

// entry has date as string, emotion, note

function NewEntryForm({setEntries, entries}) {
    const [name, setName]=useState("")
    const [date, setDate]= useState("")
    const [emotion, setEmotion] =useState("")
    const [note, setNote] = useState("")
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleDateChange(e){
        setDate(e.target.value)
    }
    function handleEmotionChange(e){
        setEmotion(e.target.value)
    }
    function handleNoteChange(e){
        setNote(e.target.value)
    }
    function handleForm(e){
        e.prevent.default()
        const formData = {name, date, emotion, note}
        const dataArray= [formData, ...entries]
        setEntries(dataArray)
        setName("")
        setDate("")
        setEmotion("")
        setNote("")

        fetch("http://localhost:9292/entries",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(console.log(formData))
    }
    return (
        <form
        onSubmit={handleForm}
        className="new-entry-form">
            <input onChange ={handleNameChange}
                placeholder="Your Name"
                value= {name} />
            <input  onChange={handleDateChange}   
                placeholder="today's date mm/dd/yyyy"
                value ={date} />
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