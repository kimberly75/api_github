import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as infosActions } from "./../Store/Reducers/infos";
import { Input } from "./../Components/Input";
import Results from "./../Components/Results";
import Loader from "./../Components/Loader";

export default function Search() {
  const [result, setResult] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const { resultRepos, resultStarred, urlOwner, status } = useSelector(
    (state) => state.infos
  );
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  //poderia usar um useSelector no componente Result
  useEffect(() => {
    setResult(resultRepos);
  }, [resultRepos]);

  useEffect(() => {
    setResult(resultStarred);;
  }, [resultStarred]);

  function functionRepos() {
    setText("Repositórios do usuário:");
    dispatch(infosActions.getResultsRepos({ user }));
  }

  function functionStarred() {
    setText("Repositórios populares");
    dispatch(infosActions.getResultsStarred({ user }));
  }
  console.warn('status show', status)
  return (
    <>
      <div style={{ textAlign: "-webkit-center" }}>
        <Input
          functionStarred={functionStarred}
          functionRepos={functionRepos}
          changeUser={(event) => setUser(event.target.value)}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ display: status ? "relative" : "none" }}>
          <div style={{ textAlign: "center", margin: '10px 10px 10px 10px' }} >
            <a href={urlOwner}>{urlOwner}</a>
          </div>
          <Results result={result} text={text} />
        </div>
      )}
    </>
  );
}
