import React, { useContext, useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import CommentsModal from "../CommentsModal";
import {commentingApi} from '../../helpers/commentingFetcher'
import {capitalizeFirstLetter} from '../../helpers/utils'
import {finalTranslations} from '../../localTranslation'
import { ACTIONS } from '../../store/Actions'
import {DataContext} from '../../store/GlobalState'
import {isEmpty} from '../../helpers/utils'
import { getUserId } from '@sangre-fp/connectors/session'
import styles from './Comments.module.css'
const Comments = ({gid, rid, pid, lang, phenomenon}) => {
  const {state:{ cmtsData},  dispatch } = useContext(DataContext)
  console.log(777, cmtsData)
  const cmtsData1 = !!cmtsData?.length ? [...cmtsData] : []
          !!cmtsData1?.length && cmtsData1?.map((cmt) => {
            if (getUserId().toString() === cmt.uid.toString()) {
                cmt['isAuthor'] = true
              } else {
                cmt['isAuthor'] = false
              }
          })
          
  const [openCommentsModal, setOpenCommentsModal] = useState(false);
  const [commentTopic, setCommentTopic] = useState(null)


  const openCommentsModalHandle = () => {
    setOpenCommentsModal(true);
  };

  const closeCommentsModalHandle = () => {
    setOpenCommentsModal(false);
  };

  const opportunitiesCmts = useMemo(() => {
    const a = !!cmtsData1?.length && cmtsData1?.map((cmt) => {
      const convert2HumunDate = (new Date(+cmt?.['updated_timestamp'] * 1000)).toString().split(' ')
      const mm = new Date(+cmt?.['updated_timestamp'] * 1000).toLocaleDateString().split('/')[1]
      const cmtTemp = (!!cmt && !isEmpty(cmt)) ? {...cmt} : {}
      console.log('ccc', cmt)
      cmtTemp['updated_humanTime'] = convert2HumunDate[2] + '.' + mm + '.' + convert2HumunDate[3] + ' ' + convert2HumunDate[4]
      return cmtTemp
    }).filter((cmt) => {
      console.log('checkccking', cmt)
      return String(cmt?.entity_uri?.split('/')[6]) === 'opportunities'
    })
    console.log(99, a)
    return !!a?.length && a?.sort(function(x, y){
      return x.created_timestamp - y.created_timestamp;
  })
  }, [cmtsData, dispatch])

  const threatsCmts = useMemo(() => {
    const a = !!cmtsData1?.length && cmtsData1?.map((cmt) => {
      const convert2HumunDate = (new Date(+cmt?.['updated_timestamp'] * 1000)).toString().split(' ')
      const mm = new Date(+cmt?.['updated_timestamp'] * 1000).toLocaleDateString().split('/')[1]
      const cmtTemp = (!!cmt && !isEmpty(cmt)) ? {...cmt} : {}
      cmtTemp['updated_humanTime'] = convert2HumunDate[2] + '.' + mm + '.' + convert2HumunDate[3] + ' ' + convert2HumunDate[4]
      return cmtTemp
    }).filter((cmt) => {
      return String(cmt?.entity_uri?.split('/')[6]) === 'threats'
    })
    return !!a?.length && a?.sort(function(x, y){
      return x.created_timestamp - y.created_timestamp;
  })
  }, [cmtsData, dispatch])

  const actionsCmts = useMemo(() => {
    const a = !!cmtsData1?.length && cmtsData1?.map((cmt) => {
      const convert2HumunDate = (new Date(+cmt?.['updated_timestamp'] * 1000)).toString().split(' ')
      const mm = new Date(+cmt?.['updated_timestamp'] * 1000).toLocaleDateString().split('/')[1]
      const cmtTemp = (!!cmt && !isEmpty(cmt)) ? {...cmt} : {}
      cmtTemp['updated_humanTime'] = convert2HumunDate[2] + '.' + mm + '.' + convert2HumunDate[3] + ' ' + convert2HumunDate[4]
      return cmtTemp
    }).filter((cmt) => {
      return String(cmt?.entity_uri?.split('/')[6]) === 'actions'
    })
    return !!a?.length && a?.sort(function(x, y){
      return x.created_timestamp - y.created_timestamp;
  })
  }, [cmtsData, dispatch])

  console.log(44499, opportunitiesCmts)
  return (
    <>
      <div className={styles.commentsWrapper}>
        <h3 className={styles.h3Title}>{lang === 'fi' ? finalTranslations?.commenting?.fi : finalTranslations?.commenting?.en}</h3>
        <div>
          <div className={styles.sectionWrapper}>
            <p className={styles.sectionTitle}>{lang === 'fi' ? finalTranslations?.opportunitiesCommentSection?.fi : finalTranslations?.opportunitiesCommentSection?.en}</p>
            <p
              className={styles.commentsViewText}
              onClick={() => {
                  setCommentTopic('Opportunities');
                  openCommentsModalHandle();
              }}
            >
              <span className={clsx(styles.chatIcon, 'af-custom-chat')}></span>
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>
          <>
              {
                opportunitiesCmts && !!opportunitiesCmts?.length && (
                  <div className={styles.userCommentArea}>
                    <p className={styles.userNameTitle}>
                      {capitalizeFirstLetter(
                        !!opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] ? 
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] :
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['user_name']
                      )} 
                        {" "} 
                          <span className={styles.cmtTimeStamp}>{opportunitiesCmts[opportunitiesCmts?.length - 1]['updated_humanTime']}</span> </p>
                    <p className="pt_4 pb_4 ">{opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_text']}</p>
                  </div>
                )
              }
          </>


          <div className={styles.sectionWrapper}>
            <p className={styles.sectionTitle}>{lang === 'fi' ? finalTranslations?.threatsCommentSection?.fi : finalTranslations?.threatsCommentSection?.en}</p>
            <p
              className={styles.commentsViewText}
              onClick={() =>{
                setCommentTopic('Threats');
                openCommentsModalHandle();
              }}
            >
              <span className={clsx(styles.chatIcon, 'af-custom-chat')}></span>
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>

          <>
              {
                threatsCmts && !!threatsCmts?.length && (
                  <div className={styles.userCommentArea}>
                    <p className={styles.userNameTitle}>
                      {capitalizeFirstLetter(!!opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] ? 
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] :
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['user_name'])} 
                        {" "} 
                        <span className={styles.cmtTimeStamp}>{threatsCmts[threatsCmts?.length - 1]['updated_humanTime']}</span> </p>
                    <p className="pt_4 pb_4 ">{threatsCmts[threatsCmts?.length - 1]?.['comment_text']}</p>
                  </div>
                )
              }
          </>



          <div className={styles.sectionWrapper}>
            <p className={styles.sectionTitle}>{lang === 'fi' ? finalTranslations?.actionsCommentSection?.fi : finalTranslations?.actionsCommentSection?.en}</p>
            <p
              className={styles.commentsViewText}
              onClick={() => {
                setCommentTopic('Actions');
                openCommentsModalHandle();
              }}
            >
              <span className={clsx(styles.chatIcon, 'af-custom-chat')}></span>
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>
          <>
              {
                actionsCmts && !!actionsCmts?.length && (
                  <div className={styles.userCommentArea}>
                    <p className={styles.userNameTitle}>
                      {capitalizeFirstLetter(!!opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] ? 
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_name'] :
                        opportunitiesCmts[opportunitiesCmts?.length - 1]?.['user_name'])} 
                        {" "} 
                        <span className={styles.cmtTimeStamp}>{actionsCmts[actionsCmts?.length - 1]['updated_humanTime']}</span> </p>
                    <p className="pt_4 pb_4 ">{actionsCmts[actionsCmts?.length - 1]?.['comment_text']}</p>
                  </div>
                )
              }
          </>

        </div>
      </div>
      <CommentsModal
        // commentsModalSubmit={closeCommentsModalHandle}
        commentsModal={openCommentsModal}
        commentTopic={commentTopic}
        commentsModalClose={closeCommentsModalHandle}
        gid={gid} 
        rid={rid} 
        pid={pid}
        lang={lang}
        phenomenon={phenomenon}
        cmts={ !!commentTopic && (commentTopic === 'Opportunities' ? opportunitiesCmts : (commentTopic === 'Actions' ? actionsCmts : threatsCmts))}
      />
    </>
  );
};

export default Comments;
