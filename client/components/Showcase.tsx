import { useEffect, useState } from 'react';

function Showcase() {
  const [latestImages, setLatestImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the latest images from the Python API when the component mounts.
    async function fetchLatestImages() {
      const response = await fetch('http://localhost:8080/api/gallery_latest'); // Replace with your actual API endpoint
      if (response.ok) {
        const data = await response.json();
        setLatestImages(data);
        setIsLoading(false); // Set isLoading to false when images are fetched.
      }
    }

    fetchLatestImages();
  }, []);

  return (
    <div className="bg-stone-900/90 backdrop-blur-sm rounded-xl shadow p-4 w-full mt-2">
      <h2>Showcase</h2>
      <div className='flex sm:flex-row flex-col'>
        {isLoading ? ( // Display SVGs while images are loading.
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-500 m-6 h-[2rem]">
              {/* SVG path here */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-500 m-6 h-[2rem]">
              {/* SVG path here */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-500 m-6 h-[2rem]">
              {/* SVG path here */}
            </svg>
          </>
        ) : (
          latestImages.map((image, index) => (
            <img
              key={index}
              src={image[4]} // Access the image URL from the response
              alt={`Image ${index + 1}`}
              className="max-w-full sm:max-h-[200px] m-2 rounded"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Showcase;
