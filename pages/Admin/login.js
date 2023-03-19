import Head from "next/head";
import {FaEnvelope} from 'react-icons/fa'
import Link from 'next/link';
import {MdLockOutline} from 'react-icons/md';
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Login Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex justify-center w-2/8">
                    <div className="p-5 text-black">
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-green-500 mb-2">
                                Masuk Admin
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
                            </div>
                            <br />
                            <Link href="/" className="border-2 border-green-500 text-green-500 rounded-full px-12 inline-block font-semibold hover:bg-green-500 hover:text-white">Masuk</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}