export default function SpotlightShape() {
  return (
    <div className="pointer-events-none absolute -top-[5vh] h-screen w-screen opacity-90 blur-md">
      {/* Desktop spotlight effect */}
      <div
        className="hidden h-full w-full bg-gradient-to-b from-[#330bff] to-transparent lg:block"
        style={{
          clipPath: "polygon(110% 40%, -10% 140%, 40% -120%)",
        }}
      />

      {/* Mobile spotlight effect */}
      <div
        className="block h-full w-full bg-gradient-to-b from-[#330bff] to-transparent lg:hidden"
        style={{
          clipPath: "polygon(130% 50%, -20% 90%, 80% -120%)",
        }}
      />
    </div>
  );
}
