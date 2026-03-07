"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import useMousePosition from "../../hooks/useMousePosition";
import { albums } from "@/data/albums";
import Image from "next/image";
import AlbumButton from "./AlbumButton";

// Convert hex to HSL components
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  const h1 = h / 360;
  const s1 = s / 100;
  const l1 = l / 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    const t1 = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
    if (t1 < 1 / 6) return p + (q - p) * 6 * t1;
    if (t1 < 1 / 2) return q;
    if (t1 < 2 / 3) return p + (q - p) * (2 / 3 - t1) * 6;
    return p;
  };
  let r, g, b;
  if (s1 === 0) {
    r = g = b = l1;
  } else {
    const q = l1 < 0.5 ? l1 * (1 + s1) : l1 + s1 - l1 * s1;
    const p = 2 * l1 - q;
    r = hue2rgb(p, q, h1 + 1 / 3);
    g = hue2rgb(p, q, h1);
    b = hue2rgb(p, q, h1 - 1 / 3);
  }
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.round(x * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

// Clamp lightness so the color is always readable on a white background
function ensureContrast(hex: string, maxLightness = 55): string {
  const [h, s, l] = hexToHsl(hex);
  return l > maxLightness ? hslToHex(h, Math.max(s, 30), maxLightness) : hex;
}

// Return black or white — whichever has better contrast against the given background
function getReadableOn(bgHex: string): string {
  const r = parseInt(bgHex.slice(1, 3), 16) / 255;
  const g = parseInt(bgHex.slice(3, 5), 16) / 255;
  const b = parseInt(bgHex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const L = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  return L > 0.179 ? "#000000" : "#ffffff";
}

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
                const mask = ensureContrast(colors[0], 55);
                setMaskColor(mask);
                setTextColor(ensureContrast(colors[1], 35));
                setHiddenTextColor(getReadableOn(mask));
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
          I build things people actually love using.
        </p>
      </motion.div>

      {/* Background Layer */}
      <div className={sharedTextClasses} style={{ color: textColor }}>
        <p className={paragraphClasses}>
          Hey, I&apos;m Ecem. Engineer with a{" "}
          <span style={{ color: maskColor }}>product brain</span>. I build fast,
          ship with intention, and care deeply about the people on the other end
          of the screen.
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-default"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: textColor }}
      >
        <span className="text-xs tracking-widest uppercase opacity-60">scroll</span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ backgroundColor: maskColor }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </main>
  );
}
