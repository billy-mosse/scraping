import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const sendRequest = query => {
    console.log(query);
  }

  return <React.Fragment>
    <TextField
      id="standard-search"
      label="Search..."
      type="search"
      variant="outlined"
      onChange={(event) => setUserInput(event.target.value)}
    />
    <Button variant="outlined" color="primary" onClick={() => sendRequest(userInput)}>
      Send
    </Button>
  </React.Fragment>
}

export default Home;