'use client'
import './page.css'
export default function Home() {
  return (
    <div>
    <header className="Header">
      <button className='Button'>Меню</button>
      <input className='Search' type='text' placeholder='Поиск...'/>
    </header>
    </div>
  );
}
