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

const shouldShowNavToTop = () => {

  const windowTopOffset = window.pageYOffset
  const toc = document.querySelector('.table-of-contents')
  const navToTopButton = document.querySelector('.nav-to-top')
  const page = document.querySelector('.page') 

  if (toc) {

    const aboveFold = isAboveFold(toc)
    console.log(aboveFold)
    if (aboveFold && navToTopButton.classList.contains('hidden')) {
      navToTopButton.classList.remove('hidden')
    } else if (!aboveFold && !navToTopButton.classList.contains('hidden')) {
      navToTopButton.classList.add('hidden')
    } 
  }

}


document.addEventListener('scroll', shouldShowNavToTop)
