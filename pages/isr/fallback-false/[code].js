import Page from "../../../Page";
import { getRandomAPI } from "../../../publicApis";

export default Page;

export async function getStaticPaths() {
  const paths = Array.from(Array(10).keys())
    .map((i) => i)
    .filter((i) => i % 2 !== 0)
    .map((i) => ({ params: { code: i.toString() } }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(params) {
  const props = await getRandomAPI(2000);
  return {
    props: { ...props, date: new Date().toISOString() },
    revalidate: false,
  };
}
