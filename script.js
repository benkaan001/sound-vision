function play() {
  document.querySelector('.track').paused
    ? document.querySelector('.track').play()
    : document.querySelector('.track').pause();

  let wires = [
    'wire-1',
    'wire-2',
    'wire-3',
    'wire-4',
    'wire-5',
    'wire-6',
    'wire-7',
    'wire-8',
    'wire-9',
  ];

  for (let i = 0; i < wires.length; i++) {
    document.querySelector(`.${wires[i]}`).style.animationPlayState === 'paused'
      ? (document.querySelector(`.${wires[i]}`).style.animationPlayState =
          'running')
      : (document.querySelector(`.${wires[i]}`).style.animationPlayState =
          'paused');
  }
}
