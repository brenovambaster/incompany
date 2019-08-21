import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CursoList } from './components/curso/CursoList';
import { BarraTopo } from './components/BarraTopo';
import { CursoDetalhe } from './components/curso/CursoDetalhe';
import { QuestionarioDetalhe } from './components/questionario/QuestionarioDetalhe';
import { toast } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function App() {

  const usuario = {
    id: 1,
    nome: "Jorversley Riquelme"
  }

  return (
    <BrowserRouter>
      <BarraTopo key={usuario.id} usuario={usuario} />
      <Route exact path="/" component={CursoList}></Route>
      <Route path="/cursos/:id" component={CursoDetalhe}></Route>
      <Route path="/cursos/:idcurso/questionario/:idquestionario" component={QuestionarioDetalhe}></Route>
    </BrowserRouter>
  );
}

export default App;
