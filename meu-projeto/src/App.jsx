import './App.css'

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiFirebase,
} from 'react-icons/si'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa'

const tecnologias = [
  { nome: 'React', Icone: SiReact, posicao: 'tech-1', cor: '#61dafb' },
  { nome: 'JavaScript', Icone: SiJavascript, posicao: 'tech-2', cor: '#f7df1e' },
  { nome: 'Firebase', Icone: SiFirebase, posicao: 'tech-3', cor: '#ffca28' },
  { nome: 'TypeScript', Icone: SiTypescript, posicao: 'tech-4', cor: '#3178c6' },
  { nome: 'Python', Icone: SiPython, posicao: 'tech-5', cor: '#3776ab' },
  { nome: 'MySQL', Icone: SiMysql, posicao: 'tech-6', cor: '#4479a1' },
  { nome: 'GitHub', Icone: SiGithub, posicao: 'tech-7', cor: '#ffffff' },
  { nome: 'HTML5', Icone: SiHtml5, posicao: 'tech-8', cor: '#e34f26' },
  { nome: 'CSS3', Icone: SiCss, posicao: 'tech-9', cor: '#1572b6' },
  { nome: 'Git', Icone: SiGit, posicao: 'tech-10', cor: '#f05032' },
]

const projetos = [
  {
    nome: 'FeelLink',
    categoria: 'IoT / Aplicativo',
    status: 'Em desenvolvimento',
    descricao:
      'Solução de comunicação emocional com dispositivo físico e aplicativo para acompanhamento de emoções.',
    tecnologias: ['React', 'IoT', 'Cloud'],
  },
  {
    nome: 'CodeForge',
    categoria: 'Desenvolvimento Web',
    status: 'Em planejamento',
    descricao:
      'Projeto de empresa de tecnologia voltada para criação de sites, aplicações e soluções digitais.',
    tecnologias: ['Web', 'JavaScript', 'UI/UX'],
  },
]

const contatos = [
  {
    nome: 'GitHub',
    usuario: '@Stolemp',
    descricao: 'Explore meus projetos e códigos.',
    url: 'https://github.com/Stolemp',
    Icone: FaGithub,
    externo: true,
  },
  {
    nome: 'LinkedIn',
    usuario: 'Pedro Stolemberger',
    descricao: 'Conheça minha trajetória profissional.',
    url: 'https://www.linkedin.com/in/pedro-stolem/',
    Icone: FaLinkedin,
    externo: true,
  },
  {
    nome: 'Instagram',
    usuario: '@_pedrostolem',
    descricao: 'Acompanhe meu perfil.',
    url: 'https://www.instagram.com/_pedrostolem/',
    Icone: FaInstagram,
    externo: true,
  },
  {
    nome: 'E-mail',
    usuario: 'stolemp@outlook.com',
    descricao: 'Envie uma mensagem diretamente.',
    url: 'mailto:stolemp@outlook.com',
    Icone: FaEnvelope,
    externo: false,
  },
]

