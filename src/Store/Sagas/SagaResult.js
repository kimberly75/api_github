import { takeLatest, put, call, all } from "redux-saga/effects";
import { Creators as infos, Types } from "../Reducers/infos";
import { Creators as loading } from "../Reducers/loading";
import { Creators as communication } from "../Reducers/communication";
import { getResultReposAPI, getResultStarredAPI, getResultUserAPI } from "../API/getInfos";

function* getResultRepos({ user }) {
  try {
    yield put(loading.startLoading());
    const { data } = yield call(getResultUserAPI, user)
    yield put(infos.setSrcUrl(data))
    const allResults = yield call(getResultReposAPI, user);
    yield put(infos.setResultsRepos(allResults.data));
    yield put(infos.setTypeTrue());
    yield put(infos.setStatus(true));
    yield put(loading.stopLoading());
    yield put(
      communication.addCommunication({
        status: true,
        description: 'A busca retornou sucesso!',
        type: true
      })
    )
  } catch (e) {
    yield put(infos.limparState());
    yield put(loading.stopLoading());
    yield put(
      communication.addCommunication({
        status: true,
        description: "Erro ao buscar usuário",
        type: false
      })
    )
  }
}

function* getResultStarred({user}) {
  try {
    yield put(loading.startLoading());
    const allResults = yield call(getResultStarredAPI, user);
    yield put(infos.setResultsStarred(allResults.data));
    yield put(infos.setTypeFalse());
    yield put(infos.setStatus(true));
    yield put(loading.stopLoading());
    yield put(
      communication.addCommunication({
        status: true,
        description: 'A busca retornou sucesso!',
        type: true
      })
    )
  } catch (e) {
    yield put(infos.limparState());
    yield put(loading.stopLoading());
    yield put(
      communication.addCommunication({
        status: true,
        description: "Erro ao buscar usuário",
        type: false
      })
    )
  }
}

function* SagaResult() {
  yield all([
    takeLatest(Types.GET_RESULTS_REPOS, getResultRepos),
    takeLatest(Types.GET_RESULTS_STARRED, getResultStarred)
  ])
}

export default SagaResult;
