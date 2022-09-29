import Link from "next/link";
import Image from "next/image";
import Styles from "./header.module.css";
export default function Layout() {
  return (
    <>
    <div className={Styles.header}>
    <div>
        <Image
          priority
          src="/AAIILogoLarge-1024x442.jpg"
          height={100}
          width={200}
          alt={"home"}
        />
      </div>

      <div>
        <Image
          priority
          src="/68248661_2501539039908994_1390522419726254080_n.jpg"
          height={100}
          width={100}
          alt={"home"}
        />
      </div>
      <div>
        <Image
          priority
          src="/IGDF.Logo_.Colours.jpg"
          height={100}
          width={100}
          alt={"home"}
        />
      </div>
    </div>
    <nav className={Styles.headernav}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/HKGDA-Logo_Square.jpg"
            className={Styles.borderCircle}
            height={150}
            width={150}
            alt={"home"}
          />
        </a>
      </Link>
      <nav className={Styles.nav}>
        <Link href="/">
          <a className={Styles.navtext}>About Us</a>
        </Link>
        <Link href="/posts/first-post">
          <a className={Styles.navtext}>Services</a>
        </Link>
        <Link href="/posts/second-post">
          <a className={Styles.navtext}>Support Us</a>
        </Link>
        <Link href="/">
          <a className={Styles.navtext}>What's new</a>
        </Link>
        <Link href="/posts/first-post">
          <a className={Styles.navtext}>E-Shop</a>
        </Link>
        <Link href="/posts/second-post">
          <a className={Styles.navtext}>Contact Us</a>
        </Link>
      </nav>
    </nav>
    </>
  );
}