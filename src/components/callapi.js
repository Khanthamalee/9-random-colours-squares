import React, {useState,useEffect} from "react";
import './colours';

import { API_URL } from "../constants";

const App = () => {
    const [hasError,setErrors] = useState(false)
    const [tokens,setToken] = useState({})

    async function fetchData() {
        const res = await fetch({ API_URL });
        res
         .json()
         .then(res => setToken(res))
         .catch(err= setErrors(err));

    }

    useEffect(()=> {
        fetchData();
    })
    console.log(JSON.stringify(tokens);
    console.log(JSON.stringify(hasError);

    return(
        
    );
       
}

export default App;
