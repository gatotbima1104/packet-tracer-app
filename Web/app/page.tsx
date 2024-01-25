"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import CardHistory from "./components/cardHistory";
import HistoryList from "./components/historyList";

interface Package {
  id: number;
  date: string;
  time: string;
  tracker: string;
  tracker_from: string;
  no_resi: string;
}

const Home: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [foundPackage, setFoundPackage] = useState<Package | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [history, setHistory] = useState<Package[]>([]);

  const handleSearch = () => {
    const found = paket.find((item) => item.no_resi === trackingNumber);

    if (found) {
      setFoundPackage(found);
      setSearchHistory((prevHistory) => [...prevHistory, trackingNumber]);
      setHistory((prevHistory) => [found, ...prevHistory]);
    } else {
      setFoundPackage(null);
    }
  };
  const paket: Package[] = [
    {
      id: 1,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
    },
    {
      id: 2,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
    },
    {
      id: 3,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
    },
    {
      id: 4,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
    },
    {
      id: 5,
      date: "11-12-2023",
      time: "10:56",
      tracker: "Your Parcel has been By Courier",
      tracker_from: "Yogyakarta",
      no_resi: "SPXID03299053916C",
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
            type="submit"
            className="border p-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-500 hover:text-black ont-semibold"
          >
            Cari Paket
          </button>
        </div>
      </div>
      <div className="mt-3">
        <HistoryList
          history={searchHistory}
          onCardClick={(historyItem) => setTrackingNumber(historyItem)}
        />
      </div>
      {foundPackage ? (
        <div className="mx-44 mt-8">
          <h1 className="font-semibold text-lg">History Paket</h1>
          <div className="mt-4">
            <table className="border-collapse w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Date and Time</th>
                  <th className="border p-2">Keterangan</th>
                  <th className="border p-2">Track</th>
                  <th className="border p-2">No Resi</th>
                </tr>
              </thead>
              <tbody>
                {paket.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2 flex gap-2 items-center">
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
      ) : null}
    </>
  );
};

export default Home;
