import React from "react";
import { Modal, paddingModalStyles } from "@sangre-fp/ui";
import { finalTranslations } from "../../localTranslation";
import styled, { createGlobalStyle } from "styled-components";
import ThumbUp from "../Thumbs/ThumbUp";
import {translateCommentSections} from '../../helpers/utils'
import EditCommentModal from "../EditCommentModal/EditCommentModal";
import edit2 from "./edit2.svg";

const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay--after-open {
    background-color: rgba(0,0,0,.77)!important;
    z-index: 100;
    // width: 600px;
  }
  .ReactModal__Content__Wrapper {
    position: relative;
    // background-color: rgb(255, 255, 255);
    background-color: #e8ebeb !important;
    margin: 0 auto;
    max-width: 600px;

    font-size: 1.6rem;
    // width: 70%;
  }
  .form-control{
    font-size: 1.6rem;
  }
  .btn-close-modal {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(0, 105, 152);
    position: absolute;
    top: -15px;
    right: -15px;
    color: rgb(255, 255, 255);
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
  }

  .btn-close-modal .material-icons {
    font-size: 20px;
    display: inline-block;
    line-height: inherit;
  }

  input:focus {
    outline: none !important;
    border: 1px solimport EditCommentModal from '../EditCommentModal/EditCommentModal';
id #d5dbdf;
  }
`;
const MAXCHARS = 1000;
const CommentsModal = ({
  commentsModalSubmit,
  commentsModal,
  commentsModalClose,
  commentTopic,
  gid,
  rid,
  pid,
  phenomenon,
  lang
}) => {
  const {translationTitle} = translateCommentSections(commentTopic, lang)
  const [openEditCommentModal, setOpenCommentsModal] = React.useState(false);

  const [valueInput, setValueInput] = React.useState("");
  const [remainingChars, setRemainingChars] = React.useState(
    MAXCHARS - +"".length
  );
  const openEditCommentModalHandle = () => {
    setOpenCommentsModal(true)
}

const closeEditCommentModalHandle = () => {
    setOpenCommentsModal(false)
}
  const checRemainingCharsInput = (value) => {
    var textAreaValue = +value.length;
    var charactersLeft = MAXCHARS - textAreaValue;
    return Number(charactersLeft);
  };
  const handleChangeInput = (e) => {
    const tempInputValue = e.target.value;
    const remainingChars = checRemainingCharsInput(tempInputValue);
    setRemainingChars(() => remainingChars);
    setValueInput(() => tempInputValue);
  };
  return (
    <>
      <GlobalStyle />
      <Modal
        onRequestClose={commentsModalClose}
        isOpen={commentsModal}
        contentLabel="radar-modal"
        ariaHideApp={false}
        style={paddingModalStyles}
      >
        <div className="confirmation-modal-content px-16 pt-4 pb-8">
          <h1 className="text-h1-modal-title font-bold mb-5">{phenomenon?.short_title}</h1>
          {/* messageModal */}
          <div className="mt-7">
            <p className="py-5 pl-6 pr-4 border-2 bg-grayBgTextModal text-p-desc font-bold">
              {translationTitle}
            </p>
            {/* showChat */}
            <div className="h-chatAreaHeight max-w-chatAreaWidth">
              <div className="pt-4 pb-1 px-6 text-crowdsourced my-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-end">
                    <div className="font-bold">Harry 25.12.2021 20:52</div>
                    <div className="ml-6 pl-6 h-8 border-l-2 border-black font-normal inline"></div>
                    <ThumbUp
                      cid={"67370"}
                      gid={gid}
                      rid={rid}
                      pid={pid}
                      size={"24"}
                      view={"thumb_up"}
                    />
                  </div>
                  <EditButton src={edit2} onClick={openEditCommentModalHandle}/>
                </div>

                <p className="my-4 pt-1 pb-4">This is a comment111</p>
              </div>
              <hr />
              <div className="pt-4 pb-1 px-6 text-crowdsourced my-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-end">
                    <div className="font-bold">Harry 25.12.2021 20:52</div>
                    <div className="ml-6 pl-6 h-8 border-l-2 border-black font-normal inline"></div>
                    <ThumbUp
                      cid={"67371"}
                      gid={gid}
                      rid={rid}
                      pid={pid}
                      size={"24"}
                      view={"thumb_up"}
                    />
                  </div>
                  <EditButton src={edit2} onClick={openEditCommentModalHandle}/>
                </div>

                <p className="my-4 pt-1 pb-4">This is a comment111</p>
              </div>
              <hr />
            </div>
          </div>
          <div>
            <div className="form-group">
              <input
                placeholder={lang === 'fi' ? finalTranslations?.name?.fi : finalTranslations?.name?.en}
                style={{
                  fontSize: "1.41rem",
                  color: "121212",
                  width: "100%",
                  height: "4.4rem",
                  marginBottom: "0.5rem",
                  marginTop: "2.5rem",
                  border: "1px solid lightgray",
                  paddingLeft: "1.1rem",
                }}
              />
              <textarea
                onChange={handleChangeInput}
                maxLength="1000"
                type="text"
                className="form-control"
                id="comment_textarea"
                value={valueInput}
                // placeholder={"Message *"}
                placeholder={lang === 'fi' ? `${finalTranslations?.message?.fi} *` : `${finalTranslations?.message?.en} *`}
                style={{
                  fontSize: "1.41rem",
                  color: "121212",
                  width: "100%",
                  height: "7.6rem",
                  margin: "1.5rem 0",
                }}
              />
              <div className="flex justify-between">
                <div className="">
                  <button
                    className="btn btn-lg btn-primary text-p-desc"
                    onClick={commentsModalSubmit}
                  >
                    {lang === 'fi' ? finalTranslations?.submitCommentModal?.fi : finalTranslations?.submitCommentModal?.en}
                  </button>
                  <button
                    onClick={commentsModalClose}
                    className="btn btn-lg btn-plain text-p-desc"
                  >
                    {lang === 'fi' ? finalTranslations?.cancel?.fi.toUpperCase() : finalTranslations?.cancel?.en.toUpperCase()}
                  </button>
                </div>
                <label
                  htmlFor="example1"
                  style={{
                    fontSize: "1.25rem",
                    color: "#000",
                    marginBottom: 0,
                  }}
                >
                  {remainingChars} {lang === 'fi' ? finalTranslations?.charactersRemainingText?.fi : finalTranslations?.charactersRemainingText?.en}
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <EditCommentModal 
        isOpenEditCommentingModal={openEditCommentModal}
        onClosemodal={closeEditCommentModalHandle}
      />
    </>
  );
};

export default CommentsModal;

export const EditButton = styled.img`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
