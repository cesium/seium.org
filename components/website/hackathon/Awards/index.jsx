function Prize({ place, prize }) {
  return (
    <div>
      <h3 className="text-2xl font-bold md:text-3xl">{place}</h3>
      <p className="font-bold">{prize}</p>
    </div>
  );
}

export default function Awards() {
  return (
    <div className="w-full text-center bg-quinary">
      <h2 className="relative pt-10 text-6xl font-bold md:text-8xl md:w-full">
        Awards
      </h2>
      <div className="flex flex-col justify-center pt-20 pb-20 lg:flex-row spacing">
        <div className="grid w-full grid-cols-3 gap-y-8 gap-x-2 justify-items-center lg:gap-x-8">
          <div>
            <Prize
              place={
                <span>
                  2<sup>nd</sup> place
                </span>
              }
              prize="🏆 200€ in gift card"
            />
          </div>
          <div>
            <Prize
              place={
                <span>
                  1<sup>st</sup> place
                </span>
              }
              prize="🏆 300€ in gift card"
            />
          </div>
          <div>
            <Prize
              place={
                <span>
                  3<sup>rd</sup> place
                </span>
              }
              prize="🏆 100€ in gift card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
