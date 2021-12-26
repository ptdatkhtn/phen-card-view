import React, { useState, useEffect } from "react"

import { VOTING_STATUS } from "../../constants"
import {
  Container,
  ButtonGroup,
  VoteResult,
  VoteAmountItem,
  ButtonVoteWrapper,
  ButtonVote,
  TriangleUp,
  TriangleDown,
  LineUp,
  LineDown,
} from "./styles"
import { votingApi} from '../../helpers/fetcher'

const VotingRadar = ({gid, rid, pid}) => {
  const [amountUps, setAmountUps] = useState(0)
  const [amountDowns, setAmountDowns] = useState(0)
  const [userVotingSelection, setUserVotingSelection] = useState(VOTING_STATUS.none)
  const [error, setError] = useState(null)
  const [userVotedAmount, setUserVotedAmount] = useState(0)

  //get radar phenomenon vote for current user
  const getVotesData  = async() => {
    const [{
      data: {
        plus_votes: userPlusVotes = 0,
        minus_votes: userMinusVotes = 0
      } = {}
    }, {
      data: {
        minus_votes: allMinusVotes = 0,
        plus_votes: allPlusVotes = 0
      }
    } = {}] = await Promise.all([ votingApi.getVote(gid, rid, pid), votingApi.getVotes(gid, rid, pid) ])

    if (userPlusVotes > 0) {
      setUserVotingSelection(VOTING_STATUS.up)
    } else if (userMinusVotes > 0) {
      setUserVotingSelection(VOTING_STATUS.down)
    } else {
      setUserVotingSelection(VOTING_STATUS.none)
    }

    setAmountUps(allPlusVotes)
    setAmountDowns(allMinusVotes)
  }

  const onUpHandler = async() => {
    try {
      if (String(userVotingSelection)  === String(VOTING_STATUS.up)) {
        setUserVotingSelection(VOTING_STATUS.none)
        setAmountUps(amountUps => amountUps - 1)

        await votingApi.deleteVote(gid, rid, pid)
      } else if (String(userVotingSelection)  === String(VOTING_STATUS.none)) {
        setUserVotingSelection(VOTING_STATUS.up)
        setAmountUps(amountUps => amountUps + 1)

        await votingApi.addVote(gid, rid, pid, {up: true})
      } else {
        setUserVotingSelection(VOTING_STATUS.up)
        setAmountUps(amountUps => amountUps + 1)
        setAmountDowns(amountDowns => amountDowns - 1)

        await votingApi.addVote(gid, rid, pid, {up: true})
      }

    } catch (error) {
      setError(error)
    }
  }

  const onDownHandler = async() => {
    try {
      if (String(userVotingSelection)  === String(VOTING_STATUS.down)) {
        setUserVotingSelection(VOTING_STATUS.none)
        setAmountDowns(amountDowns => amountDowns - 1)

        await votingApi.deleteVote(gid, rid, pid)
      } else if (String(userVotingSelection)  === String(VOTING_STATUS.none)) {
        setUserVotingSelection(VOTING_STATUS.down)
        setAmountDowns(amountDowns => amountDowns + 1)

        await votingApi.addVote(gid, rid, pid, {up: false})
      } else {
        setUserVotingSelection(VOTING_STATUS.down)
        setAmountUps(amountUps => amountUps - 1)
        setAmountDowns(amountDowns => amountDowns + 1)

        await votingApi.addVote(gid, rid, pid, {up: false})
      }
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    try {
        getVotesData()
    } catch (e) {
        setError(e)
    }
  }, [])

  return (
    <>
      <Container>
        <ButtonGroup>
          <ButtonVoteWrapper>
            <VoteAmountItem>{amountUps}</VoteAmountItem>
            <ButtonVote
              className={userVotingSelection === VOTING_STATUS.up ? "active" : ""}
              role="button"
              onClick={onUpHandler}
            >
              <TriangleUp></TriangleUp>
              <LineUp></LineUp>
            </ButtonVote>
          </ButtonVoteWrapper>
          <ButtonVoteWrapper>
            <VoteAmountItem>{amountDowns}</VoteAmountItem>
            <ButtonVote
              className={userVotingSelection === VOTING_STATUS.down ? "active" : ""}
              role="button"
              onClick={onDownHandler}
            >
              <LineDown></LineDown>
              <TriangleDown></TriangleDown>
            </ButtonVote>
          </ButtonVoteWrapper>
        </ButtonGroup>
        <VoteResult>{amountUps - amountDowns}</VoteResult>
      </Container>
    </>
  );
};

export default VotingRadar
