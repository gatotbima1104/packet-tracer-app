"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import HistoryList from "./components/historyList";
import Galeri from "./components/galeri";
import { seacrhPacket } from "./services/packet.sevice";

interface IPackage {
  summary: {
    awb: string;
    courier: string;
    service: string;
    status: string;
    date: string;
    desc: string;
    amount: string;
    weight: string;
  };
  detail: {
    origin: string;
    destination: string;
    shipper: string;
    receiver: string;
  };
  history: {
    date: string;
    desc: string;
    location: string;
  }[];
}

const Home: React.FC<IPackage> = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      const results = await seacrhPacket();

      setSearchPerformed(true);
    } catch (error) {
      console.error("Error searching packet:", error);
    }
  };

  const handleDeleteHistory = (historyItem: string) => {
    const updatedHistory = searchHistory.filter((item) => item !== historyItem);
    setSearchHistory(updatedHistory);
  };

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
