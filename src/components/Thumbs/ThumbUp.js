import React, { useState } from "react"
import clsx from "clsx"
import { MaterialIcon } from "@sangre-fp/ui"
import styles from "./ThumbUp.module.css"
import { votingApi } from "../../helpers/fetcher";

const ThumbUp = ({gid, rid, pid, cid, view, size}) => {
  const [liked, setLiked] = useState(false)
  const [amountLikes, setAmountLikes] = useState(0)
  const [error, setError] = useState(null)

  const fetchStatusLikeOfCurrentUser = async () => {
    try {
      const {data: { plus_votes }} = await votingApi.getLike(gid, rid, pid, cid);
      setLiked(Number(plus_votes) === 1)
    } catch (error) {
      setError(error)
    }
  }

  const fetchAllLikes = async () => {
    try {
      const {data: { plus_votes }} = await votingApi.getLikes(gid, rid, pid, cid);
      setAmountLikes(plus_votes ? plus_votes : 0)
    } catch (error) {
      setError(error)
    }
  }

  const toggleLikedBtn = async () => {
    try {
      if (liked === true) {
        setLiked(false)
        setAmountLikes(amountLikes => amountLikes - 1)
        await votingApi.addLike(gid, rid, pid, cid, {up: false})
      } else {
        setLiked(true)
        setAmountLikes(amountLikes => amountLikes + 1)
        await votingApi.addLike(gid, rid, pid, cid, {up: true})
      }
    } catch (error) {
      setError(error)
    }
  }

  React.useEffect(() => {
    try {
      fetchAllLikes()
      fetchStatusLikeOfCurrentUser()
    } catch (e) {
      setError(e)
    }
  }, [])


  const wrapperThumbUp = {
    height: size ? `${size}px` : '24px',
  }

  return (
    <div className={styles.VotingLike_Wrapper} style={wrapperThumbUp}>
        {
          view === 'thumb_up' && <MaterialIcon
          className={clsx(styles.ThumbUp_Btn, liked ? styles.active : "" )}
          color={liked ? "black" : "#808080"}
          onClick={toggleLikedBtn}
          fontSize={`${size}px`}
        >
          thumb_up
        </MaterialIcon>
        }
        {
          amountLikes > 0 && view === 'thumb_up_results' && <MaterialIcon
          className={clsx(styles.ThumbUp_Btn, liked ? styles.active : "")}
          fontSize={`${size}px`}
          color={liked ? "black" : "#808080"}
          onClick={toggleLikedBtn}
        >
          thumb_up
        </MaterialIcon>
        }
        {
          amountLikes > 0 && view === 'thumb_up_results' &&  <span className={styles.likeAmount} >{amountLikes}</span>
        }
        {
          amountLikes > 0 && view === 'thumb_up' &&  <span className={styles.likeAmount} >{amountLikes}</span>
        }
      </div>
  );
};

export default ThumbUp

