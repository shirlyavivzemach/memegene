'use strict'


function onInit() {

    // window.addEventListener('resize', function(){

    //     resizeCanvas()
    // })

    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');

    renderGallery()
}

function renderGallery() {
    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML=''
    for (var i = 0; i < filteredImgs.length; i++) {
        elGallery.innerHTML += `<img onclick="onClickImg(${filteredImgs[i].id})" src=${filteredImgs[i].url} class="gallery-img"/>`
    }
    renderCategories()
}

function onClickImg(id) {
    setSelectedImage(id)
    let elSelectedImg = document.querySelector('.open-img')
    elSelectedImg.style.display = 'block'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.About').hidden = true
    document.querySelector('.name-icon-wrapper').style.display = 'none'
    document.querySelector('.categories-container').hidden = true
}



function onCloseImg() {
    let elSelectedImg = document.querySelector('.open-img')
    document.querySelector('.gallery').style.display = 'inline-grid'
    elSelectedImg.style.display = 'none'
    document.querySelector('.About').hidden = false
    document.querySelector('input').hidden = false
    document.querySelector('.name-icon-wrapper').style.display = 'flex'
 document.querySelector('.categories-container').hidden = false
}


function onDcreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
    drawImgFromlocal(gMeme.selectedImgId)

}

function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    drawImgFromlocal(gMeme.selectedImgId)
}

function onSwitchLine() {
    let selectedLine = gMeme.selectedLineIdx
    let saveSelectedText = null
    if (selectedLine === gMeme.lines.length - 1 && selectedLine > 0) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
    saveSelectedText = gMeme.lines[selectedLine].txt;
    drawImgFromlocal(gMeme.selectedImgId)
}

function onDeleteText() {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    drawImgFromlocal(gMeme.selectedImgId)
}


function onChangeLineHeight(isIncrease) {
    if (isIncrease) {
        gMeme.lines[gMeme.selectedLineIdx].y++
    } else {
        gMeme.lines[gMeme.selectedLineIdx].y--
    }
    drawImgFromlocal(gMeme.selectedImgId)
}

    function onColorSelect(color_name) {
        gMeme.lines[gMeme.selectedLineIdx].color = color_name;
        
    
    }


function onChangeLineAlign(alignStr) {
    let align = gCanvas.width / 2
    console.log(align);
    switch (alignStr) {
        case 'right':
            align = gCanvas.width - 100
            break;
        case 'left':
            align = 100

            break;
        case 'center':
            align = gCanvas.width / 2
            break;
        default:
            break;
    }

    gMeme.lines[gMeme.selectedLineIdx].x = align
    drawImgFromlocal(gMeme.selectedImgId)
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}