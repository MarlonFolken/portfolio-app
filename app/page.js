import Image from 'next/image'
import styles from './page.module.css'
import { prefix } from '../utils/prefix.js'
import Footer from './components/Footer'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <div className={styles.gridContainer}>
        <div className={styles.description}>
          <p>
            Page under&nbsp;
            <code className={styles.code}>construction</code>
          </p>
        </div>
        <div className={styles.greetHead}>
          <h3>Desarrollador Web Frontend</h3>
          <h1>Marlon Vargas</h1>
        </div>
        <div className={styles.greetSpeech}>
          <h2>Bienvenido a mi portafolio</h2>
          <h4>Creando sitios web, con más de 8 años de experiencia</h4>
        </div>

        <div className={styles.center}>

        </div>

        <div className={styles.projectsCards}>
          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project1 <span>-&gt;</span>
            </h2>
            <p>Lorem ipsum</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project2 <span>-&gt;</span>
            </h2>
            <p>Sit amet, consectetur adipiscing elit.</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project3 <span>-&gt;</span>
            </h2>
            <p>Nulla congue porta velit</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project4 <span>-&gt;</span>
            </h2>
            <p>Faucibus dignissim neque interdum scelerisque</p>
          </a>

        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
