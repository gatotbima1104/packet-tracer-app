"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import HistoryList from "./components/historyList";
import Galeri from "./components/galeri";

interface Package {
  id: number;
  date: string;
  time: string;
  tracker: string;
  tracker_from: string;
  no_resi: string;
  status: string;
}

const Home: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [foundPackage, setFoundPackage] = useState<Package | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const handleSearch = () => {
    const found = paket.find((item) => item.no_resi === trackingNumber);

    if (found) {
      setFoundPackage(found);
      setSearchHistory((prevHistory) => [trackingNumber, ...prevHistory]);
    } else {
      setSearchHistory((prevHistory) => [trackingNumber, ...prevHistory]);
      setFoundPackage(null);
    }

    setSearchPerformed(true);
  };

  const handleDeleteHistory = (historyItem: string) => {
    const updatedHistory = searchHistory.filter((item) => item !== historyItem);
    setSearchHistory(updatedHistory);
  };

  const paket: Package[] = [
    {
      id: 1,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
      status: "delivered",
    },
    {
      id: 2,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
      status: "delivered",
    },
    {
      id: 3,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
      status: "delivered",
    },
    {
      id: 4,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
      status: "delivered",
    },
    {
      id: 5,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
      status: "delivered",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-center mt-56">
        <h1 className="font-semibold text-5xl">
          Temukan Paket Orderan Kamu di sini!
        </h1>
        <p className="py-12">
          Masukkan nomor pesanan Kamu di kolom pencarian di bawah ini
        </p>
        <div className="items-center space-x-3">
          <input
            type="text"
            placeholder="Isikan Nomor Paket Anda disini"
            className="border-slate-300 border rounded-2xl p-3 bg-white mt-3 w-1/2"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="border p-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-500 hover:text-black ont-semibold"
          >
            Cari Paket
          </button>
        </div>
      </div>
      <div className="mt-3">
        <HistoryList
          history={searchHistory}
          onCardClick={(historyItem) => {
            setTrackingNumber(historyItem);
          }}
          onDeleteClick={handleDeleteHistory}
        />
      </div>
      {searchPerformed && !foundPackage ? (
        <div className="text-center mt-8">
          <p>Data tidak ditemukan</p>
        </div>
      ) : null}
      {foundPackage ? (
        <div className="ml-[25rem] mt-8 flex">
          <div className="w-1/2">
            <div>
              <h1 className="font-semibold text-lg">History Paket</h1>
            </div>
            <div className="mt-4 mr-10">
              <table className="border-collapse w-full">
                <tbody>
                  {paket.map((item) => (
                    <tr key={item.id}>
                      <td className="border p-2 text-center items-center">
                        <p>{item.time}</p>
                        <p>{item.date}</p>
                      </td>
                      <td className="border p-2 text-center">{item.tracker}</td>
                      <td className="border p-2 text-center">
                        {item.tracker_from}
                      </td>
                      <td className="border p-2 text-center">{item.no_resi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="tex-center ml-5 mt-10">
            <h1 className="font-semibold text-lg">Status Pesanan</h1>
            <div className="mt-2">
              <p>Melacak Nomor : {foundPackage?.no_resi}</p>
              <p>Status : {foundPackage?.status}</p>
              <p>Tujuan : Indonesia</p>
              <p>Dilacak Oleh : Shoppee express</p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="mt-20 text text-center mb-12 mx-80">
        <h1 className="font-semibold text-3xl ">Track Your Packet Here</h1>
      </div>
      <div className="mb-24">
        <Galeri />
      </div>
      <div className="bg-gray-100 py-7">
        <p className="text-center font-bold">@ copyright 2024</p>
      </div>
    </>
  );
};

export default Home;
