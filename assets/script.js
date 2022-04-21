const frame1 = document.querySelector('#frame1');
const frameOneTwo = document.querySelector('#frame1-2');
const frame2 = document.querySelector('#frame2');
const frame3 = document.querySelector('#frame3');
const frame4 = document.querySelector('#frame4');

const frame4Block = document.querySelector('#frame4-block');
const innerHandle = document.querySelector('#handle-inner');
const handle = document.querySelector('#handle');
const rope = document.querySelector('#rope');
const bucket = document.querySelector('#bucket');
const river = document.querySelector('#river');
const smallPond = document.querySelector('#small-pond');
const forrest2 = document.querySelector('#african-forrest2');
const forrest = document.querySelector('#african-forrest');
const riverCover = document.querySelector('#cover');
const body = document.querySelector('body');
const sun = document.querySelector('#sun');
let lastFrames = false;

const box1Scroller = scrollama();
const box2Scroller = scrollama();
const box3Scroller = scrollama();
const box4Scroller = scrollama();
const wellAnimation = scrollama();
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
        riverCover.classList.remove('move-down'); 
        frameOneTwo.classList.remove('hidden');
    })
    .onStepExit(() => {
        frame1.classList.add('hidden');
        frame2.classList.remove('hidden');
        body.classList.add('african');
        sun.classList.add('sun-african');
        riverCover.classList.add('move-down');
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
        console.log(lastFrames);
    })

    box3Scroller
    .setup({
        step: '.box__3'
    })
    .onStepEnter(() => {
        frameOneTwo.classList.remove('hidden');
        frame4Block.classList.add('hidden');
        frame2.classList.remove('hidden');
        
    })
    .onStepExit(() => {
        frameOneTwo.classList.add('hidden');
        frame4Block.classList.remove('hidden');
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
        forrest2.classList.add('no-leaf');
        forrest.classList.add('no-leaf');
        river.style.display = 'none';
        smallPond.classList.add('smaller-pond');
    })
    .onStepExit(() => {
        forrest2.classList.remove('no-leaf');
        forrest.classList.remove('no-leaf');
        river.style.display = 'block';
        smallPond.classList.remove('smaller-pond');
    })

    wellAnimation
    .setup({
        step: '.box__5'
    })
    .onStepEnter(() => {
        rope.classList.add('rope-animation');
        bucket.classList.add('bucket-animation');
        innerHandle.classList.add('handle-inner-animation');
        handle.classList.add('handle-animation');

    })
    .onStepExit(() => {
        rope.classList.remove('rope-animation');
        bucket.classList.remove('bucket-animation');
        innerHandle.classList.remove('handle-inner-animation');
        handle.classList.remove('handle-animation');
    })