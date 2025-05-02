"use client";

import { Palette } from "color-thief-react";
import Image from "next/image";

type Album = {
  title: string;
  src: string;
};

type Props = {
  album: Album;
  onColorSelect: (colors: string[]) => void;
};

export default function AlbumButton({ album, onColorSelect }: Props) {
  return (
    <div className="flex-shrink-0">
      <Palette
        src={album.src}
        crossOrigin="anonymous"
        format="hex"
        colorCount={5}
      >
        {({ data, loading, error }) => (
          <button
            disabled={loading || !!error || !data}
            onClick={() => {
              if (data && data.length >= 3) {
                onColorSelect(data.slice(0, 3));
              }
            }}
            className="p-0 m-0 border-none bg-transparent rounded-md"
          >
            <Image
              src={album.src}
              alt={album.title}
              width={44}
              height={44}
              className="object-cover rounded-md hover:scale-110 transition-transform"
            />
          </button>
        )}
      </Palette>
    </div>
  );
}
