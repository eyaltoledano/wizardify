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

export const meta: MetaFunction = () => {
  const description = `The wizzies have released a handy tool to help warm your Doodles and celebrate in the elements! Right click and save your Triwizzy Doodle today, compliments of the Ministry of Wizard Doodles.`
  const image = "https://wvvmijmjchpqjqiwewxy.supabase.co/storage/v1/object/public/general/wizzyup"
  return {
    charset: "utf-8",
    title: "Wizzy up your Doodle!",
    viewport: "width=device-width,initial-scale=1",
    "og:description": description,
    "og:image": image,
    "twitter:image": image,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@eyaltoledano",
    "twitter:site": "@wizzyministry",
    "twitter:title": "Wizzy up your Doodle!",
    "twitter:description": description,
    description,
  }
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* <div>Navigation</div> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
