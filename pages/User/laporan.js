import Head from "next/head";
import Link from "next/link";

export default function Home () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
            <title>Pelaporan</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <div className="bg-white rounded-2xl shadow-2xl flex justify-center w-1/3 max-w-4xl">
                <div className="p-5 text-black">
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-green-500 mb-2">Form Laporan</h2>
                        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-3 flex items-center mb-3">
                                <input type="text" name="judul" placeholder="Judul Laporan" className="bg-gray-100 outline-none text-sm flex-1"  />
                            </div>
                            <div className="bg-gray-100 w-64 p-3 flex items-center mb-3">
                                <select className="bg-gray-100 outline-none text-sm flex-1" aria-label="Default Select Example">
                                    <option name="#" selected>Lokasi Kejadian</option>
                                    <option name="dalam">Dalam Sekolah</option>
                                    <option name="luar">Luar Sekolah</option>
                                </select>
                            </div>
                            <div className="bg-gray-100 w-64 p-3 flex items-center mb-3">
                                <input type="text" name="masalah" placeholder="Masalah / Kejadian" className="bg-gray-100 outline-none text-sm flex-1"  />
                            </div>
                            <div className="bg-gray-100 w-64 p-3 flex items-center mb-3">
                                <select className="bg-gray-100 outline-none text-sm flex-1" aria-label="Default Select Example">
                                    <option name="#" selected>Kategori Laporan</option>
                                    <option name="pengaduan">Pengaduan</option>
                                    <option name="saran">Saran</option>
                                </select>
                            </div>
                            <div className="bg-gray-100 w-64 p-4 flex items-center mb-3">
                                <textarea name="keterangan" placeholder="Keterangan Laporan" className="bg-gray-100 outline-none text-sm flex-1"></textarea>
                            </div>
                            <div className="bg-gray-100 w-64 p-4 flex items-center mb-3">
                            <input  placeholde="Bukti Pendukung" className="bg-gray-100 outline-none text-sm flex-1" type="file" class="form-control" name="bukti"/>
                            </div>
                        </div>
                        <br/>
                        <Link href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 inline-block font-semibold hover:bg-green-500 hover:text-white">Lapor</Link>
                    </div>
                </div>
              </div>
            </main>
        </div>
    )
}