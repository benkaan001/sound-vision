function play() {
  document.querySelector('.track').paused
    ? document.querySelector('.track').play()
    : document.querySelector('.track').pause();

  document.querySelector('.wire-1').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-1').style.animationPlayState = 'running')
    : (document.querySelector('.wire-1').style.animationPlayState = 'paused');

  document.querySelector('.wire-2').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-2').style.animationPlayState = 'running')
    : (document.querySelector('.wire-2').style.animationPlayState = 'paused');

  document.querySelector('.wire-3').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-3').style.animationPlayState = 'running')
    : (document.querySelector('.wire-3').style.animationPlayState = 'paused');

  document.querySelector('.wire-4').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-4').style.animationPlayState = 'running')
    : (document.querySelector('.wire-4').style.animationPlayState = 'paused');

  document.querySelector('.wire-5').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-5').style.animationPlayState = 'running')
    : (document.querySelector('.wire-5').style.animationPlayState = 'paused');

  document.querySelector('.wire-6').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-6').style.animationPlayState = 'running')
    : (document.querySelector('.wire-6').style.animationPlayState = 'paused');

  document.querySelector('.wire-7').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-7').style.animationPlayState = 'running')
    : (document.querySelector('.wire-7').style.animationPlayState = 'paused');

  document.querySelector('.wire-8').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-8').style.animationPlayState = 'running')
    : (document.querySelector('.wire-8').style.animationPlayState = 'paused');

  document.querySelector('.wire-9').style.animationPlayState === 'paused'
    ? (document.querySelector('.wire-9').style.animationPlayState = 'running')
    : (document.querySelector('.wire-9').style.animationPlayState = 'paused');
}
