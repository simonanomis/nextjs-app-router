import styles from './page.module.css'
import Link from "next/link";
import Header from "@/components/header";

export default function BlogPage() {
  return (
      <main>
          <h1>The Blog</h1>
          <p><Link href="/blog/post-1">Post 1</Link></p>
          <p><Link href="/blog/post-2">Post 2</Link></p>
      </main>
  )
}
