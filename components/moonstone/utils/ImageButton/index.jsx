import Image from "next/image";

/*
    If imageSrc is truthy, displays image and hides text
    Otherwise, displays text
*/
export default function ImageButton({
  type,
  text,
  customStyle,
  imageSrc,
  imageAlt,
  disabled,
}) {
  return (
    <button
      type={type}
      className={`${customStyle} relative w-full items-center rounded-full border text-center font-iregular text-sm shadow-sm`}
      disabled={disabled}
    >
      <p
        className={`${
          imageSrc ? "invisible" : "visible"
        } mx-4 my-4 font-iregular text-sm`}
      >
        {text}
      </p>

      {imageSrc && (
        <div className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform">
          <Image src={imageSrc} layout="fill" alt={imageAlt} />
        </div>
      )}
    </button>
  );
}
