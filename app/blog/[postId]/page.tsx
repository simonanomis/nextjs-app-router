import styles from './page.module.css'
import Link from "next/link";
import Header from "@/components/header";

export interface BlogPostParams {
    postId: string;
}
export default function BlogPostPage({params} : { params: BlogPostParams }) {
  return (
      <div>My Post: {params.postId}</div>
  )
}
