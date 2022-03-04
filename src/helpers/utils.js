import {finalTranslations} from '../localTranslation'
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function capitalizeFirstLetter(string) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}


export const translatePhenomenonAlias = (phenomenon, lang) => {
  let translationTitle = ""
  if (phenomenon?.["content-type-alias"] === "rising") {
    translationTitle= lang === 'fi' ? finalTranslations?.rising?.fi : finalTranslations?.rising?.en
  } else if (phenomenon?.["content-type-alias"] === "weaksignal") {
    translationTitle = lang === 'fi' ? finalTranslations?.weaksignal?.fi : finalTranslations?.weaksignal?.en
  } else if (phenomenon?.["content-type-alias"] === "summary") {
    translationTitle = lang === 'fi' ? finalTranslations?.summary?.fi : finalTranslations?.summary?.en
  } else if (phenomenon?.["content-type-alias"] === "cooling") {
    translationTitle = lang === 'fi' ? finalTranslations?.cooling?.fi : finalTranslations?.cooling?.en
  } else if (phenomenon?.["content-type-alias"] === "wildcard") {
    translationTitle = lang === 'fi' ? finalTranslations?.wildcard?.fi : finalTranslations?.wildcard?.en
  } else {
    translationTitle = lang === 'fi' ? finalTranslations?.undefined?.fi : finalTranslations?.undefined?.en
  }
  
  return {
    translationTitle
  };
};

export const translateCommentSections = (section, lang) => {
  let translationTitle = ""
  if (section === "Actions") {
    translationTitle= lang === 'fi' ? finalTranslations?.actionsCommentSection?.fi : finalTranslations?.actionsCommentSection?.en
  } else if (section === "Opportunities") {
    translationTitle = lang === 'fi' ? finalTranslations?.opportunitiesCommentSection?.fi : finalTranslations?.opportunitiesCommentSection?.en
  } else if (section === "Threats") {
    translationTitle = lang === 'fi' ? finalTranslations?.threatsCommentSection?.fi : finalTranslations?.threatsCommentSection?.en
  }
  return {
    translationTitle
  };
}