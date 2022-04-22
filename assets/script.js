const frame1 = document.querySelector('#frame1');
const frameOneTwo = document.querySelector('#frame1-2');
const frame2 = document.querySelector('#frame2');
const frame3 = document.querySelector('#frame3');
const frame4 = document.querySelector('#frame4');

const frame4Block = document.querySelector('#frame4-block');
const bubbleText = document.querySelector('#text_in_bubble');
const innerHandle = document.querySelector('#handle-inner');
const introContainer = document.querySelector('#intro-container');
const blurScreen = document.querySelector('#blur');
const lady = document.querySelector('#lady');
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

const goal="Ensure availability and sustainable management of water and sanitation for all."
const bubble1="Scroll to learn more about the world’s water supply. "
const bubble2="Norway is a rich country when it comes to water supply. 99% of the population in Norway have access to clean and safe drinking water. "
const bubble3="In the world, billions of people still lack access to safe drinking water, sanitation, and hygiene. Out of the 195 countries in the world, as many as 129 are not on track to having sustainably managed water resources by 2030."
const bubble4="Due to climate change, the temperature around the world keeps increasing and is predicted to continue growing. This causes water sources to dry out."
const bubble5="A sprinkler uses between 1000 and 1500 liters an hour, while a jacuzzi needs about 1000 liters of water."
const bubble6="In Norway one person use around 180 liters of water a day. In some of the poorest countries, a regular person uses about 10 liters a day."
const bubble7="Access to clean water can save about 16.000 people, each week!"
const bubble8= "When the water sources dry out, the one thing that could help would be wells. But digging and building wells costs money. The poorer parts of the world could use our help in aid when it comes to this."

const listTitle = "How can you help?"
const item1= "Don’t let the water run when brushing your teeth."
const item2= "Fill the washing machine before turning it on." 
const item3= "Don’t leave the sprinkler on longer than necessary."
const item4= "Take shorter showers."


//creating the unordered list
const textArray = [item1, item2, item3, item4];
const ulTitle = document.createElement('h2');
ulTitle.innerHTML = listTitle;
const ul = document.createElement('ul');

for (i = 0; i <= textArray.length -1; i++) {
    let li = document.createElement('li');
    li.innerHTML = textArray[i];

    ul.appendChild(li);
}

// the scrollers
const box1Scroller = scrollama();
const box2Scroller = scrollama();
const box3Scroller = scrollama();
const box4Scroller = scrollama();
const wellAnimation = scrollama();
const introScroll = scrollama();
const ladyScroll1 = scrollama();
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


ladyScroll1
    .setup({
        step: '.lady1',
    })
    .onStepEnter(() => {
        lady.classList.remove('hidden');
        blurScreen.classList.add('blur-in');
        blurScreen.classList.remove('blur-out');
        bubbleText.innerHTML = bubble1;
    })
    .onStepExit(() => {
        lady.classList.add('hidden');
        blurScreen.classList.remove('blur-in');
        blurScreen.classList.add('blur-out');
    })


introScroll
    .setup({
        step: '.intro-trigger',
    })
    .onStepEnter(() => {
        introContainer.classList.remove('hidden');
        frameOneTwo.classList.add('hidden');
    })
    .onStepExit(() => {
        introContainer.classList.add('hidden');
        frame2.classList.add('hidden');
        frameOneTwo.classList.remove('hidden');
    })

