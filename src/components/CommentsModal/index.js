import React, {useContext} from "react";
import { Modal, paddingModalStyles } from "@sangre-fp/ui";
import { finalTranslations } from "../../localTranslation";
import styled, { createGlobalStyle } from "styled-components";
import ThumbUp from "../Thumbs/ThumbUp";
import {translateCommentSections} from '../../helpers/utils'
import EditCommentModal from "../EditCommentModal/EditCommentModal";
import edit2 from "./edit2.svg";
import {capitalizeFirstLetter} from '../../helpers/utils'
import { ACTIONS } from '../../store/Actions'
import {DataContext} from '../../store/GlobalState'
import {commentingApi} from '../../helpers/commentingFetcher'
import { uuid } from 'uuidv4';
import {getUserRoles, getVisitorUid} from '@sangre-fp/connectors/session'

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
    font-family: L10;

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
  commentsModal,
  commentsModalClose,
  commentTopic,
  gid,
  rid,
  pid,
  phenomenon,
  cmts,
  lang
}) => {
  console.log('cmts', cmts)
  const { state: {cmtsData}, dispatch } = useContext(DataContext)

  const {translationTitle} = translateCommentSections(commentTopic, lang)
  const [openEditCommentModal, setOpenCommentsModal] = React.useState(false);
  const [currentCmtIsHandling, setCurrentCmtIsHandling] = React.useState(null);
  const [valueInput, setValueInput] = React.useState("");
  const [valueInputName, setValueInputName] = React.useState("");
  const [remainingChars, setRemainingChars] = React.useState(
    MAXCHARS - +"".length
  );
  const openEditCommentModalHandle = (cmt) => () => {
    console.log('10', cmt)
    setOpenCommentsModal(true)
    setCurrentCmtIsHandling(cmt)
}
  // http://fp_commenting.localhost/commenting/290/radar/195080/phenomenon/c4ad9b29-6d99-465d-b68e-315c90015e66/opportunities/c1f9d794-e658-4845-89fb-00b29524d136
  // commentId: "8134cc4f-b196-43e5-9b8e-c460fc8bfb02"
  // upsertComment: async (gid, radarId, pid, section, cmtId, payload) 
  const commentsModalSubmit = async () => {
    console.log('valueInputNamevalueInputNamevalueInputNamevalueInputName', valueInputName)
    if (!!valueInput?.length) {
      const resNewCmt = await commentingApi.upsertComment(
        gid, 
        rid, 
        pid, 
        commentTopic?.toLowerCase(), 
        uuid(),
        {
          "text": valueInput,
          "name": valueInputName
        }
      )
      console.log('resNewCmt', resNewCmt)
      const resGetAllCmtsByPhenId = await commentingApi.getAllCommentsByPhenId(
        gid, 
        rid, 
        pid
      )

      console.log('resGetAllCmtsByPhenIdresGetAllCmtsByPhenId', resGetAllCmtsByPhenId)
      dispatch({
        type: ACTIONS.CMTSDATA,
        payload: [...resGetAllCmtsByPhenId?.data]
      })
      // commentsModalClose()
      setValueInput('')
      setValueInputName('')
      setRemainingChars(MAXCHARS)
    }
  }

  const functionFromRadatComment = (value) => {
    setOpenCommentsModal(value)
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
    const handleChangeInputInput = (e) => {
      const tempInputValue = e.target.value;
      setValueInputName(() => tempInputValue);
    }

    const getFp_Vid_fromLocalStorage = localStorage.getItem('fp-vid')
    const userRoles = getUserRoles()
    let isAdminUser = false
    for (const [key, value] of Object.entries(userRoles[0])) {
      console.log(`${key}: ${value}`);
      if ( value?.includes("authenticated user") 
        || value?.includes("administrator") 
        || value?.includes("alternative futures") 
        || value?.includes("fp admin") 
        || value?.includes("fp manager")
        || value?.includes("superuser") 
        || value?.includes("fp editor") 
        || value?.includes("fp csm") ) {
          isAdminUser = true
        }
    }
const isVisitorFP = getVisitorUid()
const isShownInputNameField = !!getFp_Vid_fromLocalStorage || !!isVisitorFP || !!isAdminUser
console.log('getUserRoles, getVisitorUid', getUserRoles(), getVisitorUid(), isAdminUser)
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
          <div className="confirmation-modal-content phen-card-tw-px-12 phen-card-tw-pt-3 phen-card-tw-pb-6">
            <h1 className="phen-card-tw-text-h1-modal-title phen-card-tw-font-bold" style={{marginBottom: '12.6px'}}>{phenomenon?.short_title}</h1>
            {/* messageModal */}
            <div className="phen-card-tw-mt-2">
              <p className="phen-card-tw-py-comment-section phen-card-tw-pl-4 phen-card-tw-border-2 phen-card-tw-bg-grayBgTextModal phen-card-tw-text-p-desc phen-card-tw-font-bold" style={{paddingRight: '10px'}}>
                {translationTitle}
              </p>
              {/* showChat */}
              <div className="phen-card-tw-h-chatAreaHeight phen-card-tw-max-w-chatAreaWidth" style={{height: '300px', overflowX: 'hidden', overFlowY: 'auto'}}>

                <>
                  {
                    !!cmts?.length && cmts?.map((cmt, index) => {
                      console.log(999,cmt)
                      const cmtId = cmt?.entity_uri.split('/')[7]
                      return (
                        <>
                          {
                            !!cmt && index !== 0 && (<hr />)
                          }
                          <div className="phen-card-tw-pt-3 phen-card-tw-pb-1 phen-card-tw-px-4 phen-card-tw-text-crowdsourced phen-card-tw-my-3 phen-card-tw-flex phen-card-tw-flex-col">
                            <div className="phen-card-tw-flex phen-card-tw-justify-between phen-card-tw-items-center">
                              <div className="phen-card-tw-flex phen-card-tw-items-end">
                                <div className="phen-card-tw-font-bold"><span>{capitalizeFirstLetter(!!cmt?.['comment_name'] ?cmt?.['comment_name'] : cmt?.['user_name'] )}</span> {" "} <span className="phen-card-tw-text-grayTimeStampComment phen-card-tw-font-normal phen-card-tw-ml-2">{cmt?.['updated_humanTime']}</span></div>
                                <div className="phen-card-tw-ml-6 phen-card-tw-pl-6 phen-card-tw-h-8 phen-card-tw-border-l-2 phen-card-tw-border-black phen-card-tw-font-normal phen-card-tw-inline"></div>
                                <ThumbUp
                                  cid={cmtId}
                                  gid={gid}
                                  rid={rid}
                                  pid={pid}
                                  size={"20"}
                                  view={"thumb_up"}
                                />
                              </div>
                              {
                                !!cmt?.['isAuthor'] && <EditButton src={edit2} onClick={openEditCommentModalHandle(cmt)}/>
                              }
                            </div>
                            <p className="phen-card-tw-my-2 phen-card-tw-pt-1 phen-card-tw-pb-3">{cmt?.['comment_text']}</p>
                          </div>
                        </>
                      )
                    })
                  }
                </>
              </div>

            </div>
            <div>
              <div className="form-group">
                {
                  (isShownInputNameField) && (
                    <input
                      placeholder={lang === 'fi' ? finalTranslations?.name?.fi : finalTranslations?.name?.en}
                      style={{
                        fontSize: "14.1px",
                        color: "121212",
                        width: "100%",
                        height: "44px",
                        marginBottom: "5px",
                        marginTop: "25px",
                        border: "1px solid lightgray",
                        paddingLeft: "11px",
                      }}
                      onChange={handleChangeInputInput}
                      value={valueInputName}
                    />
                  )
                }
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
                    fontSize: "14.1px",
                    color: "121212",
                    width: "100%",
                    height: "76px",
                    margin: "15px 0",
                  }}
                />
                <div className="phen-card-tw-flex phen-card-tw-justify-between">
                  <div className="">
                    <button
                      className="btn btn-sm btn-primary phen-card-tw-text-p-desc"
                      onClick={commentsModalSubmit}
                    >
                      {lang === 'fi' ? finalTranslations?.submitCommentModal?.fi : finalTranslations?.submitCommentModal?.en}
                    </button>
                    <button
                      onClick={commentsModalClose}
                      className="btn btn-sm btn-plain phen-card-tw-text-p-desc"
                    >
                      {lang === 'fi' ? finalTranslations?.cancel?.fi.toUpperCase() : finalTranslations?.cancel?.en.toUpperCase()}
                    </button>
                  </div>
                  <label
                    htmlFor="example1"
                    style={{
                      fontSize: "12.5px",
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
          data={currentCmtIsHandling}
          lang={lang}
          functionFromRadatComment={functionFromRadatComment}
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
