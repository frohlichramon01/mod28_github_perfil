import {useState,useEffect} from 'react'

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => setRepos(resJson))
    },[nomeUsuario])


    return (
        <div className="container">
            <ul className={styles.list}>
            {repos.map(repo => (
                <li  className={styles.listItem} key={repo.id}>
                    <div className="itemName">
                        <b>Nome: </b>{repo.name}
                    </div>
                    <div className="itemLanguage">
                        <b>Linguagem: </b>{repo.language}
                    </div>
                    <a className={styles.itemLink} target='_blank' href={repo.html_url}>Visitar no GitHub</a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList