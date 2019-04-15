const USER_SCROLL = document.querySelector('.contentWrap')
const SCROLL_CLICK = document.querySelector('.pageArrow')
const LOGO_CLICK = document.querySelector('.logo')
let CURRENT_SCENE = document.querySelector('.pageShow')

setTimeout(function(){
  USER_SCROLL.addEventListener('mousewheel', pageScroll);
  USER_SCROLL.addEventListener('DOMMouseScroll', pageScroll);
  USER_SCROLL.addEventListener('wheel', pageScroll);
  SCROLL_CLICK.addEventListener('click', clickScroll);
  LOGO_CLICK.addEventListener('click', pageScrollTop);
},10)

function pageScroll(e){
  if (e.type == "wheel") supportsWheel = true;
  else if (supportsWheel) return;

  let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  USER_SCROLL.removeEventListener('mousewheel', pageScroll);
  USER_SCROLL.removeEventListener('DOMMouseScroll ', pageScroll);
  USER_SCROLL.removeEventListener('wheel', pageScroll);

  let currentScene = CURRENT_SCENE.getAttribute('data-scene')
  currentScene = Number(currentScene)
  let lastSceneNum = CURRENT_SCENE.parentNode.children.length
  if(delta >= 0){
    currentSceneSetNext(currentScene , lastSceneNum)
  }else{
    currentSceneSetPrev(currentScene)
  }
}

function currentSceneSetNext(currentScene , lastSceneNum){
  if(currentScene !== lastSceneNum){
    CURRENT_SCENE.classList.remove('pageShow')
    CURRENT_SCENE.nextElementSibling.classList.add('pageShow')
    CURRENT_SCENE = document.querySelector('.pageShow')
    if(currentScene === lastSceneNum - 1 ){
      document.querySelector('.pageArrow').style.display = "none"
    }
  }
  setTimeout(function(){
    USER_SCROLL.addEventListener('mousewheel', pageScroll);
    USER_SCROLL.addEventListener('DOMMouseScroll', pageScroll);
    USER_SCROLL.addEventListener('wheel', pageScroll);
  },1000)
}

function currentSceneSetPrev(currentScene){
  if(currentScene !== 1){
    CURRENT_SCENE.classList.remove('pageShow')
    CURRENT_SCENE.previousElementSibling.classList.add('pageShow')
    CURRENT_SCENE = document.querySelector('.pageShow')
    document.querySelector('.pageArrow').style.display = "block"
  }
  setTimeout(function(){
    USER_SCROLL.addEventListener('mousewheel', pageScroll);
    USER_SCROLL.addEventListener('DOMMouseScroll', pageScroll);
    USER_SCROLL.addEventListener('wheel', pageScroll);
  },1000)
}

function clickScroll(e){
  let currentScene = CURRENT_SCENE.getAttribute('data-scene')
  currentScene = Number(currentScene)
  let lastSceneNum = CURRENT_SCENE.parentNode.children.length
  currentSceneSetNext(currentScene , lastSceneNum)
}

function pageScrollTop(e){
  const firstScene = CURRENT_SCENE.parentNode.firstElementChild
  CURRENT_SCENE.classList.remove('pageShow')
  firstScene.classList.add('pageShow')

  CURRENT_SCENE = document.querySelector('.pageShow')
}