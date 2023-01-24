import Link from "next/link";
import Image from 'next/image'
import styles from './Nav.module.css'


export default function Navigation(){
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
        <Link className={styles.logo} href='/'>
          <Image 
          src={'https://www.vivobarefoot.com/static/version1673866097/frontend/vivo/theme-frontend-vivo/en_US//images/vivo-header-logo.svg'}
           alt={'logo'}
           width={34}
           height={32}
           />
        </Link>


        <section className={styles['center-nav']}>
          <div className={styles['wrapper-links']}>
        <Link  className={`${styles['center-link']} ${styles.hovered}`} href='/latest'>Latest
        </Link>
        <section className={styles['latest-sub-nav']}>
        <section className={`${styles.sub} ${styles.left}`}>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Latest</h4>
            <Link className={styles['link-sub']} href='/latest/men'>Men</Link>
            <Link className={styles['link-sub']} href='/latest/women'>Women</Link>
            <Link className={styles['link-sub']} href='/latest/kids'>Kids</Link>
            <Link className={styles['link-sub']} href='/latest/sales'>Sales</Link>
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Categories</h4>
            <Link className={styles['link-sub']} href='/latest/outdoor'>Outdoor</Link>
            <Link className={styles['link-sub']} href='/latest/lifestyle'>Lifestyle</Link>
            <Link className={styles['link-sub']} href='/latest/performance'>Performance</Link>
          </article>
        </section>

        <section className={`${styles.sub} ${styles.right}`}>
            <article className={styles.sub}>
              <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/active-autumn-22-nav-banners-molten-lava.webp'} alt={'active-autumn'}/>
            </article>
            <article className={styles.sub}>
            <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/DECON_Nav_Banner_English_2.webp'} alt={'decon'}/>
            </article>
          </section>
        </section>
          </div>

          <div className={styles['wrapper-links']}>
          <Link className={`${styles['center-link']} ${styles.hovered}`} href='/men'>Men</Link>

<section className={styles['latest-sub-nav']}>
        <section className={`${styles.sub} ${styles.left}`}>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Collections</h4>
            <Link className={styles['link-sub']} href='/men/vegan'>Vegan</Link>
            <Link className={styles['link-sub']} href='/men/all-weather'>All weather</Link>
            <Link className={styles['link-sub']} href='/men/made-in-ethiopia'>Made in Ethiopia</Link>
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Categories</h4>
            <Link className={styles['link-sub']} href='/men/outdoor'>Outdoor</Link>
            <Link className={styles['link-sub']} href='/men/lifestyle'>Lifestyle</Link>
            <Link className={styles['link-sub']} href='/men/performance'>Performance</Link>
            <Link className={styles['link-sub']} href='/men/accessories'>Accessories</Link>
            <Link className={styles['link-sub']} href='/men/sale'>Sale</Link>
          </article>
        </section>

        <section className={`${styles.sub} ${styles.right}`}>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/1222-nav-banners-tracker-forest-esc.webp'} alt={'tracker-forest-esc'}/>
            </article>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/outdoor-autumn-22-nav-banners-obsidian.webp'} alt={'outdoor-autumn'}/>
            </article>
          </section>
        </section>
          </div>

          <div className={styles['wrapper-links']}>
          <Link className={`${styles['center-link']} ${styles.hovered}`} href='/women'>Women</Link>

              <section className={styles['latest-sub-nav']}>
              <section className={`${styles.sub} ${styles.left}`}>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Collections</h4>
            <Link className={styles['link-sub']} href='/women/vegan'>Vegan</Link>
            <Link className={styles['link-sub']} href='/women/all-weather'>All weather</Link>
            <Link className={styles['link-sub']} href='/women/made-in-ethiopia'>Made in Ethiopia</Link>
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Categories</h4>
            <Link className={styles['link-sub']} href='/women/outdoor'>Outdoor</Link>
            <Link className={styles['link-sub']} href='/women/lifestyle'>Lifestyle</Link>
            <Link className={styles['link-sub']} href='/women/performance'>Performance</Link>
            <Link className={styles['link-sub']} href='/women/Accessories'>Accessories</Link>
            <Link className={styles['link-sub']} href='/women/sale'>Sale</Link>
          </article>
        </section>

        <section className={`${styles.sub} ${styles.right}`}>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/1222-nav-banners-gobi-hi-iv.webp'} alt={'gobi'}/>
            </article>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/outdoor-autumn-22-nav-banners-mint.webp'} alt={'mint'}/>
            </article>
          </section>
        </section>
          </div>

          <div className={styles['wrapper-links']}>
          <Link className={`${styles['center-link']} ${styles.hovered}`} href='/kids'>Kids</Link>

<section className={styles['latest-sub-nav']}>
        <section className={`${styles.sub} ${styles.left}`}>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Collections</h4>
            <Link className={styles['link-sub']} href='/kids/vegan'>Vegan</Link>
          
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Categories</h4>
            <Link className={styles['link-sub']} href='/kids/outdoor'>Outdoor</Link>
            <Link className={styles['link-sub']} href='/kids/school'>School</Link>
            <Link className={styles['link-sub']} href='/kids/everyday'>Everyday</Link>
            <Link className={styles['link-sub']} href='/kids/mini-me'>Mini-me</Link>
            <Link className={styles['link-sub']} href='/kids/sale'>Sale</Link>
          </article>
        </section>

        <section className={`${styles.sub} ${styles.right}`}>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/LumiFG_Nav_Banner_English_1.webp'} alt={'lumifg'}/>
            </article>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/autumn-22-nav-banners-kids-primus-knit-ii_copy_1.webp'} alt={'kids-primus-knit-ii'}/>
            </article>
          </section>
        </section>
          </div>

      

          <div className={styles['wrapper-links']}>
          <Link className={`${styles['center-link']} ${styles.hovered}`} href='/whybarefoot'>Why Vivobarefoot</Link>

<section className={styles['latest-sub-nav']}>
        <section className={`${styles.sub} ${styles.left}`}>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Learn</h4>
            <Link className={styles['link-sub']} href='/health-courses'>Health courses</Link>
            <Link className={styles['link-sub']} href='/foot-assessment'>Foot assessment</Link>
            <Link className={styles['link-sub']} href='/experiences'>Experiences</Link>
            <Link className={styles['link-sub']} href='/science'>Science</Link>
            <Link className={styles['link-sub']} href='/blog'>Blog</Link>
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>Regeneration</h4>
            <Link className={styles['link-sub']} href='/b-corb'>B corp</Link>
            <Link className={styles['link-sub']} href='/our-materials'>Our materials</Link>
            <Link className={styles['link-sub']} href='/revivo'>Revivo</Link>
        
          </article>
          <article className={styles.sub}>
            <h4 className={styles['title-sub']}>About us</h4>
            <Link className={styles['link-sub']} href='/our-story'>Our story</Link>
            <Link className={styles['link-sub']} href='/livebarefoot-fund'>Livebarefoot fund</Link>
          </article>
        </section>

        <section className={`${styles.sub} ${styles.right}`}>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/autumn-22-nav-banners-vivohealth_1.webp'} alt={'active-autumn'}/>
            </article>
            <article className={styles.sub}>
                <button className={styles.btn}>Discover</button>
              <Image className={styles['sub-img']} width={370} height={208} src={'/autumn-22-nav-banners-shoespiracy_1.webp'} alt={'decon'}/>
            </article>
          </section>
        </section>
          </div>
        </section>
        <section className={styles['right-nav']}>
        <Link className={styles['right-link']} href=''>
        <Image className={styles['flag-icon']}
          src='/bulgaria-flag.png'
          alt='logo'
           width={25}
           height={25}
           />
        </Link>
        <Link className={styles['right-link']} href=''>
          <Image className={styles['search-icon']}
          src='/search-icon.png'
           alt='logo'
           width={25}
           height={25}
           />
           </Link>
        <Link className={styles['right-link']} href=''>
          <Image className={styles['account-icon']}
          src='/user-icon.png'
           alt='logo'
           width={25}
           height={25}
           />
           </Link>
        <Link className={styles['right-link']} href=''>
           <Image className={styles['cart-icon']}
          src='/shopping-cart.png'
          alt='logo'
           width={25}
           height={25}
           />
           </Link>
        </section>
      </nav>
           </header>
    )
}



