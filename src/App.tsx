import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';

// import logoImg from './imagens/logo.svg';

function App(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        {/* <img src={logoImg} alt="Happy" /> */}
        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Dois Irmãos</strong>
          <span>Rio Grande do Sul</span>
        </div>
      </div>
    </div>
  );
}

export default App;
