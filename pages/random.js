import { withoutAuth } from "/components/Auth";
import { useRouter } from "next/router";

function Random() {
  const router = useRouter();
  const memeLinks = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=WaaANll8h18",
    "https://www.youtube.com/watch?v=tas0O586t80",
    "https://www.youtube.com/watch?v=bUo1PgKksgw",
    "https://www.youtube.com/watch?v=nbWqLK-YPT4",
    "https://www.youtube.com/watch?v=OMa9iVObGQc",
    "/algoritmos.html",
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  router.push(memeLinks[getRandomInt(memeLinks.length)]);

  return null;
}

export default withoutAuth(Random);
