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

  ///--------------------------------------------------------
  // 1. callback luôn được gọi sau khi component mounted
  const [str, setStr] = useState('')
  const [type, setType] = useState('posts')
  useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				console.log("post", posts);
			});
	}, [type]);
  
  return (
		<div>
			{tabs.map((tab, index) => (
        <button
          onClick={() => setType(tab)}
          key={index}
          style={tab === type ? {
            color: '#fff',
            backgroundColor: '#333'
          } : {}}
        >{tab}</button>
			))}
			<input value={str} onInput={(e) => setStr(e.target.value)} />
		</div>
	);
}
export default Content;