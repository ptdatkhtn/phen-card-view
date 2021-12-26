import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import CommentsModal from "../CommentsModal";

const Comments = ({gid, rid, pid}) => {
  const [openCommentsModal, setOpenCommentsModal] = useState(false);
  const [commentTopic, setCommentTopic] = useState('')
  const openCommentsModalHandle = () => {
    setOpenCommentsModal(true);
  };

  const closeCommentsModalHandle = () => {
    setOpenCommentsModal(false);
  };
  return (
    <>
      <div className="mt-8">
        <h3 className="text-h3-title font-bold mb-4">Comments</h3>
        <div>
          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="font-bold text-p-desc">Opportunities</p>
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
              Comment / View
            </p>
          </div>
          <div className="pt-4 pb-2 px-6 text-crowdsourced">
            <p className="font-bold">Harry 25.12.2021 20:52</p>
            <p className="my-4 pt-1 ">This is a comment111</p>
          </div>
          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="text-p-desc font-bold">Threats</p>
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
              Comment / View
            </p>
          </div>
          <div className="pt-4 pb-2 px-6 text-crowdsourced">
            <p className="font-bold">Harry 25.12.2021 20:52</p>
            <p className="my-4 pt-1 ">This is a comment111</p>
          </div>
          <div className="bg-lightgray flex items-center justify-between py-5 pr-4 pl-6 border-white border-solid border-b-2 text-crowdsourced">
            <p className="text-p-desc font-bold">Actions</p>
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
              Comment / View
            </p>
          </div>
          <div className="pt-4 pb-2 px-6 text-crowdsourced">
            <p className="font-bold">Harry 25.12.2021 20:52</p>
            <p className="my-4 pt-1 ">This is a comment111</p>
          </div>
        </div>
      </div>
      <CommentsModal
        commentsModalSubmit={closeCommentsModalHandle}
        commentsModal={openCommentsModal}
        commentTopic={commentTopic}
        commentsModalClose={closeCommentsModalHandle}
        gid={gid} 
        rid={rid} 
        pid={pid}
      />
    </>
  );
};

export default Comments;
