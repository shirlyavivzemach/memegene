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
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            y: 0,
            x: 0
        }
    ]
}

function increaseLineIdx(){
    gMeme.selectedLineIdx++
}


function setSelectedImage(imageId){
   let selectedImage =  gImgs.find((image)=>image.id === imageId)
   if(selectedImage){
       gMeme.selectedImgId=selectedImage.url
       gSelectedImg = selectedImage
   }
   drawImgFromlocal(selectedImage.url)
}


function drawImgFromlocal(imageUrl) {
    var img = new Image()
    img.src = imageUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        for(let i = 0 ; i < gMeme.lines.length;i++){
            console.log(i,gMeme.lines[i].y)
            drawText(gMeme.lines[i].txt, 225, gMeme.lines[i].y)
        }
    } 
}


function drawText(text, x, y) {
   gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Impact`;
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onTextDraw(text,idx) {
    gMeme.lines[idx].txt = text;
    drawImgFromlocal( gMeme.selectedImgId)
}




function createImg(id,url,keyword){
    return{
        id: null, 
        url: url,
       keyword: 'funny'

    }
}


//Add meme to gmem object , the function called from html and sets the line at the selected input index (gMeme.seletedLineIdx)
function addMemeToImg(text){
    if(gMeme.lines.length-1<gMeme.selectedLineIdx){
        gMeme.lines.push({})
    }
    gMeme.lines[gMeme.selectedLineIdx].txt=text
    memeSetLineHeight(initialLineHeight(gMeme.selectedLineIdx))
   
    
}
function initialLineHeight(idx){
    switch(idx){
        case 0: 
        return 30;
        case 1:
return gCanvas.height-30
case 2:
    return gCanvas.height/2-15
    }
}

function memeSetLineHeight(height){
    gMeme.lines[gMeme.selectedLineIdx].y=height
    drawImgFromlocal( gMeme.selectedImgId)
}













