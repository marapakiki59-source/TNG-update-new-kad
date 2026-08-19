export default function App() {
  return (
    <div className="container">
      <main className="main">
        <h1>Log Masuk</h1>
        <div className="form-box">
          <input type="text" placeholder="+60" className="input" />
          <input type="password" placeholder="6-digit PIN" className="input" />
          <a href="#" className="link">Lupa PIN?</a>
          <button className="btn">Log Masuk</button>
        </div>
        <p className="copyright">Copyright © 2026 TNG Digital Sdn Bhd.</p>
      </main>
    </div>
  )
}
