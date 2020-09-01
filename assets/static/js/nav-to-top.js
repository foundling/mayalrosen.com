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
    if (aboveFold && navToTopButton.classList.contains('hidden')) {
      navToTopButton.classList.remove('hidden')
    } else if (!aboveFold && !navToTopButton.classList.contains('hidden')) {
      navToTopButton.classList.add('hidden')
    } 
  }

}

document.addEventListener('scroll', showOrHideNavToTop)
