import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
    }, [])
}