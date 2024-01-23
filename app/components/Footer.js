import Image from 'next/image'
import styles from '../page.module.css'
import footstyles from '../components/footer.module.css'
import { prefix } from '../../utils/prefix.js'

export default function Footer(){
  return (
    <footer>
      <div className={footstyles.contactMedia}>
        <ul>
          <li
            title='Github profile'
          >
            <a href='https://github.com/marlonfolken'
              target='_blank'
            >
              <Image 
                className={styles.logo}
                src={`${prefix}/github-circle.svg`}
                alt="github logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Telegram message'
          >
            <a href='https://t.me/marlonvc'>
              <Image 
                className={styles.logo}
                src={`${prefix}/telegram-circle.svg`}
                alt="telegram logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Phone call'
          >
            <a href="tel:+527224114502">
              <Image 
                className={styles.logo}
                src={`${prefix}/phone.svg`}
                alt="phone logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Send e-mail'
          >
            <a href='mailto:marlonvargasmx@gmail.com'>
              <Image
                className={styles.logo}
                src={`${prefix}/send-mail.svg`}
                alt="email logo"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}