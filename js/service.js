'use strict'
var gCanvas;
var gCtx;
var gMemes;
var gSelectedImg
var gKeywords = { 'happy': 1, 'funny': 1, 'comics': 1, 'dogs': 1, 'drinks': 1, 'books': 1 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny'] },
{id: 2, url: 'img/2.jpg', keywords: ['dogs']},
{id: 3, url: 'img/3.jpg', keywords: ['dogs']},
{id: 4, url: 'img/4.jpg', keywords: ['funny']},
{id: 5, url: 'img/5.jpg', keywords: ['funny']},
{id: 6, url: 'img/6.jpg', keywords: ['funny']},
{id: 7, url: 'img/7.jpg', keywords: ['funny']},
{id: 8, url: 'img/8.jpg', keywords: ['funny']},
{id: 9, url: 'img/9.jpg', keywords: ['funny']},
{id: 10, url: 'img/10.jpg', keywords: ['funny']},
{id: 11, url: 'img/11.jpg', keywords: ['funny']},
{id: 12, url: 'img/12.jpg', keywords: ['funny']},
{id: 13, url: 'img/13.jpg', keywords: ['drinks']},
{id: 14, url: 'img/14.jpg', keywords: ['books']},
{id: 15, url: 'img/15.jpg', keywords: ['happy']},
{id: 16, url: 'img/16.jpg', keywords: ['happy']},
{id: 17, url: 'img/17.jpg', keywords: ['books']},
{id: 18, url: 'img/18.jpg', keywords: ['comics']},

];

var gMeme = {
    selectedImgId: 1,

    selectedLineIdx: 0,

    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function drawImgFromlocal() {
    var img = new Image()
    img.src = gImgs[0].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend

        drawText(gMeme.lines[0].txt, 225, 225)
    }
}


function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Ariel';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onTextDraw(text) {
    gMeme.lines[0].txt = text;

    drawImgFromlocal()

}


function createImg(id,url,keyword){
    return{
        id: null, 
        url: url,
       keyword: 'funny'

    }
}


function createMemes(){
    gMemes=[]; 
    gMemes.push(createMeme('1','img/1.jpg','funny'));
    gMemes.push(createMeme('2','img/2.jpg','dogs'));
    console.log(gMemes);
}

createMemes()


function getMems(){

    return gMemes

    
}

function renderGallery(){
    for(var i=0;i>gImgs.length;i++){
        
    }
    
}














