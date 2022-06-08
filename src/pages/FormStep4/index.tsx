import { useNavigate, Link} from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';


export const FormStep4 = () => {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }
        if(state.email === '' || state.github === ''){
            navigate('/step3')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }, []);

    const handleFinishRegister = () => {
        console.log("Cadastro finalizado");
        
        
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Resumo</p>
                <hr />
                <p>Nome: </p> <h1>{state.name}</h1>
                <p>Nível Profissional: </p> <h1>{state.level === 0 ? 'Sou Iniciante': 'Sou Programador'}</h1>
                <p>Email: </p> <h1>{state.email}</h1>
                <p>GitHub: </p> <h1>{state.github}</h1>

                <hr />
                
                

                <Link className='backButton' to='/step3'>Voltar</Link>

                <button onClick={handleFinishRegister}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}