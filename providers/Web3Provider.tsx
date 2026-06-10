"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    RainbowKitProvider,
    getDefaultConfig,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";

const config = getDefaultConfig({
    appName: "Gasless Charity Hub",
    projectId: "c3fc1f23fa6b0aa277e66dc59efedf49",
    chains: [baseSepolia],
});

const queryClient = new QueryClient();

export default function Web3Provider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}