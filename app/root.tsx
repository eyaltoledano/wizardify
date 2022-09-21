import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Image from "remix-image";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Wizardify your Doodle",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0 mx-auto">
            <p className="text-center text-base text-gray-400">
              <Image src='https://pbs.twimg.com/profile_images/1543238248029474816/JoFE-jkP_400x400.jpg' className="inline-block h-10 w-10 rounded-full" />
              {' '}Built with love by <a target={'_blank'} href='https://twitter.com/eyaltoledano' className="font-semibold text-gray-600">sh0</a> — Distributed with magic by the <a target={'_blank'} className="font-semibold text-gray-600" href='https://twitter.com/wizzyministry'>Ministry of Wizard Doodles</a>
            </p>
          </div>
        </div>
      </footer>
    </html>
  );
}
