export async function getData(search, type) {
  const api = new API({
    key: "1e19898c87464e239192c8bfe422f280"
  });

  const stream = await api.createStream(
    "search/" + search + "&facet=Type(" + type + "){10}"
  );

  const bla = await api.availability("2E7B6C8F62F348A0");
  console.log(bla);

  stream.pipe(console.log).catch(console.error);
}
