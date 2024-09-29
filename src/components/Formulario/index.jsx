import {useState, useEffect} from 'react'

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("useEffect assim, com a lista vazia é pra quando o componente é montado (inicializado)");

        return () => {
            console.log("o return nesse caso é pra quando o componente é desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("useEffect assim só vai ser executado quando o nome for alterado")
    }, [nome]);

    const alteraNome = (evento) => {
        setNome(evento.target.value)
        nome = evento.target.value
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3;

        if (media >= 7) {
            return (<p>{nome}, você foi aprovado</p>)
        } else {
            return (<p>{nome}, foi reprovado</p>)
        }

    }

    return (
        <form>
                <ul>
                    {[1,2,3,4,5].map(item => (
                        <li key="{item}">{item}</li>
                    ))}
                </ul>


            <input type="text" placeholder="Digite o nome do aluno" onChange={alteraNome}/>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario