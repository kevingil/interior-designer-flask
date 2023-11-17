import { Dialog, Transition } from '@headlessui/react'
import { useEffect, useState, Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link';


function Showcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [latestImages, setLatestImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  let api_gallery_latest_url = "";

  function closeModal() {
    setIsOpen(false);
    setSelectedImageIndex(null);
  }

  function openModal(index: any) {
    setSelectedImageIndex(index);
    setIsOpen(true);
  }

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
      <div className='h-64 px-6 sm:px-14'>
        <div className='text-left pt-8'>
          <p id='' className='text-2xl sm:text-3xl home_title'><span className='text-4xl sm:text-5xl font-semibold'>Interior Designer AI</span><br></br>Design your dream home</p>
          <p className='text-right mx-4 my-8'>
            <Link id="home_create" href="/create"
              className='border-solid text-xs sm:text-xl border-2 border-sky-500 mx-4 px-4 sm:px-8 py-2 sm:py-3 rounded-[3rem]'>Create Now</Link></p>

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
            !isLoading && latestImages.map((image, index) => {
              console.log("Image URL:", image[4]);
              return (
                <>
                  <div key={index} className="max-w-full sm:max-h-[300px] cursor-pointer sm:p-1" onClick={() => openModal(index)}>
                    <Image src={image[4]} width={300} height={300} alt="" priority={false} className='rounded-xl hover:'/>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-zinc-900 max-w-xl transform overflow-hidden rounded-2xl py-4 sm:py-6 px-6 sm:px-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white pb-2"
                  >
                    Render
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                    {selectedImageIndex !== null && (
                      <Image
                        src={latestImages[selectedImageIndex][4]}
                        width={300}
                        height={300}
                        alt=""
                        priority={false}
                        className="rounded-xl w-full"
                      />
                    )}

                    {selectedImageIndex !== null && (
                      <div className='flex mt-4 gap-2 font-semibold text-sm text-gray-900'>
                        <span className='rounded-full px-2 bg-gray-200'>API: {latestImages[selectedImageIndex][3]}</span>
                        <span className='rounded-full px-2 bg-gray-200'>Date: {latestImages[selectedImageIndex][2]}</span>
                      </div>
                    )}

                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>

  );
}

export default Showcase;
