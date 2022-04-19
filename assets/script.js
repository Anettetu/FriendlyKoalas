const frame1 = document.querySelector('#frame1');
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
const box1Scroller = scrollama();
const box2Scroller = scrollama();
const noLeaf = scrollama();

box1Scroller
    .setup({
        step: '.box1'
    })
    .onStepEnter(() => {
        frame1.classList.remove('hidden');
        frame2.classList.add('hidden');
        frame4.classList.add('hidden');
        body.classList.remove('african');
        sun.classList.remove('sun-african');
        river.classList.remove('hidden');
        riverCover.classList.add('hidden'); 
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
        step: '.box2'
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
        frame4.classList.remove('hidden');
        body.classList.add('african');
        sun.classList.add('sun-african');
        console.log('hei');
    })

    noLeaf
    .setup({
        step: '.leaf-trigger'
    })
    .onStepEnter(() => {
        bigTrees.classList.add('no-leaf');
        smallTrees.classList.add('no-leaf');
        forrest.classList.add('no-leaf');
    })
    .onStepExit(() => {
        bigTrees.classList.remove('no-leaf');
        smallTrees.classList.remove('no-leaf');
        forrest.classList.remove('no-leaf');
    })