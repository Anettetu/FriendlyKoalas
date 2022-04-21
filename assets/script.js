const frame1 = document.querySelector('#frame1');
const frameOneTwo = document.querySelector('#frame1-2');
const frame2 = document.querySelector('#frame2');
const frame3 = document.querySelector('#frame3');
const frame4 = document.querySelector('#frame4');
const river = document.querySelector('#river');
const bigTrees = document.querySelector('#big-african-trees');
const smallTrees = document.querySelector('#small-african-trees');
const forrest = document.querySelector('#african-forrest');
const riverCover = document.querySelector('#cover');
const body = document.querySelector('body');
const sun = document.querySelector('#sun');
let lastFrames

const box1Scroller = scrollama();
const box2Scroller = scrollama();
const box3Scroller = scrollama();
const box4Scroller = scrollama();
const noLeaf = scrollama();

box1Scroller
    .setup({
        step: '.box__1'
    })
    .onStepEnter(() => {
        frame1.classList.remove('hidden');
        frame2.classList.add('hidden');
        frame4.classList.add('hidden');
        body.classList.remove('african');
        sun.classList.remove('sun-african');
        river.classList.remove('hidden');
        riverCover.classList.add('hidden'); 
        frameOneTwo.classList.remove('hidden');
    })
    .onStepExit(() => {
        frame1.classList.add('hidden');
        frame2.classList.remove('hidden');
        body.classList.add('african');
        sun.classList.add('sun-african');
        riverCover.classList.remove('hidden');
        console.log('hei');
    })

    box2Scroller
    .setup({
        step: '.box__2'
    })
    .onStepEnter(() => {
        frame3.classList.remove('hidden');
        frame2.classList.add('hidden');
        frame4.classList.add('hidden');
        body.classList.remove('african');
        river.classList.add('hidden');
        sun.classList.remove('sun-african'); 
    })
    .onStepExit(() => {
        frame3.classList.add('hidden');
        body.classList.add('african');
        sun.classList.add('sun-african');
        if (lastFrames) frame4.classList.remove('hidden');
    })

    box3Scroller
    .setup({
        step: '.box__3'
    })
    .onStepEnter(() => {
        frameOneTwo.classList.remove('hidden');
        frame2.classList.remove('hidden');
        
    })
    .onStepExit(() => {
        frameOneTwo.classList.add('hidden');
    })

    box4Scroller
    .setup({
        step: '.box__4'
    })
    .onStepEnter(() => {
        lastFrames = false;
    })
    .onStepExit(() => {
        lastFrames = true;
    })

    noLeaf
    .setup({
        step: '.leaf-trigger'
    })
    .onStepEnter(() => {
        bigTrees.classList.add('no-leaf');
        smallTrees.classList.add('no-leaf');
        forrest.classList.add('no-leaf');
        river.style.display = 'none';
    })
    .onStepExit(() => {
        bigTrees.classList.remove('no-leaf');
        smallTrees.classList.remove('no-leaf');
        forrest.classList.remove('no-leaf');
        river.style.display = 'block';
    })