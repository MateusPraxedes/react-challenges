import './App.css';



  // DESAFIO TÉCNICO - JOGO DA VELHA 

  // * descrição
  //   desenvolva um jogo da velha (tic tac toe) funcional.
  //   use qualquer técnica de estilização preferida: css modules, sass, styled.

  // * tasks
  //  * todo - crie um board de 3x3
  //  todo - dois jogadores
  //  todo - ao clicar em um quadrado, preencher com a jogada
  //  todo - avisar quando o jogo finalizar, caso dê velha avise também
  //  todo - fazer um risco na sequência vencedora, caso houver


const App = () => {




  return (
    <>
      <div className='board-game'>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>

      </div>

    </>
  );
}

export default App;
