import React from 'react';

function RenderArea(props: any) {
  return (
    <div className="bg-stone-900/90 backdrop-blur-sm rounded-xl shadow p-4 grow h-full">
      <p className='text-xl'>Image Render</p>

      <div className="flex justify-center items-center h-full min-h-[350px]">
        {props.loading ? ( 
          <div className='w-full text-center'>
            <p>This might take up to 40 seconds...</p>
            <div className='m-4 flex content-center justify-center'>
            <svg className="animate-spin  mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg></div>
          </div>
        ) : (
          props.response ? (
            <div className="text-white text-lg">
              <div className='flex flex-row flex-wrap gap-4 p-6'>
                {props.response.images && Array.isArray(props.response.images) && props.response.images.length > 0 ? (
                  props.response.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      className="max-w-full sm:max-h-[500px] mx-auto rounded-xl" 
                    />
                  ))
                ) : (
                  <div className="text-white text-lg">Failed to generate images.</div>
                )}
              </div>
            </div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-500 m-6 h-[2rem]">
            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
          </svg>
          )
        )}
      </div>
    </div>
  );
}


export default RenderArea;
