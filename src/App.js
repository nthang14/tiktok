import { useState } from 'react'
import Content from './Content'
import CountDown from "./CountDown";

function App() {
  const [isShow, setIsShow] = useState(false)
  const toggle = () => {
    setIsShow(!isShow)
  }
  return (
		<div className="App" style={{ padding: 20 }}>
			<button onClick={toggle}>Post</button>
			{isShow && <CountDown />}
		</div>
	);
}

export default App;