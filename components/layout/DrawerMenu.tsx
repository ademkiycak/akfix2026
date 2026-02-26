"use client";

import { useState } from "react";
import Link from "next/link";

export default function DrawerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menü butonu */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-xl"
        aria-label="Menüyü aç"
      >
        ☰
      </button>

      {/* Arka plan overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold">Menü</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)}>Anasayfa</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Hakkında</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>İletişim</Link>
        </nav>
      </aside>
    </>
  );
}
