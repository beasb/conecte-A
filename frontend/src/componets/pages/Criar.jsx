import CriarForm from '../CriarForm/CriarForm'
import styles from './Criar.module.css'

function Criar() {
    return (
        <div className={styles.criar_container}>
            <h1>Criar Conta</h1>
            <p>Crie uma conta e junte-se a nós</p>
            <CriarForm />
        </div>
    )
}

export default Criar