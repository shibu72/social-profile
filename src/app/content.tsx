import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
const profile = {
  data: [
    {
      url: "https://www.facebook.com/moin.ashik.5/",
      media: "Facebook",
      icon: "./Facebook Icon.png",
    },
    {
      url: "https://www.instagram.com/ashik____07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      media: "Instagram",
      icon: "./Instagram Icon.png",
    },
    {
      url: "tel:+8801632831160",
      media: "WhatsApp",
      icon: "./WhatsApp Icon.png",
    },
  ],
};
export default function Content() {
  return (
    <>
      <div className="m-auto h-screen">
        <div className="py-4 card bg-transparent backdrop-blur-sm w-96 m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 border">
          <h1 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 py-6">
            Social Media Profile
          </h1>
          <figure className="p-2">
            <div className="avatar online">
              <div className=" ring-violet-700 w-36 rounded-full ring ring-offset-2">
                <img src="/moin.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h4 className="text-center">Hi! i am </h4>
            <h2 className="animate-bounce card-title m-auto text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Moynuddin Farash
            </h2>
            <p className="text-center">Welcome to my Social Media Profile</p>
            <div className="card-actions mt-6">
              <ul className="list-none grid gap-6 w-full">
                {profile.data.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      target="_blank"
                      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
                    >
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
                        
                          <div className="w-10 rounded-full">
                            <img src={item.icon} />
                          </div>
                          <span>Moin on {item.media}</span>
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <BackgroundBeams className="contrast-150"/>
        </div>
      </div>
      <footer className="backdrop-blur-sm text-center p-4 text-zinc-50 fixed bottom-0 w-full z-10">
        <span className="text-sm">This site is made by 
          <Link className="underline" href={'https://www.facebook.com/shawon.mondol.797/'} target="blank"> shawon mondol shibu</Link>
        </span>
      </footer>
    </>
  );
}
