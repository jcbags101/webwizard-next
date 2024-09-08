export default function Home() {
  return (
    <div className="min-h-screen px-5 pb-20 font-sans bg-gray-100 flex flex-col justify-between">
      <main className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Welcome to WebWizard
        </h1>
        <p className="text-lg mb-8 text-black">
          Your one-stop solution for creating stunning websites effortlessly.
        </p>
      </main>
      <footer className="mt-20 text-center">
        <p className="text-gray-600">
          &copy; 2023 WebWizard. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
