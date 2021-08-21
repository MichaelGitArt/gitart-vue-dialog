import { Ref } from 'vue'

import { noScrollableParent, getScrollbarWidth } from '../helper/scroll.helper'

type ScrollParams = {
  overlay: Ref<Element | undefined>
  content: Ref<Element | undefined>
}

export const useScroll = ({
  overlay,
  content,
}: ScrollParams) => {
  let disabled = false
  let disableType: 'byEvents' | 'byOverflow' = null

  const eventListener = (event: WheelEvent) => {
    if(event.target === overlay.value
    || event.target === document.body
    || noScrollableParent(event, content.value)
    ) {
      event.preventDefault()
    }
  }

  const disableScroll = () => {
    if(disabled) {
      return
    }

    const scrollbarWidth = getScrollbarWidth()

    // The mobile has a scroll bar width of 0
    if (scrollbarWidth === 0) {
      disableType = 'byOverflow'
      document.documentElement.classList.add('overflow-y-hidden')
    } else {
      disableType = 'byEvents'
      window.addEventListener('wheel', eventListener, {
        passive: false,
      })
    }

    disabled = true
  }

  const enableScroll = () => {
    if(!disabled) {
      return
    }

    if(disableType === 'byEvents') {
      window.removeEventListener('wheel', eventListener)
    }else if (disableType === 'byOverflow') {
      document.documentElement.classList.remove('overflow-y-hidden')
    }

    disabled = false
  }

  return {
    disableScroll,
    enableScroll,
  }
}