import React, { useContext, useState, useEffect, useMemo } from "react";
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
      <div className="mt-8">
        <h3 className="text-h3-title font-bold mb-4">{lang === 'fi' ? finalTranslations?.commenting?.fi : finalTranslations?.commenting?.en}</h3>
        <div>
          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="font-bold text-p-desc">{lang === 'fi' ? finalTranslations?.opportunitiesCommentSection?.fi : finalTranslations?.opportunitiesCommentSection?.en}</p>
            <p
              className="text-blue font-medium cursor-pointer flex items-center"
              onClick={() => {
                  setCommentTopic('Opportunities');
                  openCommentsModalHandle();
              }}
            >
              <FontAwesomeIcon
                icon={faCommentAlt}
                className="text-lead-text mr-3 mt-1"
              />
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>
          <>
              {
                opportunitiesCmts && !!opportunitiesCmts?.length && (
                  <div className="pt-4 pb-2 px-6 text-crowdsourced">
                    <p className="font-bold">
                      {capitalizeFirstLetter(opportunitiesCmts[opportunitiesCmts?.length - 1]?.['user_name'])} 
                        {" "} 
                          {opportunitiesCmts[opportunitiesCmts?.length - 1]['updated_humanTime']} </p>
                    <p className="my-4 pt-1 ">{opportunitiesCmts[opportunitiesCmts?.length - 1]?.['comment_text']}</p>
                  </div>
                )
              }
          </>


          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="text-p-desc font-bold">{lang === 'fi' ? finalTranslations?.threatsCommentSection?.fi : finalTranslations?.threatsCommentSection?.en}</p>
            <p
              className="text-blue font-medium cursor-pointer flex items-center"
              onClick={() =>{
                setCommentTopic('Threats');
                openCommentsModalHandle();
              }}
            >
              <FontAwesomeIcon
                icon={faCommentAlt}
                className="text-lead-text mr-3 mt-1"
              />
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>

          <>
              {
                threatsCmts && !!threatsCmts?.length && (
                  <div className="pt-4 pb-2 px-6 text-crowdsourced">
                    <p className="font-bold">
                      {capitalizeFirstLetter(threatsCmts[threatsCmts?.length - 1]?.['user_name'])} 
                        {" "} 
                          {threatsCmts[threatsCmts?.length - 1]['updated_humanTime']} </p>
                    <p className="my-4 pt-1 ">{threatsCmts[threatsCmts?.length - 1]?.['comment_text']}</p>
                  </div>
                )
              }
          </>



          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="text-p-desc font-bold">{lang === 'fi' ? finalTranslations?.actionsCommentSection?.fi : finalTranslations?.actionsCommentSection?.en}</p>
            <p
              className="text-blue font-medium cursor-pointer flex items-center"
              onClick={() => {
                setCommentTopic('Actions');
                openCommentsModalHandle();
              }}
            >
              <FontAwesomeIcon
                icon={faCommentAlt}
                className="text-lead-text mr-3 mt-1"
              />
              {lang === 'fi' ? finalTranslations?.commentViewBtn?.fi : finalTranslations?.commentViewBtn?.en}
            </p>
          </div>
          <>
              {
                actionsCmts && !!actionsCmts?.length && (
                  <div className="pt-4 pb-2 px-6 text-crowdsourced">
                    <p className="font-bold">
                      {capitalizeFirstLetter(actionsCmts[actionsCmts?.length - 1]?.['user_name'])} 
                        {" "} 
                          {actionsCmts[actionsCmts?.length - 1]['updated_humanTime']} </p>
                    <p className="my-4 pt-1 ">{actionsCmts[actionsCmts?.length - 1]?.['comment_text']}</p>
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
