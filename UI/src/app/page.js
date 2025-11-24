"use client";

import { useState } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import CodeViewer from "../components/CodeViewer";
import ReviewPanel from "../components/ReviewPanel";

export default function Home() {
  const [code, setCode] = useState("");

  return (
    <main className="relative min-h-screen">
      <Background />
        <Navbar />
        <Headline />
        <CodeViewer onCodeChange={setCode} />
        <ReviewPanel code={code} />
    </main>
  );
}