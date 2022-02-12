function Random() {
  return null;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export async function getServerSideProps(_) {
  const memeLinks = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=WaaANll8h18",
    "https://www.youtube.com/watch?v=tas0O586t80",
    "https://www.youtube.com/watch?v=bUo1PgKksgw",
    "https://www.youtube.com/watch?v=nbWqLK-YPT4",
    "https://www.youtube.com/watch?v=OMa9iVObGQc",
    "https://www.youtube.com/watch?v=bCkCWnmAD-o",
    "https://www.youtube.com/watch?v=Evz_Hxi96e8",
    "/algoritmos.html",
  ];

  return {
    redirect: {
      destination: memeLinks[getRandomInt(memeLinks.length)],
      permanent: false,
    },
  };
}

export default Random;
