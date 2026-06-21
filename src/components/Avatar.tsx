import { useState } from "react";

type AvatarProps = {
  src?: string;
  alt: string;
  /** Name used to derive the initial shown when the image is missing/broken. Defaults to alt. */
  name?: string;
  /** Shared box classes (size, shape, border). Applied to both the image and the fallback. */
  className?: string;
};

/**
 * Renders a profile image, falling back to a gradient circle with the person's
 * initial when the image is missing or fails to load. Prevents broken-image
 * icons from showing for members/testimonials without a valid photo.
 */
export default function Avatar({ src, alt, name, className = "" }: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  if (showImage) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className={className}
      />
    );
  }

  const initial = (name ?? alt ?? "?").trim().charAt(0).toUpperCase() || "?";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-400 font-semibold text-white`}
    >
      {initial}
    </div>
  );
}
