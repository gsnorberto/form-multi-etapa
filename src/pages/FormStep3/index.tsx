import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}</h1>
                <p>Como podemos entrar em contato com você?</p>

                <hr />
                
                <label>
                    Qual seu e-mail?

                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual seu GitHub?

                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link className='backButton' to='/step2'>Voltar</Link>
                
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}