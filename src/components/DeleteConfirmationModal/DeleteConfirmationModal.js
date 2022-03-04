import React, {useContext} from "react";
import { Modal, paddingModalStyles } from '@sangre-fp/ui'
import { requestTranslation } from '@sangre-fp/i18n'
import {commentingApi} from '../../helpers/commentingFetcher'
import { finalTranslations } from "../../localTranslation";
import useSWR, { useSWRConfig } from 'swr'
import { getRadar, getPhenomenaTypes } from '@sangre-fp/connectors/drupal-api';
import radarDataApi from '@sangre-fp/connectors/radar-data-api';
import {getPhenomena} from '../../helpers/phenomenonFetcher'
import { getUserId } from '@sangre-fp/connectors/session'
import { ACTIONS } from '../../store/Actions'
import {DataContext} from '../../store/GlobalState'
import clsx from "clsx";
import styles from './DeleteConfirmationModal.module.css'
const DeleteConfirmationModal = ({
  isConfirmModalOpened,
  handleCloseConfirmModal,
  data,
  handleCloseModal,
  lang
}) => {
  const { state: {cmtsData}, dispatch } = useContext(DataContext)

  const multiFetchersRadars = async (radarId) => {
    const [getRadar_radarDataApi, getRadar_drupal_api] = await Promise.all([
      radarDataApi.getRadar(radarId),
      getRadar(radarId)
    ])

    const phenomenaIds = !!getRadar_radarDataApi?.data?.phenomena.length && getRadar_radarDataApi?.data?.phenomena.map(p => {
      return p.id
    })
    const group  = 
       getRadar_drupal_api?.group?.id

    const [getPhenomena_helpers, getPhenomenaTypes_drupal_api] = await Promise.all([
          getPhenomena({'phenomena': phenomenaIds, undefined, groups: [0, group], page: 0, size: phenomenaIds?.length || 10}),
          getPhenomenaTypes(group || 0)
        ])

        let phenonmena = []
        /* eslint-disable */
        getPhenomena_helpers?.result.map((phenonmenon) => {
          /* eslint-disable */
          getPhenomenaTypes_drupal_api?.map((type) => {
              if (String(phenonmenon?.content?.type) === String(type?.id)) {
                phenonmenon['content-type-alias'] = type.alias
                phenonmenon['content-type-title'] = type.title
                /* eslint-disable */
                if (String(phenonmenon?.content?.type).includes('fp:doc-types')) {
                    const nameCustomType = String(phenonmenon?.content?.type).split('/')[3]
                    phenonmenon['color'] = String(type?.style?.color)
                } else {
                    phenonmenon['color'] = 'none'
                }
                phenonmena?.push(phenonmenon)
              }
          })
      })

      !!getRadar_radarDataApi?.data.phenomena.length && getRadar_radarDataApi?.data.phenomena
        .map((phen) => {
          phenonmena.map((phe => {
            if(phen.id === phe.id) {
              phe['sectorId'] = phen['sectorId']
            }
          }))
          
        })

      !!phenonmena?.length && phenonmena.map(phenomenon => {
        let iconClassName = ''
        let backgroundColor = ''
        if(String(phenomenon?.['color']) === 'none'){
          if(phenomenon?.['content-type-alias'] === 'rising'){
            iconClassName = 'rising'
          } 
          else if(phenomenon?.['content-type-alias'] === 'weaksignal'){
            iconClassName = 'weaksignal'
          }
          else if (phenomenon?.['content-type-alias'] === 'summary'){
            iconClassName = 'summary'
          }
          else if (phenomenon?.['content-type-alias'] === 'cooling'){
            iconClassName = 'cooling'
          }
          else if (phenomenon?.['content-type-alias'] === 'wildcard'){
            iconClassName = 'wildcard'
          }
          else {
            iconClassName = 'undefined'
          }
        } else {
          iconClassName = 'undefined'
          backgroundColor = phenomenon?.['color']
        }

        phenomenon['iconClassName'] = iconClassName
        phenomenon['backgroundColor'] = backgroundColor

        getRadar_radarDataApi?.data.sectors
          .map((sector) => {
            if(sector.id === phenomenon.sectorId) {
              phenomenon['sector_title'] = sector.title
            }
          })
      })
    return [phenonmena, group]
  }
  
  const userId = getUserId()

  const radarIdEditing = data?.entity_uri.split('/')[3]
  const {data: getDataFromConnectors} 
    = useSWR( (radarIdEditing && userId) 
      ? [ 'getDataFromConnectors', radarIdEditing, userId ] : null, 
        (url, node_id) => multiFetchersRadars(node_id),
        { refreshInterval: 4000 }
        // {
        //   // compare: (a, b) => {
        //   //   return (a === b)
        //   // },
        //   // serialize: true
        // }
    )

  const {data: getAllCommentsByRadarId} 
    = useSWR( (!!getDataFromConnectors?.length && getDataFromConnectors[1] && userId) 
      ? ['getAllCommentsByRadarId', JSON.stringify(getDataFromConnectors[1]) , radarIdEditing, userId] : null, 
        async(url, group, radarIdEditing) => {
      const res = await commentingApi.getAllComments(group, radarIdEditing)
      return res.data
    },
    { refreshInterval: 4000 }
    // {
    // //   compare: (a, b) => {
    // //     return (a === b)
    // //   },
    //   // serialize: true
    // }
  )

  const { mutate } = useSWRConfig()

  const handleYesRemoveCmtBtn = async () => {
    // setIsOpenModal(() => false)
    // gid, radarId, pid, section
    const groupIdEditing = data?.entity_uri.split('/')[1]
    const radarIdEditing = data?.entity_uri.split('/')[3]
    const phenIdIdEditing = data?.entity_uri.split('/')[5]
    const sectionNameIdEditing = data?.entity_uri.split('/')[6]
    const cmtId = data?.entity_uri.split('/')[7]

    mutate(['getAllCommentsByRadarId', JSON.stringify(getDataFromConnectors[1]) , radarIdEditing, userId], 
      getAllCommentsByRadarId, false)

    await commentingApi.deleteComment( 
      groupIdEditing,
      radarIdEditing,
      phenIdIdEditing,
      sectionNameIdEditing,
      cmtId
    )

    mutate(['getAllCommentsByRadarId', JSON.stringify(getDataFromConnectors[1]) , radarIdEditing, userId])


    handleCloseConfirmModal(false)
    handleCloseModal()
    dispatch({
      type: ACTIONS.CMTSDATA,
      payload: !!cmtsData?.length ? cmtsData?.filter(cmt => cmt?.comment_id !== data?.comment_id) : []
    })
  }

  const handleCancelRemoveBtn = () => {
    // setIsOpenModal(() => false)
    handleCloseConfirmModal(false)
  }

  return (
    <Modal
      onRequestClose={handleCancelRemoveBtn}
      isOpen={isConfirmModalOpened}
      contentLabel="radar-modal"
      ariaHideApp={false}
      style={paddingModalStyles}
    >
      <div className={clsx(styles.modalWrapper, "confirmation-modal-content")}>
        <h3 className={clsx(styles.h3Title, "confirmation-modal-title")}>
        {lang === 'fi' ? finalTranslations?.removeCommentConfirmation?.fi : finalTranslations?.removeCommentConfirmation?.en}
        </h3>
        <div className={clsx(styles.pb_39, "confirmation-modal-actions")}>
          <button
            onClick={handleCancelRemoveBtn}
            className={clsx(styles.btnStyle, "btn btn-sm btn-plain-gray")}
          >
           {lang === 'fi' ? finalTranslations?.removeCommentNoOption?.fi : finalTranslations?.removeCommentNoOption?.en}
          </button>
          <button
            onClick={handleYesRemoveCmtBtn}
            className={clsx(styles.btnStyle, "btn btn-sm btn-primary")}
            // onClick={deletePublicLink}
          >
           {lang === 'fi' ? finalTranslations?.removeCommentYesOption?.fi : finalTranslations?.removeCommentYesOption?.en}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
