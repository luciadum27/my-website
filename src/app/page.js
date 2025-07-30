// import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen border-4 border-red-500 bg-yellow-100">
      <h1 className="absolute top-6 left-6 text-4xl">Test Header</h1>
      <div className="absolute top-6 right-8 flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">About</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Kraft Kit</button>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="relative font-yujisyuku min-h-screen p-8 sm:p-20 border-4 border-red-500">

//         <h1 className="absolute top-6 left-6 text-5xl sm:text-6xl">
//           a letter away
//         </h1>

//         <div className="absolute top-6 right-8 flex gap-4">
//         <Link href="/about">
//           <button className="rounded-full border border-solid border-transparent transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 dark:hover:bg-green-500 font-medium text-base sm:text-2lg h-8 px-4 shadow-md hover:shadow-lg">
//             about
//           </button>
//         </Link>

//         <Link href="/kraft-kit">
//           <button className="rounded-full border border-solid border-transparent transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 dark:hover:bg-green-500 font-medium text-base sm:text-2lg h-8 px-4 shadow-md hover:shadow-lg">
//             kraft kit
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }