import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Post } from "../../../store/actions/post.action";
import { OPEN_MODAL } from "../../../store/constants/modal.const";
import PostStatusModal from "../../../components/Modal/postStatusModal";

function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { hidden, handleClick } = useIsHidden();
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const { status } = useSelector((state) => state.modal);
  console.log("🚀 ~ file: index.jsx:17 ~ Create ~ status", status);
  useEffect(
    () => {
      dispatch({
        type: OPEN_MODAL,
        payload: <PostStatusModal />,
      });
    },
    // eslint-disable-next-line
    []
  );
  function handleEditorChangeCss(value, event) {
    setCssText(value);
  }
  function handleEditorChangeHtml(value, event) {
    setHtmlText(value);
  }
  const options = { fontSize: 17 };
  const clickSubmit = () => {
    dispatch(Post(htmlText, cssText, hidden, status, history));
  };
  return (
    <main className="wrapper detail-page create-page">
      <div
        className={`preview-container ${
          hidden ? "dark-preview" : "light-preview"
        }`}
      >
        <style dangerouslySetInnerHTML={{ __html: ".prefix123 " + cssText }} />
        <div
          className="preview prefix123"
          dangerouslySetInnerHTML={{ __html: htmlText }}
        ></div>
        <div className="preview-controls" />
        <label className="theme-switcher">
          Theme:
          <label className="switch">
            <input
              type="checkbox"
              id="preview-theme"
              defaultChecked
              onClick={handleClick}
            />
            <div />
          </label>
          <label className="switch-label" htmlFor="preview-theme">
            {hidden ? "Dark" : "Light"}
          </label>
        </label>
        <span className="preview-color"> {hidden ? "#212121" : "#e8e8e8"}</span>
      </div>
      <section className="css-editor">
        <span className="editor-label editor-label--css">CSS</span>
        <div className="editor-wrapper">
          <Editor
            height="600px"
            options={options}
            theme="vs-dark"
            language="css"
            defaultValue="button {}"
            onChange={handleEditorChangeCss}
          />
        </div>
        <div className="controls">
          <div className="user-controls">
            <div className="errors" />
            <div className="buttons">
              <button className="button button--secondary button--icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z"
                  />
                </svg>
                Save as a draft
              </button>
              <button
                className="button button--primary button--icon button--rotated"
                onClick={clickSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  />
                </svg>
                Submit for review
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="html-editor">
        <span className="editor-label editor-label--html">HTML</span>
        <div className="editor-wrapper editor-wrapper--html">
          <Editor
            height="400px"
            options={options}
            theme="vs-dark"
            language="html"
            defaultValue="<button >Button</button>"
            onChange={handleEditorChangeHtml}
          />
        </div>
      </section>
    </main>
  );
}

export default Create;
