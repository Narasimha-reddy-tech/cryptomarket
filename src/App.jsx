import React from 'react'
import CryptoStatsCard from './components/crypto/components/cryptostats/CryptoStatsCard'
import CryptoTable from './components/crypto/components/cryptotables/CryptoTable'
import CryptoFilterCard from './components/crypto/components/cryptoCards/CryptoFilterCard'
import BestCryptoStats from './components/crypto/components/cryptostats/BestCryptoStats'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {

  // const { data } = useGetCryptoCoinDetailsQuery();
  // console.log(data);
  return (
    <div>
      {/* <CryptoStatsCard/> */}

      {/* <CryptoTable/> */}
      {/* <CryptoFilterCard /> */}

      <Login />
      <Register />
      <ForgotPassword />

      {/* <BestCryptoStats /> */}
    </div>
  )
}

export default App
