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

      <section className={styles['vivo-in-use-wrapper']}>
        <h2 className={styles.header}>VIVO IN USE</h2>
        <div className={styles.grid}>
          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-hiking-1_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Hiking</h4>
          </article>
          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-vegan_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Vegan</h4>
          </article>

          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-road-running_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Road Running</h4>
          </article>
          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-work_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Work</h4>
          </article>
          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-winterproof_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>All Weather</h4>
          </article>
          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-casual_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Casual</h4>
          </article>

          <article>
            <div className={styles['img-wrapper']}>
              <Image
                className={styles.img}
                width={338}
                height={374}
                src={'/vivo-use-0821-338x374-trail-running_2.webp'}
                alt={'mini-banner'}
              />
            </div>
            <h4>Trail Running</h4>
          </article>
        </div>
      </section>

      <section className={styles['world-of-barefoot']}>
        <h2 className={styles.headerr}>World of Barefoot</h2>
        <article className={styles.content}>
          <div className={styles['img-wrapper']}>
            <Image
              className={styles.img}
              width={655}
              height={433}
              src={'/Rewilding_Nature.webp'}
              alt={'mini-banner'}
            />
          </div>
          <h4 className={styles.date}>February 8, 2023</h4>
          <h3 className={styles.header}>REWILDING NATURE</h3>
          <p className={styles.description}>
            The Somerset Levels, in southwest England, was once a vast, wild
            wetland spanning the flatlands from the Mendip Hills to the Atlantic
            coast. Sadly, like most of our habitats, the Somerset Levels is a...
          </p>
          {/* <button className={styles.btn}>FIND OUT MORE</button> */}
        </article>

        <article className={styles.content}>
          <div className={styles['img-wrapper']}>
            <Image
              className={styles.img}
              width={655}
              height={433}
              src={'/Train_Natural_Blog_Desktop_Header_580x390.webp'}
              alt={'mini-banner'}
            />
          </div>
          <h4 className={styles.date}>January 31, 2023</h4>
          <h3 className={styles.header}>NATURAL HEALTH AND NATURAL TRAINING</h3>
          <p className={styles.description}>
            Discover natural training. Functional, varied and holistic training
            that both increases your performance as well as protects your long
            term health.
          </p>
          {/* <button className={styles.btn}>FIND OUT MORE</button> */}
        </article>
      </section>
    </div>
  );
}
