import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {
    const usuario = {
        nome: 'Ramon F.',
        avatar: 'https://github.com/frohlichramon01.png'
    }

    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Img do perfil" />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil