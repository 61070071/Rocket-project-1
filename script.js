let num = 0
let road = 0
let vtc = 0
let hrz = 0
document.getElementById("main_picture").height = 200
var character = {
    "chr": [{
        id: 1,
        name: "ปลา",
        desc: "test1",
        text1: "หาอาหารบนบก",
        text2: "หาหารใต้น้ำ",
        name_img: "image/Coelacanth.png",
        s_wh: "400",
        s_ht: "150",
        answer: "หาอาหารบนบก"
    },
    {
        id: 2,
        name: "ตะกวด",
        desc: "test2",
        text1: "เลือกที่จะกินพืช(Herbivores)",
        text2: "เลือกที่จะกินเนื้อ(Predator)",
        name_img: "image/Ichthyostegaa.png",
        s_wh: "400",
        s_ht: "160",
        answer: "เลือกที่จะกินเนื้อ(Predator)"
    },
    {
        id: 3,
        name: "ไดโนเสาร์",
        desc: "test",
        text1: "เลี้ยงลูกด้วยนม",
        text2: "ออกลูกด้วยไข่",
        name_img: "image/Synapsids.png",
        s_wh: "400",
        s_ht: "150",
        answer: "เลี้ยงลูกด้วยนม"
    },
    {
        id: 4,
        name: "หนู",
        desc: "test",
        text1: "เหงื่อออกผ่านผิวหนัง",
        text2: "เหงื่อออกผ่านอุ้งเท้า",
        name_img: "image/eutherain.png",
        s_wh: "400",
        s_ht: "150",
        answer: "เหงื่อออกผ่านผิวหนัง"
    },

    {
        id: 5,
        name: "ลิง",
        desc: "test",
        text1: "เดินด้วยสองเท้า",
        text2: "เดินด้วยสี่ขา",
        name_img: "image/Primates.png",
        s_wh: "400",
        s_ht: "200",
        answer: "เดินด้วยสองเท้า"
    },
    {
        id: 6,
        name: "มนุษย์ยุคหินที่มีขนลิง",
        desc: "test",
        text1: "ใช้มือเปล่าดำรงชีพ",
        text2: "ใช้เครื่องมือดำรงชีพ",
        name_img: "image/australopithecus.png",
        s_wh: "400",
        s_ht: "300",
        answer: "ใช้เครื่องมือดำรงชีพ"
    },
    {
        id: 7,
        name: "มนุษย์ยุคหินเริ่มออกล่าเป็น",
        desc: "test",
        text1: "ต้องการวัฒนธรรมและสังคม",
        text2: "อยู่อย่างสันโดษ",
        name_img: "image/homo_habillis.png",
        s_wh: "400",
        s_ht: "300",
        answer: "ต้องการวัฒนธรรมและสังคม"
    },
    {
        id: 8,
        name: "มนุษย์ยุคหินเริ่มทำอุปกรณ์เป็น",
        desc: "test",
        text1: "รักษาโรคภัยด้วยยา",
        text2: "รักษาด้วยการปล่อยวาง",
        name_img: "image/homo_erectus.png",
        s_wh: "400",
        s_ht: "300",
        answer: "รักษาโรคภัยด้วยยา"
    },
    {
        id: 9,
        name: "มนุษย์ยุคหินเริ่มจุดไฟเป็น",
        desc: "test",
        text1: "สื่อสารด้วยภาษา",
        text2: "ไม่ต้องการสื่อสาร",
        name_img: "image/homo_neanderthalensis.png",
        s_wh: "400",
        s_ht: "300",
        answer: "สื่อสารด้วยภาษา"
    },
    {
        id: 10,
        name: "มนุษย์ยุคหิน",
        desc: "test",
        text1: "-",
        text2: "-",
        name_img: "image/homo_sapiens.png",
        s_wh: "400",
        s_ht: "300",
        answer: ""
    }
    ]
}
// document.querySelector('div#description').onload = setDes();



function sizeimg() {
    document.getElementById("main_picture").height = 130
    setTimeout(function () {
        document.getElementById('intro').style.opacity = 100
    }, 500)
}

function changeImg(textBtn) {
    if (textBtn.textContent == character.chr[num].answer) {
        num++
        road += 15
        if (character.chr[num].id == 10) {
            document.getElementById('routeA').style.display = 'none'
            document.getElementById('routeB').style.display = 'none'
        }
        if (road < 140) {
            center_text.style.opacity = 0
            image = document.querySelector('IMG.character');
            image.classList.toggle("hid");
            setTimeout(function () {
                image.getAttribute('src');
                image.setAttribute('src', character.chr[num].name_img);
                routeA.innerHTML = character.chr[num].text1 + ""
                routeB.innerHTML = character.chr[num].text2 + ""
                document.getElementById("main_picture").height = character.chr[num].s_ht
                image.classList.toggle("hid");
            }, 500)
            document.querySelector("#bg-ground").style.backgroundPosition = road + "% 100%"

            setTimeout(function () {
                center_text.style.opacity = 100
            }, 500)

        }
    }
    else {
        ending()
    }


}

function ending() {
    center_text.innerHTML = '<b>วิวัฒนาการที่คุณเลือกนั้น ได้สูญพันธ์ในเวลาต่อมา</b><br><p>ผู้แข็งแกร่งย่อมอยู่รอด ผู้อ่อนแอจะถูกคัดออก นั่นคือความเป็นไปของโลกใบนี้<p>'
    document.getElementById('center_text').style.color = '#b54949'
    document.getElementById('center_text').style.fontSize = 'xx-large'
    document.querySelector("#bg-ground").style.backgroundPosition = "300% 100%"

    setTimeout(function () {
        main_picture.style.opacity = 0
        document.getElementById('sky_obj').style.opacity = 0
        document.getElementById('bg-sky').style.backgroundColor = '#232323'
        document.getElementById('main_content').style.opacity = 0
    }, 500)
    setTimeout(function () {
        document.getElementById('routeA').style.display = 'none'
        document.getElementById('routeB').style.display = 'none'
        // document.getElementById('main_picture').style.display = 'none'
    }, 600)
    setTimeout(function () {
        document.getElementById('main_picture').style.display = 'none'
        document.getElementById('restart').style.display = 'flex'
    }, 3000)

}

// setInterval(function(){
//     var posi_x = Math.floor(Math.random()* 100)
//     var posi_y = Math.floor(Math.random()* 30)
//     this.vtc = posi_y
//     this.hrz = posi_x
//     console.log('Randomize vertical = '+this.vtc)
//     console.log('Randomize horizontal = '+this.hrz)
//     }, 5000);

//     function setDes(){
//         this.vtc = Math.floor(Math.random()* 30) + 25
//         this.hrz = Math.floor(Math.random()* 70) + 25
//         document.querySelector('div#description').style.top = this.vtc + '%';
//         document.querySelector('div#description').style.left = this.hrz + '%';
//     }