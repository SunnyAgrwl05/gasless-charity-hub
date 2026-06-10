"use client";

import { useState } from "react";

import WalletButton from "../components/WalletButton";
import DonationForm from "../components/DonationForm";
import CharitySelect from "../components/CharitySelect";
import DonationHistory from "../components/DonationHistory";
import DonationStats from "../components/DonationStats";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  const [selectedCharity, setSelectedCharity] =
    useState("Education Fund");

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold text-center">
        Gasless Charity Hub
      </h1>

      <div className="flex justify-center mt-8">
        <WalletButton />
      </div>

      <div className="max-w-4xl mx-auto mt-10">

        <DonationStats />

        <div className="mt-8">
          <CharitySelect
            selected={selectedCharity}
            setSelected={setSelectedCharity}
          />
        </div>

        <div className="mt-6">
          <DonationForm
            selectedCharity={selectedCharity}
          />
        </div>

        <DonationHistory />

        <Leaderboard />

      </div>
    </main>
  );
}


