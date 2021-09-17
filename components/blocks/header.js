import Link from 'next/link'

export default function Header() {
  return (
    <header className="">
      <div className="bg-black py-2">
        <div className="max-w-screen-md container mx-auto flex justify-start auto-cols-max">
          <Link href="/">
            <a className="text-white font-bold text-xl hover:text-white">FARADEUS</a>
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <nav className="max-w-screen-md flex justify-start auto-cols-max py-6 container mx-auto">
          <div className="mr-10"><Link href="/"><a className=" text-gray-500 hover:text-gray-700 font-light">Философия</a></Link></div>
          <div className="mr-10"><Link href="/"><a className=" text-gray-500 hover:text-gray-700 font-light">Цитаты</a></Link></div>
          <div className="mr-10"><Link href="/"><a className=" text-gray-500 hover:text-gray-700 font-light">Программирование</a></Link></div>
          <div className="flex-1 text-right"><Link href="/"><a className="font-light">Контакты</a></Link></div>
        </nav>
      </div>
    </header>
  )
}