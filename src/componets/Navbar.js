"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
        <i className="bi bi-bank"></i>
          <h1 className="ml-2">FactureApp</h1>
        </Link>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Inicio</Link>
          <Link href="/about" className="hover:text-gray-400">Nosotros</Link>
          <Link href="/contact" className="hover:text-gray-400">Contacto</Link>
        </div>

        {/* Menú responsive */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-gray-400">Inicio</Link>
          <Link href="/about" className="block py-2 hover:text-gray-400">Nosotros</Link>
          <Link href="/contact" className="block py-2 hover:text-gray-400">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
