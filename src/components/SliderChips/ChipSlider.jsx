import React, { useEffect, useRef, useState } from 'react'
import './chipSlider.css'
import { chipsData } from '../../data'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export default function ChipSlider() {

  const slider = useRef(null);
  const btnLeft = useRef(null);
  const btnRight = useRef(null);
  let isDragging = false;
  
  
  useEffect(() => {
    iconVisibility()
    slider.current.addEventListener("mousemove", (drag) => {
      if(!isDragging) return;
      if(slider.current) {
        slider.current.scrollLeft -= drag.movementX
        slider.current.classList.add("dragging")
        setTimeout(() => {
          iconVisibility()
        }, 50)
      }
    })

    slider.current.addEventListener("mousedown", () => {
      isDragging = true;
    })

    document.addEventListener("mouseup", () => {
      isDragging = false;
      slider.current.classList.remove("dragging")
    })

    return () => {
      slider.current.removeEventListener("mousemove", (drag) => {
        if(!isDragging) return;
        if(slider.current) {
   
          slider.current.scrollLeft -= drag.movementX
          slider.current.classList.add("dragging")
          setTimeout(() => {
            iconVisibility()
          },50)
        }
      })
  
      slider.current.removeEventListener("mousedown", () => {
        isDragging = true;
      })
  
      document.removeEventListener("mouseup", () => {
        isDragging = false;
        slider.current.classList.remove("dragging")
      })
    }
  },[])

  const handleSlide = (direction, e) => {
    e.preventDefault()
    const scrollableWidth = slider.current.clientWidth - 150
    if(direction === "right") {
      if(slider.current) {
        slider.current.scrollLeft += scrollableWidth
        // console.log(slider.current.scrollLeft, scrollableWidth)
        setTimeout(() => {
          iconVisibility()
        }, 50)
      }
    } else {
      if(slider.current) {
        slider.current.scrollLeft -= scrollableWidth
        // console.log(slider.current.scrollLeft)
        setTimeout(() => {
          iconVisibility()
        }, 50)
      }
    }
  }

  const iconVisibility = () => {

    const scrollableLeft = Math.ceil(slider.current.scrollLeft)
    const scrollableWidth = slider.current.scrollWidth - slider.current.clientWidth
    // console.log("visi", scrollableWidth, scrollableLeft)
    btnLeft.current.style.display = scrollableLeft > 0 ? "flex" : "none"
    btnRight.current.style.display = scrollableWidth > scrollableLeft ? "flex" : "none"
  }


  return (
    <div className="chipSliderMainContainer">
        <span className="btnLeft" onClick={(e) => handleSlide("left", e)} ref={btnLeft}>
          <AiOutlineLeft size={"1.4em"}/>
        </span>
        <div className="chipSliderContainer" ref={slider}>
            {chipsData.map((data, i) => (
                <span key={i}>{data.title}</span>
            ))}
        </div>
        <span className="btnRight" onClick={(e) => handleSlide("right", e)} ref={btnRight}>
          <AiOutlineRight size={"1.4em"} />
        </span>

    </div>
  )
}


