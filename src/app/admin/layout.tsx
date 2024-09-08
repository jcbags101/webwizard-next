export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white text-gray-800 shadow-md flex flex-col">
        <nav className="flex-1 mx-5">
          <ul>
            <li className="p-4 hover:bg-gray-100 border-b border-gray-200">
              <a href="/admin" className="text-gray-800">
                Dashboard
              </a>
            </li>
            <li className="p-4 hover:bg-gray-100 border-b border-gray-200">
              <a href="/admin/instructors" className="text-gray-800">
                Instructors
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}
