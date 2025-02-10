import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to the Lifestyle App
        </h1>
        <p className="text-lg max-w-2xl text-center sm:text-left">
          Track and manage your health and finances all in one place. Whether
          you want to monitor your fitness activities, log your medical history,
          manage your income, or keep track of your expenses, the Lifestyle App
          has got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-semibold mb-4">
              Health Tracking
            </h2>
            <p className="text-blue-500">
              Log your fitness activities, track your medical history, and
              monitor your nutrition to maintain a healthy lifestyle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-semibold mb-4">
              Finance Management
            </h2>
            <p className="text-blue-500">
              Manage your income and expenses efficiently to keep your finances
              in check and achieve your financial goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/health"
            className="bg-blue-500 text-white p-4 rounded-md text-center hover:bg-blue-600 transition-colors"
          >
            Explore Health Features
          </Link>
          <Link
            href="/finances"
            className="bg-green-500 text-white p-4 rounded-md text-center hover:bg-green-600 transition-colors"
          >
            Explore Finance Features
          </Link>
        </div>
      </main>
    </div>
  );
}
