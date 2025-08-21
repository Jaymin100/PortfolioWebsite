import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>Jaymin Swedlund</h2>
          <p>
            Full Stack Developer passionate about building dynamic, responsive web applications.<br />
          </p>
        </div>
        <div className="footer-top-right">
          <h3>Connect</h3>
          <div className="footer-socials">
            <a href="https://github.com/Jaymin100" title="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.197 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jaymin-swedlund-601b8a1b5/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
          </div>
          <div className="footer-contact">  
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Jaymin Swedlund. All rights reserved.<br />

        </p>
      </div>
    </footer>
  )
}

export default Footer