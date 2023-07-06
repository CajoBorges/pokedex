import styles from "./page.module.css"
import Image from "next/image"
import image from "./images/favicon.ico"

export default function Home() {
  return (
    <>
      <Image src="image" />
      <h1 className={styles.title}>Pokédex</h1>
    </>
  )
}

