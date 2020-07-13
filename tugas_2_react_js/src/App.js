import React from 'react';
import Header from './Page/Header.js';
import Footer from './Page/Footer.js';
import MenuUtama from './Page/MenuUtama.js'
import MenuTentangKami from './Page/MenuTentangKami.js';
import MenuKontak from "./Page/MenuKontak.js";
import MenuMakanan from "./Page/MenuMakanan.js";

function App() {
  return (
    <div className="App">
     <Header />
     <MenuUtama />
     <MenuMakanan />
     <MenuTentangKami />
     <MenuKontak />
     <Footer />
    </div>
  );
}

export default App;
