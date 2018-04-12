import store from "./store";
export default function* catchErrors(fn, ...args) {
  try {
    yield* fn(...args);
  } catch (err) {
    let numbError = parseInt(
      err
        .toString()
        .match(/\d/g)
        .join("")
    );
    if (numbError === 502) {
      const newCall = store.getState().globalReducer.ultimoPath;

      if (newCall.query.error) {
        numbError = parseInt(newCall.query.error) + 1;
      }


      route(
        `${newCall.parametros}?${queryString.stringify(
          { ...newCall.query, error: numbError },
          {
            encode: false
          }
        )}`
      );
    }
    console.log("Erro do handler: ", err.toString());
  }
}
