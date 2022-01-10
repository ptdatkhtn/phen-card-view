import React, { useState, useEffect } from "react";
import { votingApi } from "../../helpers/fetcher";
import { getRadar } from '@sangre-fp/connectors/drupal-api';
import {finalTranslations} from '../../localTranslation'

import Slider from "../Slider/Slider";
import {
  RatingWidget,
  IconLink,
  CloseIcon,
  IconName,
  WidgetHeader,
  RatingItems,
} from "./styles";

const Rating = ({ 
  gid, 
  rid, 
  pid,
  lang
}) => {
  const [isSliding, setIsSliding] = useState(false);
  const [sliderXVal, setSliderXVal] = useState(50);
  const [sliderYVal, setSliderYVal] = useState(50);
  const [error, setError] = useState(null);
  const [mouseState, setMouseState] = useState(null);
  const [isFlip, setIsFlip] = React.useState(false)

  const isEmpty = (obj) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  };

  const onClickSetMouseState = (state) => {
    if (state === "up") {
      setMouseState("up");
    } else {
      setMouseState("down");
    }
  };

  const onChangeXValue = async (e) => {
    setIsSliding(true);
    setSliderXVal(e.target.value);
  };

  const onChangeYValue = async (e) => {
    setIsSliding(true);
    setSliderYVal(e.target.value);
  };

  const clearRatings = async () => {
    setIsSliding(false);
    setSliderXVal(50);
    setSliderYVal(50);
    setError(null)
    await votingApi.clearRatingsCurrentUser(gid, rid, pid);
  };
  const [axisXMax, setaxisXMax] = useState('')
  const [axisXMin, setaxisXMin] = useState('')
  const [axisXTitle, setaxisXTitle] = useState('')
  const [axisYMax, setaxisYMax] = useState('')
  const [axisYMin, setaxisYMin] = useState('')
  const [axisYTitle, setaxisYTitle] = useState('')

  const fetchRatingCurrentUser = async () => {
    
    try {
      const  {data}  = await votingApi.getRatingsCurrentUser(gid, rid, pid)
      if (!isEmpty(data)) {
        const  avgX = data[`/${gid}/radar/${rid}/phenomenon/${pid}/x`].percentage
        const avgY = data[`/${gid}/radar/${rid}/phenomenon/${pid}/y`].percentage
        setSliderXVal(Number(avgX))
        setSliderYVal(Number(avgY))
        setIsSliding(true)
        setError(null)
      }
    } catch(e) {
      setError(e)
    }
  }

  const addRating = async() => {
    try {
      if (!isFlip) {
        await Promise.all([
          votingApi.addRatingCurrentUser(gid, rid, pid, 'x', { percentage: sliderXVal }),
          votingApi.addRatingCurrentUser(gid, rid, pid, 'y', { percentage: sliderYVal })
        ])
      } else {
        await Promise.all([
          votingApi.addRatingCurrentUser(gid, rid, pid, 'x', { percentage: sliderYVal }),
          votingApi.addRatingCurrentUser(gid, rid, pid, 'y', { percentage: sliderXVal })
        ])
      }
      
    } catch(e) {
      setError(e)
    }
  }

  useEffect(() => {
    if (mouseState === 'up') {
      addRating();
    }
  }, [mouseState])


  useEffect(() => {
    (async () => {
      const isFlipAxis = await votingApi.getFlipAxisAfterSaved(gid, rid)
      setIsFlip(isFlipAxis.data?.isFlip)
      const {data: ratings} = await votingApi.getRatingsCurrentUser(gid, rid, pid)
      if (!isEmpty(ratings)) {
        if (!isFlipAxis.data?.isFlip) {
          const avgX = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/x`].percentage
          const avgY = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/y`].percentage
          setSliderXVal(Number(avgX))
          setSliderYVal(Number(avgY))
          setIsSliding(true)
          setError(null)
        } else {
          const avgX = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/y`].percentage
          const avgY = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/x`].percentage
          setSliderXVal(Number(avgX))
          setSliderYVal(Number(avgY))
          setIsSliding(true)
          setError(null)
        }
        // const avgX = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/x`].percentage
        // const avgY = ratings[`/${gid}/radar/${rid}/phenomenon/${pid}/y`].percentage
        // setSliderXVal(Number(avgX))
        // setSliderYVal(Number(avgY))
        // setIsSliding(true)
        // setError(null)
      }

      const {
        axisXMax,
        axisXMin,
        axisXTitle,
        axisYMax,
        axisYMin,
        axisYTitle,
      } = await getRadar(rid)
      setaxisXMax(axisXMax)
      setaxisXMin(axisXMin)
      setaxisXTitle(axisXTitle)
      setaxisYMax(axisYMax)
      setaxisYMin(axisYMin)
      setaxisYTitle(axisYTitle)

    })()
  }, [])

  return (
    <>
      <RatingWidget>
        <WidgetHeader>
          <h3 className="text-h3-title font-bold">{lang === 'fi' ? finalTranslations?.rating?.fi : finalTranslations?.rating?.en}</h3>
          <IconLink>
            <CloseIcon></CloseIcon>
            <IconName onClick={clearRatings}>{lang === 'fi' ? finalTranslations?.clearRatings?.fi : finalTranslations?.clearRatings?.en}</IconName>
          </IconLink>
        </WidgetHeader>
        <RatingItems>
          <Slider
            isSliding={isSliding}
            axisName={axisXTitle}
            leftValue={axisXMin}
            rightValue={axisXMax}
            sliderVal={sliderXVal}
            onChangeValue={onChangeXValue}
            onClickSetMouseState={onClickSetMouseState}
          />
          <Slider
            isSliding={isSliding}
            axisName={axisYTitle}
            leftValue={axisYMin}
            rightValue={axisYMax}
            sliderVal={sliderYVal}
            onChangeValue={onChangeYValue}
            onClickSetMouseState={onClickSetMouseState}
          />
        </RatingItems>
      </RatingWidget>
    </>
  );
};

export default Rating;
