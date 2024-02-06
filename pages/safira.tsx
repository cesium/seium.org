function Safira() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://www.youtube.com/watch?v=YvrWzbp7B4g",
      permanent: false,
    },
  };
}

export default Safira;
