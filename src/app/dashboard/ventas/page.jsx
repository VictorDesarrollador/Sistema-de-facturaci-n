export default function VentasPage() {
  return (
    <div>
      <h1>Ventas</h1>
      <p>Lista de ventas</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Nueva venta
      </button>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Cliente</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">2023-01-01</td>
              <td className="px-4 py-2">Cliente 1</td>
              <td className="px-4 py-2">$100</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}