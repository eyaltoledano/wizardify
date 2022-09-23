import { Form, useActionData } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node"; 
import Image from "remix-image";
import { DOODLES } from "./doodles.js"
import imageTemplate from '../../public/assets/template.png'
import wizzyMinistryLogo from '../../public/assets/wizzyministry.jpeg'
import sh0 from '../../public/assets/sh0.jpg'
import alex from '../../public/assets/alex.jpg'
import mergeImages from 'merge-images';

export let action: ActionFunction = async ({request}) => {
  
  let formData = await request.formData();
  let doodleId = formData.get('doodle-id')
  if (doodleId) {
    let doodle = DOODLES[doodleId]
    let ipfsHash = doodle.image.split('ipfs://')[1]
    let imgLink = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`
    doodle.image = imgLink
    doodle.id = doodle.name.split('#')[1]
  
    // merge images
    const layers = [doodle.image, imageTemplate]
  
    // uhhhh
    if (typeof window !== "undefined") {
      // await mergeImages(layers).then(b64 => document?.querySelector('#output').src = b64);
    }
  
    return doodle
  }
  return null
}

export default function Index() {
  const doodle = useActionData()
  const doodleButtonClasses = 'inline-flex relative justify-center items-center py-2 px-4 m-0 h-10 font-sans text-sm font-semibold text-center text-white normal-case align-middle bg-pink-400 rounded-lg border border-black border-solid appearance-none cursor-pointer select-none box-border hover:bg-pink-300 mt-4'
  const tweetButtonClasses = 'inline-flex relative justify-center items-center py-2 px-4 m-0 h-10 font-sans text-sm font-semibold text-center text-white normal-case align-middle bg-gray-400 rounded-lg border border-black border-solid appearance-none cursor-pointer select-none box-border hover:bg-blue-300 mt-4'

  return (
    <div className="subpixel-antialiased">
      <section className={`w-full h-auto overflow-hidden relative bg-pukenza bg-cover object-cover bg-center mb-4`}>
        <div className="w-full h-full flex flex-col backdrop-blur-xl">
          <div className="max-w-7xl mx-auto pt-6 md:pt-8 flex items-center lg:px-0 px-10 justify-center flex-col">
            <p className="font-bold uppercase text-gray-600 tracking-wide text-md py-4 text-center"><a href="https://triwizzy.xyz/proposal" target="_blank">IN CELEBRATION OF THE TRIWIZZY TOURNAMENT</a></p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-md uppercase text-center">
              <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-500 text-transparent drop-shadow-xl">Wizzy up for Fall 🧙‍♂️
              <br/>cloaks &amp; scarves for all ✨</span>
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

                  <div className="pl-2">
                    <button type='submit' className={doodleButtonClasses}>Wizzy up!</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className={`sm:hidden`}>
            <div className="mx-auto px-4">
              <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img id='output' src={doodle?.image ? doodle?.image : 'https://i.postimg.cc/C1PDYrYf/poopie.png'} className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-rows-1 lg:grid-cols-6 grid-cols-4 gap-8 items-center px-4 hidden sm:grid">
            <div className="lg:col-span-1 hidden lg:flex">
              <div className="rounded-lg border-2 border-gray-900 xl:block overflow-hidden">
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
                    <img id='output' src={doodle?.image ? doodle?.image : alex} className="w-full rounded-lg" />
                    <canvas className="hidden" width='100' height='100' />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-lg border-2 border-gray-900 md:block overflow-hidden">
                <img src="https://i.postimg.cc/Y0dd5zDX/bt.png" className="w-full" />
              </div>
            </div>
            <div className="lg:col-span-1 hidden lg:flex">
              <div className="rounded-lg border-2 border-gray-900 xl:block overflow-hidden">
                <img src="https://i.postimg.cc/R0vntxZH/jlian.png" className="w-full" />
              </div>
            </div>
          </div>

          <div className={doodle?.image ? 'flex flex-row px-12 pt-4 pb-8 justify-center align-middle' : 'invisible'}>
            <button className={doodleButtonClasses + ' mr-4 w-1/5'} id='download'><a target={"_blank"} href={doodle?.image ? doodle?.image : '#'} download={`${doodle?.id}.png`}>Download</a></button>
            <button className={tweetButtonClasses + ' w-1/5'}><a href='#' target={'_blank'}>Tweet</a></button>
          </div>
        </div>
      </section>

      <section className="bg-white text-center w-full">
        <div className="mx-auto max-w-7xl my-2 sm:my-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="sm:mt-8 md:order-1 md:mt-0 mx-auto">
            <div className="text-center text-xs md:text-sm text-gray-400">
              <div>Built with love by <a target={'_blank'} href='https://twitter.com/eyaltoledano' className="font-semibold text-gray-600">sh0 <Image src={sh0} className="inline-block h-8 w-8 rounded-full" /></a></div>
              <div>Distributed with magic by the <a target={'_blank'} className="font-semibold text-gray-600" href='https://twitter.com/wizzyministry'>Ministry of Wizard Doodles <Image src={wizzyMinistryLogo} className="inline-block h-8 w-8 rounded-full" /></a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
