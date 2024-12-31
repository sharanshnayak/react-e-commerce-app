import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import { store } from './redux/store/store.js'
import {BrowserRouter} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider >
  </BrowserRouter>
)
