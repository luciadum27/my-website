import Image from "next/image";

//linking the about page 
import Link from 'next/link';
//link the home page 

export default function Home() {
  return (
    <div className="relative font-yujisyuku grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <ol className="font-yujisyuku text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            A Letter Away
          </li>
        </ol>
        <Link 
        href="/about" className="absolute top-4 right-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#e2e2e2] dark:hover:bg-[#444] font-medium text-base sm:text-2lg h-8 px-3">
        about
        </Link>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  );
}
