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
    },
    editCommentTitle: {
        'en': 'Edit Comment',
        'fi': 'Muokkaa kommenttia'
    },
    cancel: {
        'en': 'CANCEL',
        'fi': 'PERUUTA'
    },
    save: {
        'en': 'SAVE',
        'fi': 'TALLENNA'
    },
    removeComment: {
    'en': 'REMOVE COMMENT',
    'fi': 'POISTA KOMMENTTI'
    },
    removeCommentConfirmation: {
        en:'Are you sure you want to remove your comment?',
        fi: 'Haluatko varmasti poistaa kommenttisi?'
    },
    removeCommentNoOption: {
        en: 'NO, KEEP IT',
        fi: 'EN SITTENKÄÄN'
    },
    removeCommentYesOption: {
        en: 'YES',
        fi: 'KYLLÄ'
    },
    editPhenomenon: {
        en: 'Edit Phenomenon',
        fi: 'Muokkaa ilmiötä'
    },
    editted: {
        en: 'Edited',
        fi: 'Päivitetty'
    }
}

export const finalTranslations = { ...globalTranslations, ...localTranslations}