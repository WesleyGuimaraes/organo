import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/WesleyGuimaraes" target="_blank">
                        <img src="/imagens/mark-github (1).svg" alt="Github do desenvolvedor" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/wesley-lima-guimaraes" target="_blank">
                        <img src="/imagens/Group.svg" alt="LinkedIn do desenvolvedor" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logoOrgano'>
            <img src="/imagens/logo.png" alt="logo da ORGANO" />
        </section>
        <section>
            <p style={{textAlign: 'center'}}>
                Desenvolvido por Wesley Lima e <br/> Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape