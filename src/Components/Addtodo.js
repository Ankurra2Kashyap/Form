
import React, { useState } from 'react';

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description cannot be blank")
            }
            else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
            }
            
    }


    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo Title" />
                </div>
                <div className="form-group">
                    <label for="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Todo-Description " />
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo
