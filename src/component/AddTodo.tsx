import React, {useState} from "react";

import {Button, Grid, TextField} from "@mui/material"

const AddTodo = (props : any) => {
    const [item, setItem] = useState({title : ""});
    const addItem = props.addItem;

    const onButtonClick = () => {
        addItem(item);
        setItem({title : ""});
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({title: e.target.value});
        console.log(item);
    }

    const enterKeyEventHandler = (e: { key: string; }) => {
        console.log(e.key);
        if(e.key === 'Enter'){
            if(item.title.length > 0){    
             onButtonClick();
            }
        }
    }

    return (
        <Grid container style={{marginTop : 20}}>
            <Grid xs={11} md={11} item style={{paddingRight : 16}}>
                <TextField placeholder="Add Todo here" fullWidth onChange={onInputChange} value={item.title} onKeyUp={enterKeyEventHandler}></TextField>
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height : '100%'}} color="secondary" variant="outlined"
                onClick={onButtonClick}>
                    +
                </Button>
            </Grid>            
        </Grid>
    )
}

export default AddTodo;