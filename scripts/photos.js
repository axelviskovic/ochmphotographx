const selectionAll=document.querySelector('#selectionAll')
const selectionEquestre=document.querySelector('#selectionEquestre')
const selectionNature=document.querySelector('#selectionNature')
const photosContainer=document.querySelector('.photosContainer')
const categorieChoixEquestreContainer=document.querySelector('.categorieChoixEquestreContainer')
const categorieChoixNatureContainer=document.querySelector('.categorieChoixNatureContainer')

// SCROLL

const header = document.querySelector('header')
const secondHeader = document.querySelector('.secondHeader')

window.addEventListener(
  "scroll",
  ()=>{
    const scrolled = window.scrollY
    if(scrolled>100){
      header.style.height="300px"
      header.style.opacity=".4"
      header.style.transition="all 1s"
      secondHeader.style.display="block"
    }
    if(scrolled<100){
      header.style.height="500px"
      header.style.opacity="1"
      secondHeader.style.display="none"
    }
  }
)



// Set photos

function photosAnimaux(){
  for(let i=1; i<29; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/nature/animaux/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}

function photosVoyage(){
  for(let i=1; i<36; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/nature/voyage/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}
function photosFauneFlore(){
  for(let i=1; i<40; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/nature/fauneFlore/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}

function photosConcours(){
  for(let i=1; i<29; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/equestre/concours/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}

function photosParticulier(){
  for(let i=1; i<36; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/equestre/particulier/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}
function photosBackstage(){
  for(let i=1; i<40; i++){
    let divPhoto=document.createElement('div')
    divPhoto.classList.add('photoFrame')
    photosContainer.appendChild(divPhoto)
    let photo=document.createElement('img')
    photo.setAttribute('src','../images/equestre/backstage/0'+i+'.jpg')
    divPhoto.appendChild(photo)
  }
}


function clearPhotos(){
  const photoFrame = document.querySelectorAll('.photoFrame')
  for(let i=0;i<photoFrame.length;i++){
    photosContainer.removeChild(photoFrame[i])
  }
}

photosConcours()
photosParticulier()
photosBackstage()
photosAnimaux()
photosVoyage()
photosFauneFlore()

selectionAll.addEventListener(
  'click',
  ()=>{
    selectionAll.style.opacity='1'
    clearPhotos()
    photosConcours()
    photosParticulier()
    photosBackstage()
    photosAnimaux()
    photosVoyage()
    photosFauneFlore()
    if(selectionNature.style.opacity==1){
      categorieChoixNatureContainer.style.display='none'
      selectionNature.style.opacity='.5'
    }
    if(selectionEquestre.style.opacity==1){
      selectionEquestre.style.opacity='.5'
      categorieChoixEquestreContainer.style.display='none'
    }
  }
)

selectionEquestre.addEventListener(
  'click',
  ()=>{
    clearPhotos()
    photosConcours()
    photosParticulier()
    photosBackstage()
    categorieChoixEquestreContainer.style.display='flex'
    if(selectionNature.style.opacity==1){
      categorieChoixNatureContainer.style.display='none'
    }
    selectionEquestre.style.opacity='1'
    selectionAll.style.opacity='.5'
    selectionNature.style.opacity='.5'
    const choixEquestreAll = document.querySelector('#choixEquestreAll ')
    const choixConcours = document.querySelector('#choixConcours')
    const choixParticulier = document.querySelector('#choixParticulier')
    const choixFauneFlore= document.querySelector('#choixFauneFlore')
    choixEquestreAll.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosConcours()
        photosParticulier()
        photosBackstage()
      }
    )
    choixConcours.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosConcours()
      }
    )
    choixParticulier.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosParticulier()
      }
    )
    choixBackstage.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosBackstage()
      }
    )
  }
)


selectionNature.addEventListener(
  'click',
  ()=>{
    clearPhotos()
    photosAnimaux()
    photosVoyage()
    photosFauneFlore()
    if(selectionEquestre.style.opacity==1){
      categorieChoixEquestreContainer.style.display='none'
    }
    categorieChoixNatureContainer.style.display='flex'
    selectionNature.style.opacity='1'
    selectionAll.style.opacity='.5'
    selectionEquestre.style.opacity='.5'
    const choixNatureAll = document.querySelector('#choixNatureAll ')
    const choixAnimaux = document.querySelector('#choixAnimaux')
    const choixVoyage = document.querySelector('#choixVoyage')
    const choixFauneFlore= document.querySelector('#choixFauneFlore')
    choixNatureAll.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosAnimaux()
        photosVoyages()
        photosFauneFlore()
      }
    )
    choixAnimaux.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosAnimaux()
      }
    )
    choixVoyage.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosVoyage()
      }
    )
    choixFauneFlore.addEventListener(
      'click',
      ()=>{
        clearPhotos()
        photosFauneFlore()
      }
    )
  }
)
