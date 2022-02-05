import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function BlockItem({
  id,
  coffeeBreak,
  startTime,
  endTime,
  activityType,
  summary,
  author,
  description,
  focused,
  location,
  detailed,
  hyperlink,
}) {
  useEffect(() => {
    const block = document.getElementById("B" + id);
    if (block)
      block.style.maxHeight = focused
        ? block.scrollHeight + 50 + "px"
        : "225px";
  }, [focused]);

  const skipLink = coffeeBreak || focused;

  const block = (
    <div
      id={`B${id}`}
      className={`${styles.gridBlock} ${
        coffeeBreak ? styles.coffee : styles.notCoffee
      }`}
      style={{ maxHeight: 225 }}
    >
      {coffeeBreak && (
        <div className={styles.imgWrapper}>
          <Image src="/images/Coffee.svg" layout="fill" />
        </div>
      )}

      {!coffeeBreak && (
        <p className="font-iextrabold text-xl text-white">
          {startTime}-{endTime}
        </p>
      )}

      <p className={`font-imedium text-xl text-white`}>
        <span className="font-iextrabold">{`${activityType} `}</span>
        {summary}
      </p>

      <ul
        className={`${styles.authors} flex font-iregular text-sm text-gray-400`}
      >
        {author && (
          <li className={styles.listElem}>
            <Link href={`speakers?speaker=${author}`}>
              <a className={styles.author}> {author} </a>
            </Link>
          </li>
        )}
      </ul>

      {description && (
        <div
          className={styles.description}
          style={{ opacity: focused ? 1 : 0 }}
        >
          {description.split("\n").map((text, i) => (
            <p key={i} className={`mb-2 font-iregular text-lg text-white`}>
              {text}
            </p>
          ))}
        </div>
      )}

      <p className={`${styles.location} font-iregular text-sm text-gray-400`}>
        {location}
      </p>

      {!coffeeBreak && (
        <div className={styles.bottomRightCorner}>
          {hyperlink !== undefined && (
            <a
              href={hyperlink}
              target="_blank"
              className={`${styles.hyperlink} font-ibold text-lg text-quinary`}
              rel="noreferrer"
            >
              Enroll
            </a>
          )}

          {description &&
            detailed &&
            (focused ? (
              <Link href={{ hash: "_" }}>
                <a className={styles.expand}>-</a>
              </Link>
            ) : (
              <span className={styles.expand}>+</span>
            ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={skipLink ? "" : styles.clickable}>
      {!skipLink && (
        <Link href={`schedule/#${id}`}>
          <a className={styles.outerLink} />
        </Link>
      )}
      {block}
    </div>
  );
}

export default function Block({ date, detailed, elems }) {
  return (
    <div className={`grid grid-cols-${elems.length}`}>
      {elems.map((elem, id) => (
        <BlockItem
          key={id}
          id={`${date}-${elem.id}`}
          focused={elem.focused}
          detailed={detailed}
          {...elem.activity}
        />
      ))}
    </div>
  );
}
