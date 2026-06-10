"use client";

import { useState } from "react";
import { ethers } from "ethers";

import { useDonations } from "../context/DonationContext";
import { CONTRACT_ADDRESS, ABI } from "../constants/contract";

type Props = {
    selectedCharity: string;
};

export default function DonationForm({
    selectedCharity,
}: Props) {
    const [amount, setAmount] = useState("");

    const { addDonation } = useDonations();

    const handleDonate = async () => {
        try {
            if (!amount) {
                alert("Please enter donation amount");
                return;
            }

            if (!(window as any).ethereum) {
                alert("MetaMask not installed");
                return;
            }

            const provider = new ethers.BrowserProvider(
                (window as any).ethereum
            );

            const signer = await provider.getSigner();

            const contract = new ethers.Contract(
                CONTRACT_ADDRESS,
                ABI,
                signer
            );

            const tx = await contract.donate(
                selectedCharity,
                Number(amount)
            );

            await tx.wait();

            addDonation({
                amount: Number(amount),
                charity: selectedCharity,
            });

            alert(`
🎉 Donation Successful

Amount: ${amount} USDC

Charity: ${selectedCharity}

Transaction Hash:
${tx.hash}
      `);

            setAmount("");
        } catch (error) {
            console.error(error);
            alert("Donation Failed");
        }
    };

    return (
        <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">
                Donation Form
            </h2>

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border border-gray-500 p-2 mt-2 w-full text-white placeholder-gray-400 bg-gray-900 rounded"
            />

            <button
                onClick={handleDonate}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
                Donate
            </button>
        </div>
    );
}




