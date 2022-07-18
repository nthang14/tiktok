import { useEffect, useState } from 'react'
const tabs = ['posts', 'comments', 'albums']
function Content() {
  // useEffect(callback, [deps])
  // Các cách dùng"
  // 1. useEffect(callback)
  // - Gọi mỗi khi component re-render lại
  // - Gọi callback sau khi component thêm element vào DOM
  // 2. useEffect(callback, [])
  // - Chỉ gọi callback 1 lần sau khi component mounted
  // 3. useEffect(callback, [deps])
  // - callback được gọi lại mỗi khi deps thay đổi
  // - 

  ///--------------------------------------------------------
  // 1. callback luôn được gọi sau khi component mounted
  const [list, setList] = useState([])
  const [str, setStr] = useState('')
  const [type, setType] = useState('posts')
  const [isGoToTop, setIsGoToTop] = useState(false);
  useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
      .then((data) => {
        setList(data)
			})
  }, [type])
  useEffect(() => {
    const handleScroll = () => {
      let height = window.scrollY;
      if (height >= 200) {
        setIsGoToTop(true)
      } else {
        setIsGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // clean function 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
 
  return (
		<div>
			{tabs.map((tab, index) => (
				<button
					onClick={() => setType(tab)}
					key={index}
					style={
						tab === type
							? {
									color: "#fff",
									backgroundColor: "#333",
							  }
							: {}
					}
				>
					{tab}
				</button>
			))}
			<input value={str} onInput={(e) => setStr(e.target.value)} />
			<ul>
				{list.map((item, index) => (
					<li key={`item-${index}`}>{item.title || item.name}</li>
				))}
			</ul>
			{isGoToTop && (
				<button
					style={{
						position: "fixed",
						bottom: "20px",
            right: "20px",
            width: '45px',
            height: '45px',
						background: "red",
						borderRadius: "50%",
						padding: "10px",
					}}
				>
					Top
				</button>
			)}
		</div>
	);
}
export default Content;