import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (e) => {
    e.preventDefault();
    // Upload video logic here
    console.log('Video uploaded:', videoFile);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <Head>
        <title>GoldTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center mb-4">
        <Link href="/">
          <a>
            <Image src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A single purple doughnut with white stripes on a bright yellow backdrop, creating a striking color contrast." width={400} height={266} />
          </a>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/upload">
                <a>Upload Video</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to GoldTube</h1>
        <form onSubmit={handleVideoUpload} className="flex flex-col items-center justify-center">
          <input type="text" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} placeholder="Video title" className="w-full p-2 mb-4" />
          <textarea value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} placeholder="Video description" className="w-full p-2 mb-4" />
          <input type="file" onChange={(e) => setVideoFile(e.target.files[0])} className="w-full p-2 mb-4" />
          <button type="submit" className="bg-gold hover:bg-gold-dark text-white font-bold py-2 px-4 rounded">
            Upload Video
          </button>
        </form>
      </main>

      <footer className="flex justify-between items-center mt-4">
        <p>&copy; 2023 GoldTube</p>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
              Images and videos from Pexels
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}