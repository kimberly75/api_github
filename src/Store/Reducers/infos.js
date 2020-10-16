import { createReducer, createActions } from "reduxsauce";

const initialState = {
  resultRepos: [],
  resultStarred: [],
  type: -1,
  srcImage: '',
  urlOwner: '',
  status: false
};

export const { Types, Creators } = createActions({
  getResultsRepos: ["user"],
  getResultsStarred: ["user"],
  setResultsRepos: ["resultRepos"],
  setResultsStarred: ["resultStarred"],
  setTypeTrue: [],
  setTypeFalse: [],
  setSrcUrl: ["data"],
  limparState: [],
  setStatus: ['status']
});

function limparState(state = initialState) {
  return {
    state: initialState
  };
}

function setStatus(state = initialState, { status }) {
  return {
    ...state,
    status,
  };
}

function setResultsRepos(state = initialState, { resultRepos }) {
  return {
    ...state,
    resultRepos,
  };
}

function setResultsStarred(state = initialState, { resultStarred }) {
  return {
    ...state,
    resultStarred,
  };
}

function setTypeTrue(state = initialState) {
  return {
    ...state,
    type: true,
  };
}

function setTypeFalse(state = initialState) {
  return {
    ...state,
    type: false,
  };
}

function setSrcUrl(state = initialState, { data }) {
  console.log(data)
  return {
    ...state,
    srcImage: data.avatar_url,
    urlOwner: data.html_url 
  };
}

export const infos = {
  [Types.SET_RESULTS_REPOS]: setResultsRepos,
  [Types.SET_RESULTS_STARRED]: setResultsStarred,
  [Types.SET_TYPE_TRUE]: setTypeTrue,
  [Types.SET_TYPE_FALSE]: setTypeFalse,
  [Types.SET_SRC_URL]: setSrcUrl,
  [Types.LIMPAR_STATE]:limparState,
  [Types.SET_STATUS]: setStatus
};

export default createReducer(initialState, infos);
