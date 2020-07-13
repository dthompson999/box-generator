import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxForm = (props) => {

    const [box, setBox] = useState([]);

    const [color, setColor] = useState("");

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const createBox = (e) => {
        e.preventDefault();
        setBox([...box, color])
        setColor("");
    }

    const boxStyle = {
        width: '150px',
        height: '150px',
        margin: '20px',
        border: '1px solid black',
        display: 'inline-block',
    }

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1>Welcome to Box Generator!</h1>
            </div>
            <div class="mx-auto" style={{width: '400px'}}>
                <form onSubmit={ createBox }>
                    <div class="form-inline">
                        <div class="form-group mb-2">
                            <label class="form-group mt-1" ><h4>Color</h4></label>
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <input type="text" class="form-control" name="color" onChange={ handleColor } value={color} />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Add Box</button>
                    </div>
                </form>
            </div>
            {box.map((b, i) => 
                <div key={i} style={Object.assign({...boxStyle}, {backgroundColor: b})}></div>
            )}
        </div>
    )
}

export default BoxForm;