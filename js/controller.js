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
    elGallery.innerHTML = ''
    for (var i = 0; i < gFilteredImgs.length; i++) {
        elGallery.innerHTML += `<img onclick="onClickImg(${gFilteredImgs[i].id},'${gFilteredImgs[i].url}')" src=${gFilteredImgs[i].url} class="gallery-img"/>`
    }
    renderCategories()
}

function onClickImg(id, url) {
    setSelectedImage(id)
    drawMeme(url)
    let elSelectedImg = document.querySelector('.open-img')
    elSelectedImg.style.display = 'block'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.about').hidden = true
    document.querySelector('.name-icon-wrapper').style.display = 'none'
    document.querySelector('.categories-container').hidden = true
}

function onCloseImg() {
    let elSelectedImg = document.querySelector('.open-img')
    document.querySelector('.gallery').style.display = 'inline-grid'
    elSelectedImg.style.display = 'none'
    document.querySelector('.about').hidden = false
    document.querySelector('input').hidden = false
    document.querySelector('.name-icon-wrapper').style.display = 'flex'
    document.querySelector('.categories-container').hidden = false
}

function drawMeme(imageUrl) {
    var img = new Image()
    img.src = imageUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        for (let i = 0; i < gMeme.lines.length; i++) {
            if (gMeme.selectedLineIdx === i) {
                drawTextHighLight(gMeme.lines[i].txt, gMeme.lines[i].x, gMeme.lines[i].y)
            }
            drawText(gMeme.lines[i].txt, gMeme.lines[i].x, gMeme.lines[i].y)

        }
    }
}

function drawTextHighLight(text, x, y) {
    let measure = gCtx.measureText(text)
    gMeasureText.width = text === '' ? 0 : measure.width + 40;
    gMeasureText.height = gMeme.lines[gMeme.selectedLineIdx].size * 2
    gMeasureText.x = x - measure.actualBoundingBoxLeft - 20
    gMeasureText.y = y === 0 ? 20 : gMeme.lines[gMeme.selectedLineIdx].y - 30

    gCtx.fillStyle = 'rgb(255,255,255,0.3)'
    gCtx.fillRect(gMeasureText.x, gMeasureText.y, gMeasureText.width, gMeasureText.height)

}

function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';

    
    gCtx.fillStyle= `${gMeme.lines[gMeme.selectedLineIdx].color}`
    console.log(gMeme.lines[gMeme.selectedLineIdx].color);
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Impact`;
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
    
}

function onTextDraw(text, idx) {
    gMeme.lines[idx].txt = text;
    drawMeme(gMeme.selectedImgId)
}


function onDcreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
    drawMeme(gMeme.selectedImgId)

}

function onIncreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    drawMeme(gMeme.selectedImgId)
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
    drawMeme(gMeme.selectedImgId)
}

function onDeleteText() {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    drawMeme(gMeme.selectedImgId)
}


function onChangeLineHeight(isIncrease) {
    if (isIncrease) {
        gMeme.lines[gMeme.selectedLineIdx].y++
    } else {
        gMeme.lines[gMeme.selectedLineIdx].y--
    }
    drawMeme(gMeme.selectedImgId)
}

// color change
function onColorSelect(color_name) {
    console.log(color_name);
    gMeme.lines[gMeme.selectedLineIdx].color = color_name;
    drawMeme(gMeme.selectedImgId)
}

// change txt alignment
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
    drawMeme(gMeme.selectedImgId)
}



function onHandleInput(elInput) {

    addTextToCanvas(elInput.value)
}

function resetInput() {
   
    const elInput = document.querySelector('.text-input-line > input')

    elInput.value = ''

}

function onAddNewLine() {

    increaseLineIdx()

    resetInput()
}


//filter category from search box
function onSearchOption(searchStr) {
    increaseCategoryPressNumber(searchStr)
    let filterArray = gImgs.filter((img) => {
        let res = true;
        img.keywords.map((keywodrd) => {
            if (keywodrd.includes(searchStr)) {
                console.log(keywodrd, searchStr)
            } else {
                res = false
            }
        })
        console.log(res)
        return res
    })
    gFilteredImgs = filterArray
    renderGallery()
}


function increaseCategoryPressNumber(searchStr) {
    let category;
    let increase;
    for (category in gKeywords) {
        if (category === searchStr) {
            gKeywords[category]++;
        }
    }
    renderGallery()
}

function onToggleMenu() {
    document.querySelector('.mobile-menu-close').hidden = !document.querySelector('.mobile-menu-close').hidden;
    document.querySelector('.mobile-menu-btn').hidden = !document.querySelector('.mobile-menu-btn').hidden
    document.body.classList.toggle('menu-open');
}

