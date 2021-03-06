import Page from "../Page";
import { getRandomAPI } from "../publicApis";

export default Page;

export async function getServerSideProps() {
  const props = await getRandomAPI(2000);
  return { props };
}
