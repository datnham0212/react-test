import React from 'react';
import './static/Notes.css'
const Notes = () => {
    return (
    <>
    <div className = "noteContainer">
        <textarea className="note-title" rows={1} cols={40} placeholder="Name: "/>
        <textarea className="note-content" rows={15} cols={80} placeholder="Enter your notes here: " />
    </div>
        
        <button className="saveNote">Save</button>
        
    </>    
    );
};

export default Notes;
