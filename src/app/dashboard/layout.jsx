import Navbar from "@/componets/Navbar";

export default function DashboardLayout({ children }) {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 opacity-80 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <a href="/dashboard/ventas" className="block py-2 px-4 hover:bg-gray-700 rounded">
           Ventas
          </a>
          <a href="/dashboard/clientes" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Clientes
          </a>
          <a href="/dashboard/configuracion" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Configuración
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1">
        <Navbar /> {/* Navbar en la parte superior */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
