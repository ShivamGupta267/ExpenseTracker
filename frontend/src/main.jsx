import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./styles/globalStyle";
import { Globalprovider } from './context/globalcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Globalprovider>

    <App />
    </Globalprovider>
  </StrictMode>,
)
