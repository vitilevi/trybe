import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const Tarefas = ['Estudar', 'Limpar a casa', 'Codar', 'Codewars'];
  return (
    <div className="App">
      {Task('Aprender e dominar React')}
      {Task('Desenvolver conhecimento em outras tecnologias')}
      {Tarefas.map(el => <li>{el}</li>)}
    </div>
  );
}

export default App;
