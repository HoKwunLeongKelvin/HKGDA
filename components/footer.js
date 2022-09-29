import Image from "next/image";
import Styles from "./footer.module.css";

export default function Layout() {
    return (
      <>
      <div className={Styles.footer}>
        <Image
          priority
          src="/guidedog-footer-525_2.png"
          height={200}
          width={1000}
          alt={"home"}
        />
      </div>
      </>
    )
}