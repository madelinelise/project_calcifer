import Link from 'next/link';

export default function RecentPostsByTag({ posts, tag }) {
  // Filter posts that include the given tag
  const filteredPosts = posts
    .filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag))
    .slice(0, 5); // Get only the 5 most recent posts

  if (filteredPosts.length === 0) {
    return <p>No recent posts for "{tag}".</p>;
  }

  return (
    <div className='recent-posts'>
      <div>
        <span>RECENT</span>
        <h3>{tag} Cheat Sheets</h3>
        <ul>
          {filteredPosts.map(({ slug, frontmatter }) => (
            <li key={slug.join('/')}>
              <Link href={`/${slug.join('/')}`}>{frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <aside className='ad-box'> */}
        {/* AD */}
      {/* </aside> */}
    </div>
  );
}
