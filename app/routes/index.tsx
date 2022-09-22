import { Form, useActionData } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node"; 
import Image from "remix-image";
import { DOODLES } from "./doodles.js"
import { useState } from "react";

export let action: ActionFunction = async ({request}) => {
  let formData = await request.formData();
  let doodleId = formData.get('doodle-id')
  let doodle = DOODLES[doodleId]
  let ipfsHash = doodle.image.split('ipfs://')[1]
  let imgLink = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`
  doodle.image = imgLink
  return doodle
}

export default function Index() {
  const doodle = useActionData()
  const [isHovering, setHover] = useState(false)
  const doodleButtonClasses = 'inline-flex relative justify-center items-center py-2 px-4 m-0 h-10 font-sans text-sm font-semibold text-center text-white normal-case align-middle bg-pink-400 rounded-lg border border-black border-solid appearance-none cursor-pointer select-none box-border hover:bg-pink-300 mt-4'
  const tweetButtonClasses = 'inline-flex relative justify-center items-center py-2 px-4 m-0 h-10 font-sans text-sm font-semibold text-center text-white normal-case align-middle bg-gray-400 rounded-lg border border-black border-solid appearance-none cursor-pointer select-none box-border hover:bg-blue-300 mt-4'
  return (
    <div>
      <section className="w-full h-auto overflow-hidden relative bg-white pb-4">
        <div className="max-w-7xl mx-auto pt-6 md:pt-8 flex items-center lg:px-0 px-10 justify-center flex-col">
          <p className="font-bold uppercase text-gray-600 tracking-wide text-md py-4"><a href="https://triwizzy.xyz/proposal" target="_blank">IN CELEBRATION OF THE TRIWIZZY TOURNAMENT</a></p>
          <h1 className="text-5xl sm:text-6xl font-black drop-shadow-md uppercase text-center">
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-500 text-transparent">Wizzy up for Fall 🧙‍♂️</span>
          </h1>
          <div className="text-gray-700 font-medium mb-4 text-center mt-5">Keep your Doodle warm with a Triwizzy cloak &amp; scarf
            <Form method="post">
              <div className="flex items-center">
                <div className="mt-4 flex-1">
                  <div className="mt-1">
                    
                      <input
                        type="number"
                        name="doodle-id"
                        placeholder="Type in your Doodle ID #"
                        className="block w-full rounded-md border-gray-200 border py-3 px-4 shadow-md focus:border-pink-500 focus:ring-pink-500 text-md font-semibold"
                      />
                  </div>
                </div>

                <div className="w-2/5">
                  <button type='submit' className={doodleButtonClasses}>Wizzy up!</button>
                </div>
              </div>
            </Form>
          </div>
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
                <div className="px-4 py-5 sm:p-6" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                  <img src={doodle?.image ? doodle?.image : 'https://i.postimg.cc/C1PDYrYf/poopie.png'} className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900 md:block overflow-hidden">
              <img src="https://i.postimg.cc/Y0dd5zDX/bt.png" className="w-full" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg border-2 border-gray-900 xl:block overflow-hidden">
              <img src="https://i.postimg.cc/R0vntxZH/jlian.png" className="w-full" />
            </div>
          </div>
        </div>

        <div className={doodle?.image ? 'flex flex-row px-12 pt-4 justify-center align-middle' : 'invisible'}>
          <button className={doodleButtonClasses + ' mr-4 w-1/5'} id='download'>Download</button>
          <button className={tweetButtonClasses + ' w-1/5'}><a href='#' target={'_blank'}>Tweet</a></button>
        </div>
      </section>

      <section className="bg-white fixed bottom-0 text-center">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0 mx-auto">
            <div className="text-center text-base text-gray-400">
              <Image src='https://pbs.twimg.com/profile_images/1543238248029474816/JoFE-jkP_400x400.jpg' className="inline-block h-10 w-10 rounded-full" />
              <span> Built with love by <a target={'_blank'} href='https://twitter.com/eyaltoledano' className="font-semibold text-gray-600">sh0</a> — Distributed with magic by the <a target={'_blank'} className="font-semibold text-gray-600" href='https://twitter.com/wizzyministry'>Ministry of Wizard Doodles</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
