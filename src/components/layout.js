import Link from 'next/link';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* --- Header --- */}
      <header className='site-header'>
        {/* --- Branding --- */}
        <div className='site-branding'>
          <h1>xyz.com</h1>
        </div>
        {/* --- /Branding --- */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link> {/* Remove <a> tag */}
            </li>
            <li>
              <Link href="/tags">Tags</Link> {/* Remove <a> tag */}
            </li>
          </ul>
        </nav>
      </header>
      {/* --- /Header --- */}
      <main>
        {children}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Blog</p>
      </footer>
    </div>
  );
}
