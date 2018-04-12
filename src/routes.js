import * as appControllers from "./controllers/app-controller";
import store from "./store";

const executarRoute = (...parametros) => {
  const query = route.query();

  //Se query for objeto vazio: retorna parametros original
  // Se tiver query: remove ultimo item do parametros (que eh a query)
  if (Object.keys(query).length !== 0) {
    // const ultimoItem = parametros.pop()
    parametros.pop();
  }

  store.dispatch({
    type: "ROUTE",
    payload: {
      parametros,
      query
    }
  });
};

route.base("#/");
route(executarRoute);
route.start(true);

export default function* handleRoute(action) {
  yield put({
    type: "GLOBAL_ULTIMO_PATH",
    payload: action.payload
  });

  switch (action.payload.parametros[0]) {
  // case "": {
  //   yield call(appControllers.homeController);
  //   break;
  // }
  // case "lista-de-serie": {
  //   yield call(appControllers.listaSerieController, action.payload);
  //   break;
  // }
  // case "dados-serie": {
  //   yield call(appControllers.dadosSerieController, action.payload);
  //   break;
  // }

  // default: {
  //   throw 404;
  // }
  }
}
