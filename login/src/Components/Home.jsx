import React,{useState,useEffect} from 'react'

const Home = () => {
    const [items, setItems] = useState([]);
    console.log(localStorage)
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('username'));
        if (items) {
         setItems(items);
        }
      }, []);
  return (
    <div>{items}</div>
  )
}

export default Home