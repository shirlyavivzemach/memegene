'use strict'


function onInit() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    // window.addEventListener('resize', function(){
    // //     resizeCanvas()
    // })

    // drawImgFromlocal()

    renderGallery()
}

function renderGallery(){
    let elGallery=document.querySelector('.gallery')
        for(var i=0;i<gImgs.length;i++){
            elGallery.innerHTML+=`<img onclick="onClickImg(${gImgs[i].id})" src=${gImgs[i].url} class="gallery-img"/>`
        }  
    }

function onClickImg(id){
    setSelectedImage(id)
    let elModal=document.querySelector('.open-img')
    elModal.style.display='unset'
    document.querySelector('.gallery').hidden=true
    document.querySelector('.About').hidden=true

    console.log(elModal.style.display)   
}

function onCloseImg() {
let elModal=document.querySelector('.open-img')
document.querySelector('.gallery').hidden=false
    elModal.style.display='none'
  
}


function onDcreaseFont(){
gMeme.lines[gMeme.selectedLineIdx].size--;
drawImgFromlocal(gMeme.selectedImgId)

}

function onIncreaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size++
    drawImgFromlocal(gMeme.selectedImgId)
    }

function onSwitchLine(){
    let selectedLine= gMeme.selectedLineIdx
    let saveSelectedText = null
    if(selectedLine===gMeme.lines.length-1 && selectedLine > 0){
        gMeme.selectedLineIdx=0
    } else {
        gMeme.selectedLineIdx++
    }
   saveSelectedText=gMeme.lines[selectedLine].txt;
    
}

function onDeleteText(){
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
   drawImgFromlocal(gMeme.selectedImgId)
    }


    function onChangeLineHeight(isIncrease){
        if(isIncrease){
            gMeme.lines[gMeme.selectedLineIdx].y++
        }else{
            gMeme.lines[gMeme.selectedLineIdx].y--
        }
        drawImgFromlocal(gMeme.selectedImgId)
    }
