import React, { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { IdentityProvider } from './components/identity/IdentityContext';
import Home from './components/routes/Home';


function App() {

  const [user, setUser] = useState(null);
  const userValue = { user, setUser };

  return (
    <div className="App">
      <Fragment>
        <IdentityProvider value={userValue}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </IdentityProvider>
      </Fragment>
    </div>
  );
}

export default App;
