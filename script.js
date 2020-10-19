let num = 0
let count = 0
let road = 100
let vtc = 0
let hrz = 0
document.getElementById("main_picture").height = 200
var character = {
    "chr": [{
        id: 1,
        name: "ปลา",
        desc: "ณ ขณะนี้คุณกำลังถูกปลาที่ตัวใหญ่กว่าทำร้าย และคุณก็หาอาหารไม่ค่อยได้คุณจะทำยังไง",
        text1: "หนีขึ้นบก",
        text2: "อยู่ในน้ำต่อ",
        name_img: "image/Coelacanth.png",
        s_wh: "400",
        s_ht: "150",
        answer: "หนีขึ้นบก"
    },
    {
        id: 2,
        name: "ตะกวด",
        desc: "ตอนนี้คุณอยู่บนบกแล้วมีอาหารให้เลือกเยอะเยอะมากมายคุณจะเลือกกินอะไรเป็นอาหาร",
        text1: "เนื้อสัตว์",
        text2: "พืช",
        name_img: "image/Ichthyostegaa.png",
        s_wh: "400",
        s_ht: "160",
        answer: "เนื้อสัตว์"
    },
    {
        id: 3,
        name: "ไดโนเสาร์",
        desc: "คุณกำลังก้าวเข้าสู่การเปลี่ยนแปลงครั้งยิ่งใหญ่ ถ้าคุณต้องมีลูกคุณอยากลองออกลูกเป็นอะไร",
        text1: "ออกลูกเป็นตัว",
        text2: "ออกลูกเป็นไข่",
        name_img: "image/Synapsids.png",
        s_wh: "400",
        s_ht: "150",
        answer: "ออกลูกเป็นตัว"
    },
    {
        id: 4,
        name: "หนู",
        desc: "ตอนนี้อากาศบนบกร้อนจังเลย ถ้าคุณจะต้องระบายความร้อนออกจากร่างกายคุณอยากจะระบายออกทางไหน",
        text1: "ทางผิวหนัง",
        text2: "ทางอุ้งเท้า",
        name_img: "image/eutherain.png",
        s_wh: "400",
        s_ht: "150",
        answer: "ทางผิวหนัง"
    },

    {
        id: 5,
        name: "ลิง",
        desc: "ในช่วงนี้คุณได้ใช้ชีวิตบนต้นไม้เป็นเวลานาน เบื่อมั้ย? ที่จะต้องอยู่แต่ข้างบน ถ้าเบื่อคุณจะทำยังไง",
        text1: "อยู่บนต้นไม้ต่อ",
        text2: "ลงมาพื้นดิน",
        name_img: "image/Primates.png",
        s_wh: "400",
        s_ht: "200",
        answer: "ลงมาพื้นดิน"
    },
    {
        id: 6,
        name: "มนุษย์ยุคหินที่มีขนลิง",
        desc: " ถึงเวลาอาหารแล้วหิวจัง คุณอยากจะใช้วิธีไหนในการหาอาหาร",
        text1: "จับด้วยมือเปล่า",
        text2: "ใช้อุปกรณ์ล่าสัตว์",
        name_img: "image/australopithecus.png",
        s_wh: "400",
        s_ht: "300",
        answer: "ใช้อุปกรณ์ล่าสัตว์"
    },
    {
        id: 7,
        name: "มนุษย์ยุคหินเริ่มออกล่าเป็น",
        desc: "ถ้าตอนนี้คุณต้องใช้ชีวิตอยู่ตัวคนเดียว คุณจะอยากลองหาเพื่อนดูมั้ย",
        text1: "อยากหาเพื่อน",
        text2: "อยากอยู่คนเดียว",
        name_img: "image/homo_habillis.png",
        s_wh: "400",
        s_ht: "300",
        answer: "อยากหาเพื่อน"
    },
    {
        id: 8,
        name: "มนุษย์ยุคหินเริ่มทำอุปกรณ์เป็น",
        desc: "ช่วงนี้อากาศเปลี่ยนแปลงบ่อยจนคุณรู้สึกป่วย คุณจะอยากลองหายาสมุนไพรมารักษาอาการป่วยของคุณดูมั้ย",
        text1: "หายารักษา",
        text2: "ปล่อยให้ป่วยต่อไป",
        name_img: "image/homo_erectus.png",
        s_wh: "400",
        s_ht: "300",
        answer: "หายารักษา"
    },
    {
        id: 9,
        name: "มนุษย์ยุคหินเริ่มจุดไฟเป็น",
        desc: "อยู่กับเพื่อนมาตั้งนานยังคุยกันไม่รู้เรื่องเลย คุณอยากจะมีภาษาที่เอาไว้ใช้สื่อสารกับเพื่อนๆของคุณมั้ย",
        text1: "ไม่ต้องมีภาษาหรอก",
        text2: "คิดค้นภาษามาคุยกัน",
        name_img: "image/homo_neanderthalensis.png",
        s_wh: "400",
        s_ht: "300",
        answer: "คิดค้นภาษามาคุยกัน"
    },
    {
        id: 10,
        name: "มนุษย์ยุคหิน",
        desc: "เย้! คุณได้เป็นมนุษย์",
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
function moveGround() {
    if (count == 1) {
        document.querySelector("#groundWater").style.bottom = "0%"
        
    }
    else if(count == 2) {
        count++
    }
    else {
        road -= 100
        document.querySelector("#ground").style.left = road + "%"
    }

}
function changeImg(textBtn) {
    if (textBtn.textContent == character.chr[num].answer) {
        if (count == 1) {
            document.querySelector("#groundWater").style.bottom = "-100%"
            document.getElementById('water').style.height = '0%'
            count++
        }
        num++
        image = document.querySelector('IMG.character');
        btnA = document.querySelector('BUTTON#routeA');
        btnB = document.querySelector('BUTTON#routeB');
        DivFinal = document.querySelector('DIV#final');
        btnRestart = document.querySelector('BUTTON#text_restart');
        moveGround()
        if (character.chr[num].id == 10) {
            document.getElementById('routeA').style.display = 'none'
            document.getElementById('routeB').style.display = 'none'
            document.getElementById('text_restart').style.top = '85%'
            setTimeout(function () {
                document.getElementById('text_restart').style.opacity = 1
                document.getElementById('final').style.opacity = 1
            }, 5500)

        }
        center_text.style.opacity = 0

        image.classList.toggle("hid");
        btnA.classList.toggle("hid");
        btnB.classList.toggle("hid");
        
        routeA.innerHTML = character.chr[num].text1 + ""
        routeB.innerHTML = character.chr[num].text2 + ""
        document.getElementById('description').style.opacity = 0
        setTimeout(function () {
            description.innerHTML = character.chr[num].desc + ""
        }, 1500)
        setTimeout(function () {
            document.getElementById('description').style.opacity = 1
        }, 2500)
        setTimeout(function () {
            moveGround()
        }, 5000)
        setTimeout(function () {
            image.getAttribute('src');
            image.setAttribute('src', character.chr[num].name_img);
            document.getElementById("main_picture").height = character.chr[num].s_ht
            image.classList.toggle("hid");
            btnA.classList.toggle("hid");
            btnB.classList.toggle("hid");
            
        }, 6000)
        
        if (character.chr[num].id != 10) {
            setTimeout(function () {
                center_text.style.opacity = 100
                
            }, 6500)
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
    document.getElementById('ground').style.opacity = 0



    setTimeout(function () {
        main_picture.style.opacity = 0
        document.getElementById('sky_obj').style.opacity = 0
        document.getElementById('bg-sky').style.backgroundColor = '#232323'
        document.getElementById('main_content').style.opacity = 0
    }, 500)
    setTimeout(function () {
        document.getElementById('routeA').style.display = 'none'
        document.getElementById('routeB').style.display = 'none'
    }, 600)
    setTimeout(function () {
        document.getElementById('main_picture').style.display = 'none'
        document.getElementById('restart').style.display = 'flex'
    }, 3000)
}
function start() {

    if (count == 0) {
        count++
        document.getElementsByClassName('page5')[0].style.marginTop += -20 + 'em'
        document.getElementById('water').style.height = '100%'
        document.getElementById('scroll').style.top = '70%'
        document.getElementById('scroll_dialog').innerHTML = "ณ ขณะนี้คุณกำลังถูกปลาที่ตัวใหญ่กว่าทำร้ายและคุณก็หาอาหารไม่ค่อยได้คุณจะทำยังไง"
    }
    else {
        document.querySelector("#groundWater").style.bottom = "0%"
        document.getElementById('scroll').style.top = '-10%'
        document.getElementById('contain').style.opacity = 100
    }

}
window.addEventListener(

    "scroll",
    () => {
        console.log(window.pageYOffset)
        if (window.pageYOffset >= 300) {
            document.getElementById('intro').style.marginTop += -16 + 'em'
            document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลงเพื่อไปหน้าต่อไป</b>'

        }
        if (window.pageYOffset >= 800) {
            document.getElementsByClassName('dialog')[0].style.marginTop += -14 + 'em'
        }
        if (window.pageYOffset >= 1300) {
            document.getElementsByClassName('page1')[0].style.marginTop += -22 + 'em'
        }
        if (window.pageYOffset >= 1800) {
            document.getElementsByClassName('page2')[0].style.marginTop += -17 + 'em'
        }
        if (window.pageYOffset >= 2300) {
            document.getElementsByClassName('page3')[0].style.marginTop += -8 + 'em'
        }
        if (window.pageYOffset >= 2800) {
            document.getElementsByClassName('page4')[0].style.marginTop += -8 + 'em'
            document.getElementById('water').style.bottom = 0 + '%'
            document.getElementById('scroll_dialog').innerHTML = '<b>มาเริ่มวิวัฒนาการของคุณกัน</b>'
            image = document.querySelector('IMG#next_icon')
            image.getAttribute('src')
            image.setAttribute('src', 'image/down_btn.svg')
        }
    },

);
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