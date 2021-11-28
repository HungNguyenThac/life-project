//owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: true,
  nav: false,
  dotsEach: true,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      992:{
          items:4
      }
  }
})


//toggle modal send userInfo
const handleClickBtnSendUserinfo = (e)=>{
    e.preventDefault()
    const modalLoading = document.querySelector(".modal-loading")
    modalLoading.classList.add("active")

    setTimeout(()=>{
    modalLoading.classList.remove("active")
    },2000)
}

let btnSendUserinfo = document.querySelector(".btn-send-infoUser")
btnSendUserinfo.addEventListener("click", handleClickBtnSendUserinfo)
