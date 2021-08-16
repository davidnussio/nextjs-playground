import { useRouter } from "next/router";

export default function Page(props) {
  const router = useRouter();

  console.log("Page props", router);

  if (router.isFallback) {
    return <>fallback... </>;
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
}
