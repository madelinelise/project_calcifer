import Link from "next/link";
import RecentPostsByTag from "./RecentPostsByTag";

export default function RecentPostsBySection({ heading, posts, tags }) {
  return (
    <section>
      <div className="section-heading">
        <h2>{heading}</h2>
        <aside className="ad-box">AD</aside>
      </div>
      {tags.map((tag) => (
        <RecentPostsByTag key={tag} posts={posts} tag={tag} />
      ))}
    </section>
  );
}
