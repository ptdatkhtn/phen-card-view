import React, {useContext} from "react";
import { Modal, paddingModalStyles, confirmDialogModalStyles } from '@sangre-fp/ui'
import { requestTranslation } from '@sangre-fp/i18n'
import styled, { createGlobalStyle } from 'styled-components'
import {commentingApi} from '../../helpers/commentingFetcher'
import { useSWRConfig } from 'swr'
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal'
import { ACTIONS } from '../../store/Actions'
import {DataContext} from '../../store/GlobalState'
import {finalTranslations} from '../../localTranslation'
import styles from './EditCommentModal.module.css'
import clsx from "clsx";
const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay--after-open {
    background-color: rgba(0,0,0,.77)!important;
    z-index: 100;
  }
  .ReactModal__Content__Wrapper {
    position: relative;
    background-color: rgb(255, 255, 255);
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
`

const MAXCHARS = 1000
const EditCommentModal = ({
  isOpenEditCommentingModal,
  isCloseEditCommentingModal,
  onClosemodal,
  comment_id,
  isCmtIdIsEditing,
  data,
  getAllCommentsByRadarId,
  getDataFromConnectors,
  radarId,
  lang,
  userId,
  functionFromRadatComment,
}) => {
  console.log(444, data)
  const { mutate } = useSWRConfig()
  const { state: {cmtsData}, dispatch } = useContext(DataContext)
  const isOpenModal = React.useMemo(() => (comment_id === isCmtIdIsEditing) , [isCmtIdIsEditing])
  const [valueInput, setValueInput] = React.useState(data?.['comment_text'])
  const [remainingChars, setRemainingChars] = React.useState(MAXCHARS - (+"".length))

  React.useEffect(() => {
    setValueInput(data?.['comment_text'])
  }, [data])

  const checRemainingCharsInput = (value) => {
    var textAreaValue = +value.length;
    var charactersLeft = MAXCHARS - textAreaValue;
    return Number(charactersLeft)
  }
  
  const handleChangeInput = (e) => {
    const tempInputValue = e.target.value
    console.log(3333, tempInputValue)
    const remainingChars = checRemainingCharsInput(tempInputValue)
    setRemainingChars(() => remainingChars)
    setValueInput(() => tempInputValue)
  }
  const passingValueToRadarComments= (value) => {
    functionFromRadatComment(value)
  }

  const handleSave = async() => {
        const arrayDataClone = [].concat([data])
        // here find all the items that are not it the arr1
        const temp = !!getAllCommentsByRadarId?.length && getAllCommentsByRadarId?.filter(obj1 => !arrayDataClone.some(obj2 => obj1.comment_id === obj2.comment_id))
        // then just concat it
        // arr1 = [...temp, ...arr2]
        console.log('dataaaaaaa....', data)
        const newData = {
          comment_id: data?.comment_id,
          comment_name: data?.comment_name,
          comment_source: data?.comment_source,
          comment_text: valueInput,
          created_timestamp: data?.created_timestamp,
          entity_uri: data?.entity_uri,
          isAuthor: data?.isAuthor,
          phenId: data?.phenId,
          section: data?.section,
          uid: data?.uid,
          updated_timestamp: data?.updated_timestamp,
          user_name: data?.user_name
        }
        const arr1 = (!!newData && !!temp) && [...temp, 
          newData
        ]

        mutate(['getAllCommentsByRadarId', JSON.stringify(!!getDataFromConnectors?.length && !!getDataFromConnectors[1] && getDataFromConnectors[1]) , radarId, userId], 
          arr1, false)
          console.log(222, data)
        const groupIdEditing = data?.entity_uri.split('/')[1]
        const radarIdEditing = data?.entity_uri.split('/')[3]
        const phenIdIdEditing = data?.entity_uri.split('/')[5]
        const sectionNameIdEditing = data?.entity_uri.split('/')[6]
        const cmtId = data?.entity_uri.split('/')[7]

        // gid, radarId, pid, section, payload
        await commentingApi.upsertComment(
          groupIdEditing, 
          radarIdEditing,
          phenIdIdEditing,
          sectionNameIdEditing,
          cmtId,
          {
            // "text": "Nana 456" + abc,
            "text": valueInput,
            "name": data?.comment_name
          }
        )

        mutate(['getAllCommentsByRadarId', JSON.stringify(!!getDataFromConnectors?.length && !!getDataFromConnectors[1] && getDataFromConnectors[1]) , radarId, userId])
        
        passingValueToRadarComments(true)
        onClosemodal()
        const temp1 = !!cmtsData ? [...cmtsData] : []

        var newArr = temp1.reduce(function(acc, curr, index) {
          if (String(curr?.['comment_id']) === String(newData?.['comment_id']) ) {
            acc.push(index);
          }
          return acc;
        }, []);
        
        console.log(987, temp1[newArr[0]]?.['comment_text'])
        if (!!temp1?.length) 
          temp1[newArr[0]]['comment_text'] = newData?.['comment_text']
        const newCmtsData = temp1

        dispatch({
          type: ACTIONS.CMTSDATA,
          payload: temp1
        })
  }

  const handleClose = () => {
    setValueInput(() => data?.comment_text)
  }

  const handleCloseModal = () => {
    try {
      handleClose()
      onClosemodal()
      setRemainingChars(MAXCHARS - (+data.comment_text.length))
    } catch (error) {
      
    }
  }

  const [isConfirmModalOpened, setIsConfirmModalOpened] = React.useState(false)
  const handleRemoveComment = () => {
    setIsConfirmModalOpened(true)
  }

  const handleCloseConfirmModal = (value) => {
    setIsConfirmModalOpened(value)
  }

  return (
    <>
      <GlobalStyle />
      {isOpenModal && isOpenEditCommentingModal && (
        <Modal
          isOpen={isOpenModal}
          onRequestClose={handleCloseModal}
          style={paddingModalStyles}
          ariaHideApp={false}
        >
           <div className="modal-form-sections">
            <div className="modal-form-section modal-form-header" style={{paddingBottom: '1px'}}>
              <h3 className={styles.h3Title}>{lang === 'fi' ? finalTranslations?.editCommentTitle?.fi : finalTranslations?.editCommentTitle?.en}</h3>
            </div>
            <div className="modal-form-section" style={{paddingTop: 0}}>
              <div className="form-group">
                <textarea
                  onChange={handleChangeInput} 
                  maxLength="1000" type="text" className={clsx(styles.textAreaStyle,"form-control")} id='comment_textarea' value={valueInput ?? ''} placeholder={'Message *'}
                  />
                  <label htmlFor="example1" className={styles.labelTag}>{remainingChars} {lang === 'fi' ? finalTranslations?.charactersRemainingText?.fi : finalTranslations?.charactersRemainingText?.en}</label>
              </div>
            </div>
    
          </div>
          <div className={clsx(styles.modalFormActionsWrapper, "modal-form-section modal-form-actions")}>
            <div>
              <DeleteConfirmationModal 
                handleCloseConfirmModal={handleCloseConfirmModal}
                isConfirmModalOpened={isConfirmModalOpened}
                data={data}
                lang={lang}
                handleCloseModal={handleCloseModal}
                radarId={radarId}
                />
              <button type="button" className={clsx("btn btn-sm btn-plain-gray", styles.btnStyle, styles.pl_0)} onClick={handleRemoveComment}>{lang === 'fi' ? finalTranslations?.removeComment?.fi : finalTranslations?.removeComment?.en}</button>
            </div>
            <div>
              <button type="button" className={clsx("btn btn-sm btn-plain-gray", styles.btnStyle)} onClick={handleCloseModal}>{lang === 'fi' ? finalTranslations?.cancel?.fi : finalTranslations?.cancel?.en}</button>
              <button type="button" className={clsx("btn btn-sm btn-primary", styles.btnStyle)} onClick={handleSave}>{lang === 'fi' ? finalTranslations?.save?.fi : finalTranslations?.save?.en}</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

const CanvasContainer = styled.canvas`
  border: 1px solid #979797;
`
const ButtonModalActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 18px;
`
const ModalContent = styled.div`
  padding: 12px 30px;
`
const EditButton = styled.img`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
const ModalTitle = styled.h3`
  color: #121212;
  font-size: 20px;
  margin: 0;
  margin-bottom: 24px;
`
const ModalInputHint = styled.div`
  color: #121212;
  font-weight: 400;
  font-size: 14px;
  // margin: 24px 0;
  margin-top: 10px;
`
const ModalInputValue = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #bababa;
  box-sizing: border-box;
  padding: 12px;
`

export default EditCommentModal;
