const frame1 = document.querySelector('#frame1');
      const riverCover = document.querySelector('#cover');
      const body = document.querySelector('body');
      const sun = document.querySelector('#sun');
      const box1Scroller = scrollama();
      const wellScroller = scrollama();

box1Scroller
    .setup({
        step: '.box1'
    })
    .onStepEnter(() => {
        frame1.classList.remove('hidden');
        body.classList.remove('african');
        sun.classList.remove('sun-african');
        riverCover.classList.add('hidden'); 
    })
    .onStepExit(() => {
        frame1.classList.add('hidden');
        body.classList.add('african');
        sun.classList.add('sun-african');
        riverCover.classList.remove('hidden');
        console.log('hei');
    })