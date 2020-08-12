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




function onClickImg(id){
    setSelectedImage(id)
    let elModal=document.querySelector('.modal')
    elModal.style.display='unset'
    console.log(elModal.style.display)   
}

function onCloseModal() {
let elModal=document.querySelector('.modal')
 
    elModal.style.display='none'
  
}


function onIncreaseFont(){
gMeme.lines[gMeme.selectedLineIdx].size++
drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 225, 225)
}
