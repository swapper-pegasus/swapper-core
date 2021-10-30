import React from 'react'

type Props = {
  src: string,
  alt?: string,
  width?: string,
  height?: string,
};

export function Image ({
  src,
  alt = 'Swapper',
  width,
  height
}: Props) {
  const styleImage = 'max-h-screen w-full'

  if (width || height) {
    return (
      <img
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    )
  }

  return (
    <img
      width={width}
      height={height}
      className={styleImage}
      src={src}
      alt={alt}
    />
  )
}
