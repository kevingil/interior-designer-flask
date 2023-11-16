import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

function Showcase() {
  const [latestImages, setLatestImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let api_gallery_latest_url = "", string

  if (process.env.NODE_ENV === 'development') {
    api_gallery_latest_url = "http://localhost:5000/api/gallery_latest"
  } else {
    api_gallery_latest_url = "http://147.182.233.135:5000/api/gallery_latest"
  }

  useEffect(() => {
    async function fetchLatestImages() {
      try {
        const response = await fetch(api_gallery_latest_url);
        const data = await response.json();
        setLatestImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error retreiving images, server might be offline:", error);
      }
    }

    fetchLatestImages();
  }, []);


  return (
    <div className='max-w-[900px] mx-auto'>
      <div className='h-96 px-6 sm:px-14'>
        <div className='text-left pt-28'>
          <p id='' className='text-3xl home_title'><span className='text-6xl font-semibold'>Interior Designer AI</span><br></br>Design your dream home</p>
          <p className='text-right text-xl mx-4 my-8'>
            <Link id="home_create" href="/create"
              className='border-solid border-2 border-sky-500 mx-4 px-8 p-2 pb-4 rounded-[3rem]'>Create Now</Link></p>

        </div>
      </div>
      <div className="bg-stone-900/90 backdrop-blur-sm rounded-xl shadow p-4 w-full mt-2">
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {isLoading ? (
            <>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-slate-700 rounded-xl max-h-[200px] w-full">
                    <div className='w-[70%] m-auto p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-500">
                      <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                    </svg>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            latestImages.map((image, index) => {
            console.log("Image URL:", image[4]);
            return(
              <Image
                src={image[4]}
                width={300}
                height={300}
                alt=""
                key={index}
                priority={false} 
                className="max-w-full sm:max-h-[300px] rounded-xl"
              />
            );})
          )}
        </div>
      </div>
    </div>

  );
}

export default Showcase;
