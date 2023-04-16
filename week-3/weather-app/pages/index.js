import React from "react";
import { Inter } from "next/font/google";
import Container from "./components/Container";
import { WeatherProvider } from "./contexts/WeatherContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <WeatherProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <Container />
      </main>
    </WeatherProvider>
  );
}
