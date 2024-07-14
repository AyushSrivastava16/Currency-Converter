import { fetch } from "openai/_shims/index.mjs";
import { useState, useEffect } from "react";

import React from 'react'

function useCurrencyInfo(currency)
{
    let [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json())
        .then((res)=> setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;