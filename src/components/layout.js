import Link from 'next/link';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* --- Header --- */}
      <header className='site-header'>
        <div className='site-header__wrap'>
          {/* --- Branding --- */}
          <div className='site-branding'>
            <Link href="/">
              <h1 className='heading'>XYZ.com</h1>
            </Link>
          </div>
          {/* --- /Branding --- */}
          {/* --- Nav --- */}
          <nav className='site-nav'>
            <ul>
              <li><Link href="/tech">Technology</Link></li>
              <li><Link href="/health">Health</Link></li>
              <li><Link href="/finance">Finance</Link></li>
            </ul>
          </nav>
        </div>
        <aside className='ad-box'>
          AD
        </aside>
        {/* --- /Nav --- */}
      </header>
      {/* --- /Header --- */}
      <main>
        {children}
      </main>

      <footer>
        {/* <p>&copy; {new Date().getFullYear()} XYZ.com</p> */}
      </footer>
    </div>
  );
}
