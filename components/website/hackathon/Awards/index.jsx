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
    <div className="w-full bg-quinary text-center">
      <h2 className="relative pt-10 text-6xl font-bold md:w-full md:text-8xl">
        Awards
      </h2>
      <div className="spacing flex flex-col justify-center pt-20 pb-20 lg:flex-row">
        <div className="grid w-full grid-cols-3 justify-items-center gap-y-8 gap-x-2 lg:gap-x-8">
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
