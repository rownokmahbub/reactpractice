
import BGcolor from "./components/Color/BGcolor"
import Counter from "./components/Counter"
import Todos from "./components/context/Todos"
import CurrencyConverter from "./components/currencyconverter/CurrencyConverter"
import ContextProvider from "./components/minicontext/ContextProvider"
import Login from "./components/minicontext/Login"
import Profile from "./components/minicontext/Profile"
import ThemeSwitcher from "./components/minicontext/ThemeSwitcher"


import VideosPage from "./pages/VideosPage"

export default function App() {

  return (
    <ContextProvider className=" flex flex-col justify-center items-center py-10">
   {/* <VideosPage/> */}
   
   {/* <BGcolor/> */}
   {/* <Counter/> */}
  {/* <CurrencyConverter/> */}
    {/* <Login/>
    <Profile/> */}
    {/* <ThemeSwitcher/> */}
    <Todos/>
    </ContextProvider>
  )
}