export default function Footer() {
  return (
    <footer className='page-footer teal lighten-2'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Alina Martynenko
          <a className='grey-text text-lighten-4 right' href='#!'>
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
