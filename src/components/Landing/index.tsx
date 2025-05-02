"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import useMousePosition from "../../hooks/useMousePosition";
import { albums } from "@/data/albums";
import Image from "next/image";
import AlbumButton from "./AlbumButton";

export default function Landing() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const [maskColor, setMaskColor] = useState("#ffa3ce");
  const [textColor, setTextColor] = useState("#000000");
  const [hiddenTextColor, setHiddenTextColor] = useState("#000000");

  const sharedTextClasses =
    "flex items-center justify-center w-full h-full text-[34px] leading-[36px] sm:text-[44px] sm:leading-[46px] md:text-[64px] md:leading-[66px] cursor-default";
  const paragraphClasses = "w-5/6 md:3/4 md:p-10";

  return (
    <main className="h-screen relative overflow-hidden">
      <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
        {/* Toggle Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-0 m-0 border-none bg-transparent rounded-md transition pointer-events-auto"
        >
          <Image
            src="/musicfolder.webp"
            alt="Music Folder"
            width={64}
            height={64}
            className="object-cover rounded-md hover:scale-110 transition-transform"
          />
        </button>

        {/* Sliding Album Menu */}
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: menuOpen ? 0 : -500,
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
          }}
          transition={{ type: "tween", duration: 0.4 }}
          className="flex items-center gap-2 px-4 py-2 rounded-md shadow-lg overflow-x-auto overflow-y-hidden max-w-[90vw] h-18"
        >
          {albums.map((album) => (
            <AlbumButton
              key={album.title}
              album={album}
              onColorSelect={(colors) => {
                setMaskColor(colors[0]);
                setTextColor(colors[1]);
                setHiddenTextColor(colors[2]);
                setMenuOpen(false);
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Masked Layer */}
      <motion.div
        className={`${sharedTextClasses} absolute inset-0 mask-[url('/mask.svg')] mask-no-repeat`}
        style={{ backgroundColor: maskColor, color: hiddenTextColor }}
        animate={{
          WebkitMaskPosition:
            x !== null && y !== null
              ? `${x - size / 2}px ${y - size / 2}px`
              : "0px 0px",
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className={paragraphClasses}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          I like making cool shit with code.
        </p>
      </motion.div>

      {/* Background Layer */}
      <div className={sharedTextClasses} style={{ color: textColor }}>
        <p className={paragraphClasses}>
          Hey, I&apos;m Ecem. I&apos;m a{" "}
          <span style={{ color: maskColor }}>frontend developer</span> focused
          on clean UI, smooth UX, and building things people actually enjoy
          using.
        </p>
      </div>
    </main>
  );
}
