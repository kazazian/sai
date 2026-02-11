document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  function randomHexColor () {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
  let btn = document.querySelector("[data-js='t1-btn']")
  btn.addEventListener('click',()=>{
    btn.style.background= randomHexColor()
    document.querySelector("[data-js='t1-hex']").textContent =randomHexColor()
  })
  //2
  const input = document.querySelector("[data-js='t2-input']")
  input.addEventListener('input',()=>{
    let len=input.value.length;
    document.querySelector("[data-js='t2-count']").textContent=len;
  })
  //3
  let btn2=document.querySelector("[ data-js='t3-add']")
  btn2.addEventListener('click', ()=>{
    let txt=document.querySelector("[data-js='t3-input']").value
    let li = document.createElement("li")
    let ul = document.querySelector("[data-js='t3-list']")
    if (txt.length>0){
      li.textContent = txt
      ul.append(li)
    }
  //4
  })
  let btn4=document.querySelector("[data-js='t4-minus']")
  let btn44=document.querySelector("[data-js='t4-plus']")
  let btn444=document.querySelector("[data-js='t4-reset']")
  let count=document.querySelector("[data-js='t4-out']").textContent
  btn4.addEventListener('click',()=>{
    count--;
    document.querySelector("[data-js='t4-out']").textContent = count
  })
  btn44.addEventListener('click',()=>{
    count++;
    document.querySelector("[data-js='t4-out']").textContent = count
  })
  btn444.addEventListener('click',()=>{
    document.querySelector("[data-js='t4-out']").textContent = 0
    count=0
  })
  //5
  let btn5=document.querySelector("[data-js='t5-open']")
  btn5.addEventListener('click',()=>{
    let hide = document.querySelector("[data-js='t5-modal']")
    hide.hidden=false;
    let btn55=document.querySelector("[data-js='t5-close']")
    btn55.addEventListener('click',()=>{
      hide.hidden=true
    })
  })
  //6
  let btn6=document.querySelector("[data-tab='a']")
  let btn66=document.querySelector("[data-tab='b']")
  let btn666=document.querySelector("[data-tab='c']")

  let t6=document.querySelector("[data-pane='a']")
  let t66=document.querySelector("[data-pane='b']")
  let t666=document.querySelector("[data-pane='c']")

  btn6.addEventListener('click',()=>{
    btn6.classList.add("is-active")
    t6.classList.add("is-active")
    btn66.classList.remove("is-active")
    btn666.classList.remove("is-active")
    t66.classList.remove("is-active")
    t666.classList.remove("is-active")
  })
  btn66.addEventListener('click',()=>{
    btn6.classList.remove("is-active")
    btn66.classList.add("is-active")
    btn666.classList.remove("is-active")
    t6.classList.remove("is-active")
    t66.classList.add("is-active")
    t666.classList.remove("is-active")
  })
  btn666.addEventListener('click',()=>{
    btn6.classList.remove("is-active")
    btn66.classList.remove("is-active")
    btn666.classList.add("is-active")
    t6.classList.remove("is-active")
    t66.classList.remove("is-active")
    t666.classList.add("is-active")
  })
  //7
  let btn7=document.querySelector("[data-js='t7-run']")
  btn7.addEventListener('click',()=>{
    let text=document.querySelector("[data-js='t7-input']").value
    let reversed=text.split('').reverse().join('');
    let out=document.querySelector("[data-js='t7-out']")
    out.textContent=reversed

  })
  //9
  let btn9=document.querySelector("[data-js='t9-toggle']")
  btn9.addEventListener('click',()=>{
    let t9=document.querySelector("[data-js='t9-text']")
    if(t9.hidden){
      t9.hidden = false;
      btn9.textContent = 'Скрыть';
    }
    else {
    t9.hidden = true;
    btn9.textContent = 'Показать';
    }
  })
  //10
  let btn10=document.querySelector('[data-js="t10-range"]')
  btn10.addEventListener('input',()=>{
    const size=btn10.value
    document.querySelector('[data-js="t10-box"]').style.width = size + 'px';
    document.querySelector('[data-js="t10-box"]').style.height = size + 'px';
    document.querySelector('[data-js="t10-out"]').textContent = size + 'px';

  })
  //11
  let inter=0
  document.querySelector('[data-js="t11-start"]').addEventListener('click',()=>{
    inter=setInterval(()=>{
      inp=document.querySelector('[data-js="t11-seconds"]').value
      inp--
      outp=document.querySelector('[data-js="t11-out"]').textContent
      outp==inp
      if (inp <= 0) {
      clearInterval(inter);
    }
    },1000);
  })
  document.querySelector('[data-js="t11-stop"]').addEventListener('click',()=>{
    clearInterval(inter);
  })
  //12
  let progres=document.querySelector('[data-js="t12-bar"]')
  progres.addEventListener('click',()=>{
    progres.style.width=width+10
    document.querySelector('[data-js="t12-label"]').textContent =progres+'%'
  })
  enableTooltips();
});
