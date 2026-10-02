import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {icon: '⌘', title: 'API Spring Boot', text: 'Controllers, serviços, DTOs e contratos HTTP documentados com exemplos prontos para uso.', link: '/docs/backend/overview'},
  {icon: '◇', title: 'Arquitetura clara', text: 'Entenda os fluxos entre interface, API, JPA e PostgreSQL por meio de diagramas Mermaid.', link: '/docs/architecture/overview'},
  {icon: '▤', title: 'Dados e Supabase', text: 'Schema, carga inicial, H2 local e políticas de Row Level Security em um único guia.', link: '/docs/database/overview'},
];

function Feature({icon, title, text, link}) {
  return <Link className={styles.featureCard} to={link}>
    <span className={styles.featureIcon}>{icon}</span>
    <Heading as="h3">{title}</Heading>
    <p>{text}</p>
    <span className={styles.cardLink}>Explorar <span aria-hidden="true">→</span></span>
  </Link>;
}

export default function Home() {
  return <Layout title="Documentação" description="Documentação técnica oficial do Civil Connection">
    <main>
      <header className={styles.hero}>
        <div className={styles.gridPattern} />
        <div className={clsx('container', styles.heroInner)}>
          <div className={styles.eyebrow}><span /> DOCUMENTAÇÃO OFICIAL</div>
          <Heading as="h1">Construa com contexto.<br/><em>Entregue com confiança.</em></Heading>
          <p className={styles.heroCopy}>Tudo o que você precisa para configurar, compreender e evoluir a plataforma Civil Connection — do primeiro commit à produção.</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">Começar agora <span aria-hidden="true">→</span></Link>
            <Link className={clsx('button button--secondary button--lg', styles.outlineButton)} to="/docs/reference/api">Ver referência da API</Link>
          </div>
          <div className={styles.techLine}><span>JAVA 17</span><i/><span>SPRING BOOT 3</span><i/><span>POSTGRESQL</span><i/><span>VANILLA JS</span></div>
        </div>
      </header>
      <section className={clsx('container', styles.features)}>
        <div className={styles.sectionHead}><div><span className={styles.kicker}>MAPA TÉCNICO</span><Heading as="h2">Conheça cada camada</Heading></div><p>Referência mantida junto ao código para apoiar desenvolvimento, revisão e onboarding.</p></div>
        <div className={styles.featureGrid}>{features.map(f => <Feature key={f.title} {...f}/>)}</div>
      </section>
      <section className={styles.quickstart}><div className={clsx('container', styles.quickGrid)}>
        <div><span className={styles.kicker}>INÍCIO RÁPIDO</span><Heading as="h2">Da clonagem à API ativa<br/>em poucos minutos.</Heading><p>O perfil padrão usa H2 em memória, sem exigir credenciais externas.</p><Link to="/docs/getting-started/installation">Abrir guia de instalação →</Link></div>
        <div className={styles.terminal}><div className={styles.terminalBar}><span/><span/><span/><b>terminal</b></div><pre><code><small>$</small> git clone https://github.com/havaianasdestruido/CivilConection.git<br/><small>$</small> cd CivilConection/backend<br/><small>$</small> ./gradlew bootRun<br/><br/><strong>✓ Civil Connection disponível em :8080</strong></code></pre></div>
      </div></section>
    </main>
  </Layout>;
}
