import { useNavigate, Link} from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';


export const FormStep2 = () => {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === ''){
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate("/step3");
        } else {
            alert("Preencha os dados.")
        }
        
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
                <p>Passo 2/3</p>
                <h1>{state.name}, o que descreve melhor você? </h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />
                
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className='backButton' to='/'>Voltar</Link>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}