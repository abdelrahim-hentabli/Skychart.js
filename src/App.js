import logo from './logo.svg';
import github_logo from './GitHub-Mark-32px.png';
import linkedin_logo from './LI-In-Bug.png';
import portfolio_logo from './8707701631578981545-512.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Skychart
        </p>
      </header>
      <body className="App-body">
        Hello There
      </body>
      <footer
          className="App-footer"
        >
          <a
            className="App-link"
            href="https://github.com/abdelrahim-hentabli/skychart.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_logo} className="App-icons" />
              GitHub
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/abdelrahim-hentabli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin_logo} className="App-icons" />
            Linkedin
          </a>
          <a
            className="App-link"
            href="https://github.com/abdelrahim-hentabli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio_logo} className="App-icons" />
              Portfolio
          </a>
        </footer>
    </div>
  );
}

export default App;
