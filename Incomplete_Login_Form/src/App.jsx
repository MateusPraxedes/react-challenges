import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// * todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// * todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// * todo - Desabilite o botão de Login equanto você está executando o login.
// * todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// * todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });


  const [error, setError] = useState(null);

  const [submitting, setSubmitting] = useState(false);


  const handleChange = (event) => {

    setError(null);
    const { name, value } = event.target;

    setData({ ...data, [name]: value });

  }

  const validate = () => {
    if (data.password.length < 6 || !data.email) {
      return true;
    }
    return false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await login(data);
      alert('Login efetuado com sucesso!');
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
    
    setSubmitting(false);
    
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/*Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro.*/}
        {  error ? <div className='errorMessage'>{error}</div> : null }
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'}  name='email' type={'email'}  value={data.email} onChange={handleChange}   autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'}  name='password' type={'password'} value={data.password}  onChange={handleChange}/>
        </div>
        
        <div className='button'>
          <button onClick={handleSubmit} disabled={ validate() || submitting }>Login</button>

        </div>
      </div>
    </div>
  );
}
