"use client";

import { useDonations } from "../context/DonationContext";

export default function Leaderboard() {
    const { donations } = useDonations();

    const charityTotals: Record<string, number> = {};

    donations.forEach((donation) => {
        charityTotals[donation.charity] =
            (charityTotals[donation.charity] || 0) +
            donation.amount;
    });

    const charities = Object.entries(charityTotals)
        .map(([name, amount]) => ({
            name,
            amount,
        }))
        .sort((a, b) => b.amount - a.amount);

    return (
        <div className="border p-4 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">
                Charity Leaderboard
            </h2>

            <div className="space-y-3">
                {charities.map((charity, index) => (
                    <div
                        key={index}
                        className="flex justify-between"
                    >
                        <span>{charity.name}</span>

                        <span>
                            {charity.amount} USDC
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}


