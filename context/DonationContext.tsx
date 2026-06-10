"use client";

import { createContext, useContext, useState } from "react";

type Donation = {
    amount: number;
    charity: string;
};

type DonationContextType = {
    donations: Donation[];
    addDonation: (donation: Donation) => void;
};

const DonationContext = createContext<DonationContextType>({
    donations: [],
    addDonation: () => { },
});

export function DonationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [donations, setDonations] = useState<Donation[]>([
        { amount: 100, charity: "Education Fund" },
        { amount: 50, charity: "Food Donation" },
        { amount: 25, charity: "Medical Support" },
    ]);

    const addDonation = (donation: Donation) => {
        setDonations((prev) => [donation, ...prev]);
    };

    return (
        <DonationContext.Provider
            value={{ donations, addDonation }}
        >
            {children}
        </DonationContext.Provider>
    );
}

export const useDonations = () =>
    useContext(DonationContext);





