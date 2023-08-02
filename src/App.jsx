import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import "./i18.js"

function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState("es")
  const [count, setCount] = useState(0)

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('button-count')}{count}
        </button>
        <p>
          {t('edit-code')}<code>src/App.jsx</code>{t('save-hmr')}
        </p>
      </div>
      <p className="read-the-docs">
         {t('read-docs')}
      </p>
      <button
        onClick={() => {
          lang === "es" ? setLang("en") : setLang("es")
        }}
      >
        {t('change-text')}
      </button>
    </>
  )
}

export default App
