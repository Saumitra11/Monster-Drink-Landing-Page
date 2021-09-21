function slider(img){
    document.querySelector('.monster').src = `img/${img}`;
}
function background(bg, text){
    const sec = document.querySelector("section"); 
    const header_a = document.querySelectorAll("header ul li a");
    const text_h1 = document.querySelector(".content .textBox h1");
    const text_p = document.querySelector(".content .textBox p");
    const text_a = document.querySelector(".content .textBox a");
    sec.style.background = bg;
    header_a.forEach((item)=>{
        item.style.color = text;
    })
    text_h1.style.color = text;
    text_p.style.color = text;
    text_a.style.background = bg;
    text_a.style.color = text;
}