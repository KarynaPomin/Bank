import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MyWallet from './pages/MyWallet.jsx';
import './App.css'
import Blik from './pages/Blik.jsx';
import Transfer from './pages/Transfer.jsx';
import History from './pages/History.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyWallet" element={<MyWallet />}/>
        <Route path="/MyWallet/Blik" element={<Blik />}/>
        <Route path="/MyWallet/Transfer" element={<Transfer />}/>
        <Route path="/MyWallet/History" element={<History />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
