const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const reactionImage = document.querySelector('.pic');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'YAYYY MY BUBBA IS MY VALENTINE, I LOVE YOU!!';
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    reactionImage.src = "qt2.gif";
    reactionImage.width = "90";
    reactionImage.height = "90";
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});