import Link from 'next/link'

export default function Footer() {
  const today = new Date();
  return (
    <footer className="">
      <div className="bg-black py-2">
        <div className="max-w-screen-md container mx-auto flex justify-between auto-cols-max text-white font-light text-sm">
          <a href="mailto:v@faradeus.site" className="text-white hover:text-white">© {today.getFullYear()} Vladimir Faradeus <br/> Все права защищены.</a>
          <div>
            сделано на{' '}
            <a target="_blank" rel="nofollow" href="https://nextjs.org/" className="text-white hover:text-white">Next.js</a>
            <br/>
            хостинг и деплой - <a target="_blank" rel="nofollow" href="https://vercel.com/" className="text-white hover:text-white">Vercel</a>
          </div>
        </div>
      </div>
    </footer>
  )
}