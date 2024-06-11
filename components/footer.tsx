import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 pt-[10rem]">
      <small className="mb-2 block text-xs">
        &copy; I have followed an youtube resource to build this portfolio website.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting as a part of my learining.
      </p>
    </footer>
  );
}