/* 
 *
 * Table of Contents & Navigation Button
 *
 * Behavior: when the user scrolls beyond the TOC, a 'to-top' button appears
 * and the table of contents shifts to a fixed position (if viewport is wide enough). 
 *
 */

// make sure to IIFE this thing

const toc = document.querySelector('.table-of-contents')

const getDistanceFromTop = (el) => {

  let dist = 0 
  let cur = el

  while (cur.nodeName !== 'BODY') {
    dist += cur.offsetTop 
    cur = cur.parentElement
  }

  return dist

}

const isAboveFold = (el) => {

  const windowTopOffset = window.pageYOffset
  const tocBottomOffset = getDistanceFromTop(el)
  return tocBottomOffset < windowTopOffset

}

const showOrHideNavToTop = () => {

  const windowTopOffset = window.pageYOffset
  const navToTopButton = document.querySelector('.nav-to-top')
  const page = document.querySelector('.page') 

  if (toc) {

    const aboveFold = isAboveFold(toc)

    if (aboveFold) {
      if (navToTopButton.classList.contains('hidden')) {
        navToTopButton.classList.remove('hidden')
        //toc.classList.add('to-the-side')
      }
    } else {
      if (!navToTopButton.classList.contains('hidden')) {
        navToTopButton.classList.add('hidden')
        //toc.classList.remove('to-the-side')
      }
    }

  }

}

showOrHideNavToTop()
document.addEventListener('scroll', showOrHideNavToTop)
