import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.metadata.title} ({post.metadata.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
