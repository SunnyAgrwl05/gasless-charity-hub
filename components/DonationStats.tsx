"use client";

import { useDonations } from "../context/DonationContext";

export default function DonationStats() {
    const { donations } = useDonations();

    const totalDonations = donations.reduce(
        (sum, donation) => sum + donation.amount,
        0
    );

    const totalTransactions = donations.length;

    const charityTotals: Record<string, number> = {};

    donations.forEach((donation) => {
        charityTotals[donation.charity] =
            (charityTotals[donation.charity] || 0) +
            donation.amount;
    });

    const topCharity =
        Object.entries(charityTotals).sort(
            (a, b) => b[1] - a[1]
        )[0]?.[0] || "N/A";

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="border p-4 rounded-lg">
                <h3 className="text-gray-400">
                    Total Donations
                </h3>
                <p className="text-2xl font-bold">
                    {totalDonations} USDC
                </p>
            </div>

            <div className="border p-4 rounded-lg">
                <h3 className="text-gray-400">
                    Transactions
                </h3>
                <p className="text-2xl font-bold">
                    {totalTransactions}
                </p>
            </div>

            <div className="border p-4 rounded-lg">
                <h3 className="text-gray-400">
                    Top Charity
                </h3>
                <p className="text-xl font-bold">
                    {topCharity}
                </p>
            </div>

            <div className="border p-4 rounded-lg">
                <h3 className="text-gray-400">
                    Gas Saved
                </h3>
                <p className="text-xl font-bold">
                    {(totalTransactions * 0.001).toFixed(3)} ETH
                </p>
            </div>
        </div>
    );
}


