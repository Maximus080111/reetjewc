import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen bg-[#66717E] text-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className='font-bold text-6xl'>ReetjeWC</h1>
        <Image
          src="/reetjewc.png"
          alt="ReetjeWC Logo"
          width={500}
          height={500}
        />
        <p>Deze pagina doet nog weinig maar je kan inloggen!</p>     
        <div className="flex space-x-3 bg-white px-12 py-4 rounded-full mt-8">
          <Link
            href="/protected"
            className="text-black transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
