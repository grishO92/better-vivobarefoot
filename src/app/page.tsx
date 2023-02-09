import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

import Carousel from '@/app/Carousel';

export default async function Home() {
  return (
    <div className={styles.wrapper}>
      <Carousel />
      <section className={styles['mini-banner']}>
        <article className={styles.content}>
          <div className={styles['img-wrapper']}>
            <Image
              className={styles.img}
              width={655}
              height={433}
              src={'/Mini_Banner_Desktop_UB2022_2.webp'}
              alt={'mini-banner'}
            />
          </div>
          <h3 className={styles.header}>UNFINISHED BUSINESS REPORT</h3>
          <p className={styles.description}>
            We’ve just published Unfinished Business 2022, our radically honest
            annual report.
          </p>
          <button className={styles.btn}>FIND OUT MORE</button>
        </article>

        <article className={styles.content}>
          <div className={styles['img-wrapper']}>
            <Image
              className={styles.img}
              width={655}
              height={433}
              src={'/Mini_Banner_Desktop_LEWA_collection_2.webp'}
              alt={'mini-banner'}
            />
          </div>
          <h3 className={styles.header}>VIVOBAREFOOT X LEWA</h3>
          <p className={styles.description}>
            Walk to the drumbeat of conservation.
          </p>
          <button className={styles.btn}>FIND OUT MORE</button>
        </article>
      </section>
    </div>
  );
}
