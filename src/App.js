import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Equipe 01',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 02',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 03',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 04',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 05',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 06',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Equipe 07',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vanderlei Neto',
      cargo: 'Atirador',
      imagem: 'https://www.vanderleinetoweb.tech/assets/img/profile.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vanderlei',
      cargo: 'Apoio',
      imagem: 'https://www.vanderleinetoweb.tech/assets/img/profile.jpeg',
      time: times[0].nome
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vanderlei',
      cargo: 'Pesado',
      imagem: 'https://www.vanderleinetoweb.tech/assets/img/profile.jpeg',
      time: times[0].nome
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vanderlei',
      cargo: 'Trocador',
      imagem: 'https://www.vanderleinetoweb.tech/assets/img/profile.jpeg',
      time: times[0].nome
    },

    
    
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Meu Time de Fortinite</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
