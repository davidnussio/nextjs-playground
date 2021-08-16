import fetch from "node-fetch";

export async function getRandomAPI(ms = 0) {
  const res = await fetch("https://api.publicapis.org/random");
  const json = await res.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: json.entries[0].API,
        description: json.entries[0].Description,
      });
    }, ms);
  });
}
