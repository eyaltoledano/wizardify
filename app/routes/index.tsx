import Image from "remix-image";

export default function Index() {
  return (
    <div>
      <section className="w-full h-auto overflow-hidden relative bg-white pb-8">
        <div className="max-w-7xl mx-auto pt-6 md:pt-8 flex items-center lg:px-0 px-10 justify-center flex-col">
          <a href="#_" className="mb-4 inline-block font-sans text-2xl font-extrabold text-center text-black no-underline bg-transparent cursor-pointer focus:no-underline mx-auto">
            <Image className='w-16' src='https://triwizzy.xyz/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F13aea52c-339b-4f0e-95cc-95ecb302ce4a%2Fimages%2F673f4dca-4f23-44ad-9e30-320162db1d0d.png&w=3840&q=80' />
          </a>
          <p className="font-bold uppercase text-gray-800 tracking-wide text-lg">IN CELEBRATION OF THE TRIWIZZY TOURNAMENT</p>
          <h1 className="text-6xl sm:text-8xl font-black drop-shadow-md uppercase text-center">
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-500 text-transparent">Wizzy up for Fall</span>
          </h1>
          <p className="text-gray-700 text-2xl font-medium max-w-xl mb-10 text-center mt-5">Keep your Doodle warm with a Triwizzy scarf PFP

            <div className="flex items-center">
              <div className="mt-4 flex-1 mr-4">
                <div className="mt-1">
                  <input
                    type="number"
                    name="doodle-id"
                    id="doodle-id"
                    placeholder="Type in your Doodle ID"
                    className="block w-full rounded-md border-gray-800 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-md font-semibold"
                  />
                </div>
              </div>

              <div className="w-1/4">
                <button className="inline-flex relative justify-center items-center py-2 px-4 m-0 h-10 font-sans text-sm font-semibold text-center text-white normal-case align-middle bg-pink-400 rounded-lg border border-black border-solid appearance-none cursor-pointer select-none box-border hover:bg-pink-300 mt-4">Wizardify me</button>
              </div>
            </div>
          </p>
        </div>

        <div className="grid grid-rows-1 grid-cols-6 gap-8 items-center px-4">
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900  overflow-hidden">
                <img src="https://i.postimg.cc/C1PDYrYf/poopie.png" className="w-full" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900 overflow-hidden">
                <img src="https://i.postimg.cc/MZg5QX2f/tulip.png" className="w-full" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="mx-auto px-4">
              <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                <img src="https://i.postimg.cc/C1PDYrYf/poopie.png" className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900 md:block hidden overflow-hidden">
              <img src="https://i.postimg.cc/Y0dd5zDX/bt.png" className="w-full" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900 xl:block hidden overflow-hidden">
              <img src="https://i.postimg.cc/R0vntxZH/jlian.png" className="w-full" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
