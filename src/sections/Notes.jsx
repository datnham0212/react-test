import React from 'react';
import './static/Notes.css'
const Notes = () => {
    return (
    <>
        <textarea rows={12} cols={80} placeholder="Enter your notes here" />

        <button className="btn saveNote">Save</button>
        
    </>    
    );
};

export default Notes;
