import Image from 'next/image'
import styles from '../page.module.css'
import { prefix } from '../../utils/prefix.js'

export default function Footer(){
  return (
    <footer>
      <ul>
        <li>
          <Image 
            className={styles.logo}
            src={`${prefix}/github-circle.svg`}
            alt="github logo"
            width={10}
            height={10}
          />
        </li>
        <li>
          <Image
            className={styles.logo}
            src={`${prefix}/send-mail.svg`}
            alt="email logo"
            width={10}
            height={10}
          />
        </li>
        <li>
          <Image 
            className={styles.logo}
            src={`${prefix}/telegram-circle.svg`}
            alt="telegram logo"
            width={10}
            height={10}
          />
        </li>
        <li>
          <Image 
            className={styles.logo}
            src={`${prefix}/phone.svg`}
            alt="phone logo"
            width={10}
            height={10}
          />
        </li>
      </ul>
    </footer>
  )
}