import React from 'react'
import { useGetCryptoMarketsQuery } from '../services/cryptoMarkets';

const useCryptomarkets = () => {

    const { data, isLoading, isError } = useGetCryptoMarketsQuery();
    console.log(data?.data?.coins)
    let coins = data?.data?.coins || []
    let GlobalStats = data?.data?.stats || {}
    return { coins, GlobalStats, isLoading, isError }
}

export default useCryptomarkets
