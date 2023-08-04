import Counter from "./components/Counter"
import EventPlay from "./components/EventPlay"
import Video from "./components/Video"
import videos from "./components/data/videosdata"
import EventPage from "./pages/EventPage"
import RenderPage from "./pages/RenderPage"
import StateMemory from "./pages/StateMemory"
export default function App() {

  return (
    <>
   
    <RenderPage/>
    <EventPage/>
    <StateMemory/>
    </>
  )
}