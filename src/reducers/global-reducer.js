const initialState = {
  ultimoPath: {},
  urlApi: "http://ipeadata2-homologa.ipea.gov.br/api/v1"
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "GLOBAL_ULTIMO_PATH": {
      const newState = {
        ...state,
        ultimoPath: { ...action.payload }
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
