import Link from 'next/link'
import styles from '../page.module.css'
export default function New() {
    return (
        <main className={styles.main}><h1>Hello testing</h1>
            <Link href="/">Home</Link>

        </main>)
}