function TechOrbit() {
  return (
    <div className="tech-system" aria-label="Tecnologias e ferramentas">
      <div className="orbit orbit-outer" aria-hidden="true"></div>
      <div className="orbit orbit-middle" aria-hidden="true"></div>
      <div className="orbit orbit-inner" aria-hidden="true"></div>

      <div className="orbit-ellipse ellipse-one" aria-hidden="true"></div>
      <div className="orbit-ellipse ellipse-two" aria-hidden="true"></div>

      <div className="orbit-line line-horizontal" aria-hidden="true"></div>
      <div className="orbit-line line-vertical" aria-hidden="true"></div>

      <div className="orbit-core" aria-hidden="true">
        <span>{'</>'}</span>
      </div>

      {tecnologias.map(({ nome, Icone, posicao, cor }) => (
        <div
          key={nome}
          className={`tech-icon ${posicao}`}
          style={{ '--tech-color': cor }}
          title={nome}
          aria-label={nome}
        >
          <Icone aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="portfolio">
      <div className="stars" aria-hidden="true"></div>
      <div className="eclipse" aria-hidden="true"></div>

      <header className="navbar">
        <a href="#inicio" className="brand" aria-label="Voltar ao início">
          <span className="brand-icon" aria-hidden="true">✦</span>
          <span>Stolem.dev</span>
        </a>

        <nav className="nav-links" aria-label="Menu principal">
          <a href="#sobre">Sobre mim</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="social-links" aria-label="Redes sociais">
          {contatos.map(({ nome, url, Icone, externo }) => (
            <a
              key={nome}
              href={url}
              target={externo ? '_blank' : undefined}
              rel={externo ? 'noopener noreferrer' : undefined}
              aria-label={`Acessar ${nome}`}
              title={nome}
            >
              <Icone aria-hidden="true" />
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="hero-badge">
              ✧ Desenvolvedor Full Stack em formação
            </span>

            <h1>
              Transformando
              <br />
              <span>ideias</span> em
              <br />
              realidade digital.
            </h1>

            <p>
              Olá, eu sou Pedro! Estudante de Análise e Desenvolvimento de
              Sistemas, com experiência em tecnologia e automação industrial.
              Explorando novas possibilidades através da programação.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="primary-btn">
                Explorar projetos <span aria-hidden="true">↗</span>
              </a>

              <a href="#sobre" className="secondary-btn">
                Sobre mim →
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <TechOrbit />
          </div>
        </section>

        <section className="content-section" id="sobre">
          <span className="section-label">01 / SOBRE MIM</span>
          <h2>Conheça minha trajetória.</h2>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas. Minha
            experiência profissional envolve automação industrial, projetos
            técnicos e soluções tecnológicas. Atualmente, estou expandindo meus
            conhecimentos em desenvolvimento de software.
          </p>
        </section>

        <section className="content-section" id="habilidades">
          <span className="section-label">02 / HABILIDADES</span>
          <h2>Meu universo tecnológico.</h2>

          <div className="skills-grid">
            {tecnologias.map(({ nome, Icone, cor }) => (
              <div className="skill-card" key={nome}>
                <Icone style={{ color: cor }} aria-hidden="true" />
                <span>{nome}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="projetos">
          <span className="section-label">03 / PROJETOS</span>
          <h2>Projetos em destaque.</h2>

          <div className="project-grid">
            {projetos.map((projeto) => (
              <article className="project-card" key={projeto.nome}>
                <span className="project-category">
                  {projeto.categoria} / {projeto.status}
                </span>

                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>

                <div className="project-tags">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-heading">
            <span className="section-label">04 / CONTATO</span>

            <h2>
              Vamos construir algo
              <br />
              <span>incrível juntos?</span>
            </h2>

            <p>
              Tem alguma ideia, oportunidade ou projeto em mente? Estou sempre
              aberto a novas conexões e desafios. Entre em contato pelos canais
              abaixo.
            </p>
          </div>

          <div className="contact-grid">
            {contatos.map((contato) => {
              const { nome, usuario, descricao, url, Icone, externo } = contato

              return (
                <a
                  href={url}
                  key={nome}
                  className="contact-card"
                  target={externo ? '_blank' : undefined}
                  rel={externo ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-card-top">
                    <div className="contact-icon">
                      <Icone aria-hidden="true" />
                    </div>

                    <span className="contact-arrow" aria-hidden="true">↗</span>
                  </div>

                  <h3>{nome}</h3>
                  <span className="contact-user">{usuario}</span>
                  <p>{descricao}</p>
                </a>
              )
            })}
          </div>

          <div className="contact-bottom">
            <span>✦ Disponível para novas conexões</span>

            <a href="mailto:stolemp@outlook.com">
              Enviar um e-mail →
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Stolem.dev
      </footer>
    </div>
  )
}

export default App
