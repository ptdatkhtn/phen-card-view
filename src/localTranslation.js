import {globalTranslations} from '@sangre-fp/i18n'

export const localTranslations = {
    opportunitiesCommentSection: {
        en: 'Opportunities',
        fi: 'Mahdollisuudet'
    },
    threatsCommentSection: {
        en: 'Threats',
        fi: 'Uhat'
    },
    actionsCommentSection: {
        en: 'Actions',
        fi: 'Toimenpiteet'
    },
    commentViewBtn: {
        en: 'Comment / View',
        fi: 'Kommentoi / Näytä'
    },
    latestNewsTitle: {
        en: 'Latest News',
        fi: 'Tuoreet uutiset (engl.)'
    },
    clearRatings: {
        en: 'Clear Ratings',
        fi: 'Tyhjennä'
    },
    relatedPhenomenaSection: {
        en: 'Related phenomena',
        fi: 'Liittyvät ilmiöt'
    },
    charactersRemainingText: {
        'en': 'characters remaining',
        'fi': 'merkkiä jäljellä'
    },
    submitCommentModal: {
        'en': 'SUBMIT',
        'fi':'LÄHETÄ'
    }
}

export const finalTranslations = { ...globalTranslations, ...localTranslations}