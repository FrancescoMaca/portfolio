import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-4xl font-bold">Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link
        href="/"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}
