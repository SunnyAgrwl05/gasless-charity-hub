"use client";

import { useDonations } from "../context/DonationContext";

export default function DonationHistory() {
    const { donations } = useDonations();

    return (
        <div className="border p-4 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">
                Recent Donations
            </h2>

            <ul className="space-y-2">
                {donations.map((donation, index) => (
                    <li key={index}>
                        🟢 {donation.amount} USDC → {donation.charity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

