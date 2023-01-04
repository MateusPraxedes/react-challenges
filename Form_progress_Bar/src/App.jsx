import	React, { useState } from 'react';

/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

const App = () => {
  
  const [data, setData] = useState({
    name: '',
    email: '',
    maritalStatus: '',
    genre: '',

  })
 

  const handleChange = (event) => {

    const {name, value} = event.target
    setData({...data,[name]: value})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(progressBar() !== 100 ){ 
    return alert('Preencha todos os campos!');}
    else{ 
    alert('Formulário enviado com sucesso!')
    setData({
      name: '',
      email: '',
      maritalStatus: '',
      genre: '',
    })}
  }

  const progressBar = () => {
    
    let progress = 0;
    let totalFields = Object.keys(data).length;
    let percentField = 100 / totalFields;

    Object.keys(data).forEach((field) => {


      if(field === 'name'){
        if(data[field].split(' ').length >= 2) {
          progress += percentField;
        }else{
          progress += 0;
        }
      } else if(field === 'email'){
        if(data[field].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          progress += percentField;
        }else{
          progress += 0;
        }
      } else if(data[field] !== '') 
      progress += percentField;

    })
    
    return progress;

      }
 

  return (
    <div className='App'>
      <h1>Barra de Progresso Form - React </h1>

      <main>
        {/* crie a barra de progresso aqui */}
        <div className='bar-container'>
          <div className='bar' style={{width:`${progressBar()}%`}}></div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name='name' value={data.name} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Email</label>
          <input name='email' value={data.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select value={data.maritalStatus} name='maritalStatus'  onChange={handleChange}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input name='genre' value='Masculino'  onChange={handleChange} checked={data.genre === 'Masculino'} type='radio' /> Masculino
            </span>
            <span>
              <input name='genre' value='Feminino' onChange={handleChange} checked={data.genre === 'Feminino'} type='radio' /> Feminino
            </span>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={progressBar()!==100}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
