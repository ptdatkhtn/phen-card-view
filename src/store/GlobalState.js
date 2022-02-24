import React, { createContext, useReducer } from 'react'
import reducers from './Reducers.js'
import {commentingApi} from '../helpers/commentingFetcher'
import {ACTIONS} from './Actions'
import { getUserId } from '@sangre-fp/connectors/session'

const initialState = {
    cmtsData: [],
}

export const DataContext = createContext(initialState) 

export const DataProvider = ({children, gid, rid, pid}) => {
    const [state, dispatch] = useReducer(reducers, initialState)

    React.useEffect(() => {
        const fetchCmts = async() => {
          const cmtsRes = await commentingApi.getAllCommentsByPhenId(gid, rid, pid)
          console.log('11', gid, rid, pid)
          const temp1 = !!cmtsRes?.data ? [...cmtsRes?.data] : []
          !!temp1?.length && temp1?.map((cmt) => {
            if (getUserId().toString() === cmt.uid.toString()) {
                cmt['isAuthor'] = true
              } else {
                cmt['isAuthor'] = false
              }
          })
          
          dispatch({
            type: ACTIONS.CMTSDATA,
            payload: cmtsRes?.data.sort(function(x, y){
                return x.created_timestamp - y.created_timestamp;
            })
          })
        }
        try {
          !!pid && !!rid && fetchCmts()
        } catch (error) {
          
        }
      }, [gid, rid, pid, dispatch])

    return(
        /* eslint-disable */
        <>
            <DataContext.Provider value={{state, dispatch}}>
                {children}
            </DataContext.Provider>
        </>
    )
}

