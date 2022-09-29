import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.slider}>
        
      </div>

      <div className={styles.supportRow}>
        <a className={styles.supportRowItem}>
          <Image
            priority
            src="/ic_eshop.jpg"
            height={200}
            width={200}
          />E-SHOP
      </a>
        <div className={styles.supportRowItem}>
          <Image
            priority
            src="/ic_donate.jpg"
            height={200}
            width={200}
          />DONATE
      </div>
        <div className={styles.supportRowItem}>
          <Image
            priority
            src="/ic_volunteer.jpg"
            height={200}
            width={200}
          />VOLUNTEER
      </div>
      </div>
      <div className={styles.video}>
        <iframe title="導盲犬的一生 Journey of a Guide Dog" width="1020" height="574" src="https://www.youtube.com/embed/VTZmTK0co5Y?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

      </div>
    </>
  )
}
