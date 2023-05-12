import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles['footer-join']}>
        <div className={styles['footer-join-left']}>
          <h2 className={styles['footer-join-title']}>Join our mailing list</h2>
          <p className={styles['footer-join-subtitle']}>
            Receive exclusive updates on sales, stories & product launches.
          </p>
        </div>
        <div className={styles['footer-join-right']}>
          <input
            className={styles['footer-join-input']}
            type="email"
            name="email"
            id="email"
            placeholder="Please enter email"
          />
          <input
            className={styles['footer-join-button']}
            type="button"
            value=">"
          />
        </div>
      </section>
      <section className={styles['footer-main']}>
        <article className={styles['footer-follow-us']}>
          <div className={styles.social}>
            <h3 className={styles['social-title']}>Follow us:</h3>
            <div className={styles['social-icons']}>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
            </div>
          </div>
          <Link className={styles.certified} href="/">
            <Image
              src={'/1.1bcorp_5.webp'}
              alt={'logo'}
              width={114}
              height={112}
            />
          </Link>
        </article>
        <article className={styles['footer-site-map']}>
          <div className={styles['footer-site-map-submenu']}>
            <h2 className={styles['submenu-title']}>Shop</h2>
            <Link className={styles.link} href="/">
              Men
            </Link>
            <Link className={styles.link} href="/">
              Women
            </Link>
            <Link className={styles.link} href="/">
              Kids
            </Link>
            <Link className={styles.link} href="/">
              Latest
            </Link>
          </div>
          <div className={styles['footer-site-map-submenu']}>
            <h2 className={styles['submenu-title']}>Help</h2>
            <Link className={styles.link} href="/">
              FAQs & Contact
            </Link>
            <Link className={styles.link} href="/">
              Shipping & Returns
            </Link>
            <Link className={styles.link} href="/">
              Size Guide
            </Link>
            <Link className={styles.link} href="/">
              Send us your old Vives
            </Link>
          </div>
          <div className={styles['footer-site-map-submenu']}>
            <h2 className={styles['submenu-title']}>Community</h2>
            <Link className={styles.link} href="/">
              Store Finder
            </Link>
            <Link className={styles.link} href="/">
              Refer a Friend
            </Link>
            <Link className={styles.link} href="/">
              Our repair services
            </Link>
          </div>
          <div className={styles['footer-site-map-submenu']}>
            <h2 className={styles['submenu-title']}>Company</h2>
            <Link className={styles.link} href="/">
              Careers
            </Link>
            <Link className={styles.link} href="/">
              Affiliates
            </Link>
            <Link className={styles.link} href="/">
              Wholesale
            </Link>
            <Link className={styles.link} href="/">
              Stakeholder Relations
            </Link>
            <Link className={styles.link} href="/">
              PR Enquiries
            </Link>
            <Link className={styles.link} href="/">
              Modern Slavery Statement
            </Link>
          </div>
        </article>
      </section>
      <section className={styles['footer-end']}>
        <div className={styles['footer-end-copyrights']}>
          © 2023 Vivobarefoot. All rights reserved. -- Rework grishO92 --
        </div>
        <div className={styles['footer-end-cookies-shit']}>
          <Link className={styles.link} href="/">
            Terms of use
          </Link>
          <Link className={styles.link} href="/">
            Privacy policy
          </Link>
          <Link className={styles.link} href="/">
            Cookie settings
          </Link>
        </div>
        <Image
          src={'/footer-cards-klarna_2x.webp'}
          alt={'logo'}
          width={401}
          height={40}
          className={styles['footer-end-copyrights']}
        />
      </section>
    </footer>
  );
}
