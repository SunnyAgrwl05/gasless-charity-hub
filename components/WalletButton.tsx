"use client";

import { useState } from "react";

export default function WalletButton() {
    const [wallet, setWallet] = useState("");

    async function connectWallet() {
        console.log("window.ethereum =", (window as any).ethereum);

        alert(
            (window as any).ethereum
                ? "Ethereum Found"
                : "Ethereum NOT Found"
        );

        try {
            const ethereum =
                (window as any).ethereum ||
                (window as any).web3?.currentProvider;

            if (!ethereum) {
                alert("MetaMask not installed");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            setWallet(accounts[0]);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                onClick={connectWallet}
                className="px-6 py-3 bg-blue-600 rounded-lg text-white"
            >
                Connect Wallet
            </button>

            {wallet && (
                <p className="text-green-500">
                    Connected: {wallet.slice(0, 6)}...
                    {wallet.slice(-4)}
                </p>
            )}
        </div>
    );
}