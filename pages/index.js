import Head from "next/head";
import {FaEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create LoginPage</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5 text-black">
              <div className="text-left font-bold">
                <span className="text-green-500">Pengaduan</span>Sekolah
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Masuk ke Akun
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaEnvelope className="text-gray-400 m-2" />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" name="ingat" className="mr-1" />Ingat saya</label>
                  <a href="/User/lupapw" className="text-xs">Lupa Password</a>
                  </div>
                  <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 inline-block font-semibold hover:bg-green-500 hover:text-white">Masuk</a>
              </div>
             </div>
            </div>{/*Sign In Section*/}
            {/*Sign Up Section*/}
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hai, Selamat Datang!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">Silahkan daftar jika belum memiliki akun</p>
              <Link href="/User/daftar" className="border-2 border-white rounded-full px-12 inline-block font-semibold hover:bg-white hover:text-green-500">Daftar</Link>
            </div>
          </div>
        </main>
    </div>
  )
}