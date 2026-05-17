/**
 * Renders light- and dark-theme image variants using the .dark class on <html>.
 */
export default function ThemedIcon({
  lightSrc,
  darkSrc,
  alt = "",
  className = "size-[1.125rem] opacity-90",
}) {
  return (
    <>
      <img
        src={lightSrc}
        alt={alt}
        className={`${className} dark:hidden`}
        decoding="async"
      />
      <img
        src={darkSrc}
        alt=""
        className={`${className} hidden dark:block`}
        aria-hidden
        decoding="async"
      />
    </>
  );
}
