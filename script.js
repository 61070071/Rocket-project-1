let num = 0
let count = 0
let road = 100
let vtc = 0
let hrz = 0
let switch_info = 0
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
                answer: "หนีขึ้นบก",
                where: 0,
                wrong: "เนื่องจากในยุคดีโวเนียนมีประชากรสัตว์มีกระดูกสันหลังในน้ำจำนวนมากทำให้ขาดแคลนอาหาร <br> ปลาซีลาแคนท์จึงมีวิวัฒนาการมาจากการเริ่มหนีขึ้นไปหาอาหารบนบก ถ้าคุณเลือกที่จะอาศัยอยู่ในน้ำต่อคุณจะต้องพยายามเอาตัวรอดโดยการแย่งชิงอาหารจากปลาตัวอื่นๆ <br> คุณจึงมีวิวัฒนาการไปเป็นปลาขนาดใหญ่ในปัจจุบัน",
                alt_pic: "image/frogs.png"
            },
            {
                id: 2,
                name: "ตะกวด",
                desc: "ตอนนี้คุณอยู่บนบกแล้ว น้ำในร่างกายของคุณกำลังระเหยไปจนหมดเนื่องจากสภาพอากาศที่เปลี่ยนแปลงไปจากในน้ำ คุณอยากจะมีผิวหนังแบบไหน",
                text1: "แห้งและหยาบกระด้าง",
                text2: "ลื่นและเป็นเมือก",
                name_img: "image/Ichthyostegaa.png",
                s_wh: "400",
                s_ht: "160",
                answer: "แห้งและหยาบกระด้าง",
                where: 100,
                alt_pic: "image/eleg.png",
                wrong: "เนื่องจากผิวหนังของคุณไม่สามารถป้องกันการระเหยของน้ำ ออกจากร่างกายได้คุณจึงต้องอาศัยอยู่ใกล้แหล่งน้ำเพื่อไม่ให้ผิวหนังแห้งเพราะถ้าผิวแห้งคุณจะหายใจไม่ออก <br> และคุณยังต้องใช้แหล่งน้ำเป็นตัวกลางในการผสมพันธุ์ด้วย <br>คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์ครึ่งบกครึ่งน้ำ เช่น กบ, ซาลามานเดอร์ และเขียดงู ในปัจจุบัน"
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
                where: -100,
                answer: "ออกลูกเป็นตัว",
                alt_pic: "image/Amadil.png",
                wrong: "วิวัฒนาการของคุณจะเกิดขึ้นได้ก็ต่อเมื่อคุณกลายเป็นสัตว์เลือดอุ่นเพราะร่างกายมีการพัฒนาระบบทางเดินอาหาร <br> และอากาศภายในช่องปากทำให้สามารถหายใจได้สะดวกขึ้น ซึ่งเส้นทางที่คุณเลือกนั้นไม่มีการพัฒนาระบบร่างกาย <br>จึงทำให้คุณมีวิวัฒนาการไปเป็นสัตว์เลื้อยคลาน เช่น จิ้งจก, งู และจระเข้ ในปัจจุบัน"
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
                where: -300,
                answer: "ทางผิวหนัง",
                alt_pic: "image/Monkeys.png",
                wrong: "วิวัฒนาการขั้นต่อไปของคุณจะขึ้นไปอาศัยอยู่บนต้นไม้เป็นส่วนใหญ่ทำให้คุณเคลื่อนไหวร่างกายเยอะขึ้น จึงจำเป็นที่จะต้องมีระบบระบายความร้อนที่ดี <br>และเนื่องจากการระบายความร้อนทางอุ้งเท้ามีประสิทธิภาพต่ำซึ่งเป็นไปได้ยากที่คุณจะขึ้นไปหาอาหารตามต้นไม้ <br> คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์เลี้ยงลูกด้วยนมที่อาศัยอยู่บนพื้นดินในปัจจุบัน เช่น จิงโจ้,ตุ่นปากเป็ด และช้าง"

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
                answer: "ลงมาพื้นดิน",
                where: -500,
                wrong: "เนื่องจากที่อยู่ที่คุณเลือกส่งผลให้คุณยังคงต้องเดินแบบสี่เท้าและใช้มือกับหางในการห้อยโหนอยู่ <br> ทำให้คุณไม่มีการปรับตัวตามแบบบรรพบุรุษมนุษย์ที่เดินด้วยสองเท้าบนพื้นดิน <br>คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์สี่เท้าจำพวกลิง เช่น ลีเมอร์, ชะนี และกอริลล่า ในปัจจุบัน"
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
                where: -700,
                answer: "ใช้อุปกรณ์ล่าสัตว์",
                wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณต้องสูญพันธุ์ไปในที่สุด ลองสร้างเครื่องมือที่จะเอามาใช้ในการหาอาหารดูดีไหม?"
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
                where: -900,
                answer: "อยากหาเพื่อน",
                wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณต้องสูญพันธุ์ไปในที่สุด ลองหาเพื่อนดูดีไหม?"
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
                answer: "หายารักษา",
                where: -1100,
                wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณสูญพันธุ์ไปในที่สุด หากคุณไม่สบายลองออกไปหาสมุนไพรมากินเพื่อบรรเทาอาการดูไหม?"
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
                where: -1300,
                answer: "คิดค้นภาษามาคุยกัน",
                wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br>ทำให้คุณสูญพันธุ์ไปในที่สุด อยู่แบบนี้จะทำให้ใช้ชีวิตยากนะลองคิดภาษาที่ทำให้คุยกันรู้เรื่องมากขึ้นดูไหม?"
            },
            {
                id: 10,
                where: -1500,
                name: "มนุษย์ยุคหิน",
                desc: "เย้! คุณได้เป็นมนุษย์",
                text1: "-",
                text2: "-",
                name_img: "",
                s_wh: "400",
                s_ht: "300",
                answer: "",
                wrong: ""
            }
        ]
    }
    // document.querySelector('div#description').onload = setDes();



function sizeimg() {
    document.getElementById("main_picture").height = 130
    setTimeout(function() {
        document.getElementById('intro').style.opacity = 100
    }, 500)
}

function moveGround() {
    if (count == 1) {
        document.querySelector("#groundWater").style.bottom = "0%"

    } else if (count == 2) {
        count++
    } else {
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
        num += 1
        image = document.querySelector('IMG.character');
        btnA = document.querySelector('BUTTON#routeA');
        btnB = document.querySelector('BUTTON#routeB');
        DivFinal = document.querySelector('DIV#final');
        btnRestart = document.querySelector('BUTTON#text_restart');
        console.log(road)
        moveGround()
        if (character.chr[num].id == 10) {
            document.getElementById('routeA').style.display = 'none'
            document.getElementById('routeB').style.display = 'none'
            document.getElementById('text_restart').style.top = '85%'
            document.getElementById('final').style.display = 'block'
            setTimeout(function() {
                document.getElementById('main_picture').style.display = 'none'
                document.getElementById('text_restart').style.opacity = 1
                document.getElementById('final').style.opacity = 1
                document.getElementById('description').style.opacity = 0
                document.getElementById('more_info').style.opacity = 0
            }, 5500)

        }

        image.classList.toggle("hid");
        btnA.classList.toggle("hid");
        btnB.classList.toggle("hid");

        document.getElementById('description').style.opacity = 0
        document.getElementById('more_info').style.opacity = 0
        setTimeout(function() {
            description.innerHTML = character.chr[num].desc + ""
            routeA.innerHTML = character.chr[num].text1 + ""
            routeB.innerHTML = character.chr[num].text2 + ""
        }, 1800)
        setTimeout(function() {
            document.getElementById('description').style.opacity = 1

        }, 2500)
        setTimeout(function() {
            moveGround()
        }, 5000)
        setTimeout(function() {
            image.getAttribute('src');
            image.setAttribute('src', character.chr[num].name_img);
            document.getElementById("main_picture").height = character.chr[num].s_ht
            image.classList.toggle("hid");
            btnA.classList.toggle("hid");
            btnB.classList.toggle("hid");
            document.getElementById('more_info').style.opacity = 1

        }, 6000)

        if (character.chr[num].id != 10) {}

    } else {
        ending()
    }

}

function ending() {
    description.style.opacity = 0
    document.getElementById('description').style.color = '#b54949'
    document.getElementById('ground').style.opacity = 0
    document.querySelector("#groundWater").style.bottom = "-100%"
    document.getElementById('water').style.height = '0%'
        // document.getElementById('more_info').style.opacity = 0

    setTimeout(function() {
        description.innerHTML = character.chr[num].wrong
        document.getElementById('main_picture').style.display = 'none'
        document.getElementById('sky_obj').style.opacity = 0
        document.getElementById('label_info').style.display = 'none'
        document.getElementById('bg-sky').style.backgroundColor = '#232323'
        document.getElementById('main_content').style.opacity = 0
    }, 500)
    setTimeout(function() {
        description.style.opacity = 1
        image.setAttribute('src', character.chr[num].alt_pic);
        document.getElementById('routeA').style.display = 'none'
        document.getElementById('routeB').style.display = 'none'
    }, 600)
    setTimeout(function() {
        document.getElementById('main_picture').style.display = 'block'
        document.getElementById('restart').style.display = 'block'
        document.getElementById('retry').style.display = 'block'
    }, 3000)
}

function start() {

    if (count == 0) {
        count++
        document.getElementsByClassName('page5')[0].style.marginTop += -20 + 'em'
        document.getElementById('water').style.height = '100%'
        document.getElementById('scroll').style.top = '70%'
        document.getElementById('scroll_dialog').innerHTML = "ณ ขณะนี้คุณกำลังถูกปลาที่ตัวใหญ่กว่าทำร้ายและคุณก็หาอาหารไม่ค่อยได้คุณจะทำยังไง"
    } else {
        document.querySelector("#groundWater").style.bottom = "0%"
        document.getElementById('scroll').style.top = '-10%'
        document.getElementById('contain').style.opacity = 100
        setTimeout(function() {
            document.getElementById('description').style.opacity = 1
            document.getElementById('more_info').style.opacity = 1
        }, 2500)
    }

}

function close_info() {
    if (switch_info == 0) {
        info.style.display = "block"
        switch_info++
    } else {
        info.style.display = "none"
        switch_info = 0
    }
}
window.addEventListener(

    "scroll",
    () => {
        console.log(window.pageYOffset)
        if (window.pageYOffset >= 300) {
            document.getElementById('intro').style.marginTop += -16 + 'em'
            document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลงเพื่อไปหน้าต่อไป</b>'
            console.log(document.getElementById('bg-sky').style.background)
        }
        if (window.pageYOffset >= 800) {
            document.getElementsByClassName('dialog')[0].style.marginTop += -14 + 'em'
            document.getElementById('bg-sky').style.background = "hsl(195, 87%,24%)"
        }
        if (window.pageYOffset >= 1300) {
            document.getElementsByClassName('page1')[0].style.marginTop += -22 + 'em'
            document.getElementById('bg-sky').style.background = "hsl(195, 87%,36%)"
        }
        if (window.pageYOffset >= 1800) {
            document.getElementsByClassName('page2')[0].style.marginTop += -17 + 'em'
            document.getElementById('bg-sky').style.background = "hsl(195, 87%,48%)"
        }
        if (window.pageYOffset >= 2300) {
            document.getElementsByClassName('page3')[0].style.marginTop += -22 + 'em'
            document.getElementById('bg-sky').style.background = "hsl(195, 87%,60%)"
        }
        if (window.pageYOffset >= 2800) {
            document.getElementsByClassName('page4')[0].style.marginTop += -17 + 'em'
            document.getElementById('bg-sky').style.background = "hsl(195, 87%,72%)"
            document.getElementById('water').style.bottom = 0 + '%'
            document.getElementById('scroll_dialog').innerHTML = '<b>มาเริ่มวิวัฒนาการของคุณกัน</b>'
            image = document.querySelector('IMG#next_icon')
            image.getAttribute('src')
            image.setAttribute('src', 'image/down_btn.svg')
        }
    },

);

function select(a) {
    console.log(a.id.split("_")[1])
    num = (a.id.split("_")[1]) - 1
    console.log(num)
    move_to(num)
    document.getElementById('final').style.opacity = 0
    document.getElementById('final').style.zIndex = -1
    document.getElementById('text_restart').style.opacity = 0
}

function move_to(num) {
    setTimeout(function() {
        description.innerHTML = character.chr[num].desc + ""
        routeA.innerHTML = character.chr[num].text1 + ""
        routeB.innerHTML = character.chr[num].text2 + ""
    }, 3000)
    setTimeout(function() {
        document.getElementById('main_picture').style.display = 'block'
        document.getElementById("main_picture").height = character.chr[num].s_ht
        image.setAttribute('src', character.chr[num].name_img);
        document.getElementById('routeA').style.display = 'block'
        document.getElementById('routeB').style.display = 'block'
        document.getElementById('description').style.opacity = 1
        document.getElementById('more_info').style.opacity = 1
    }, 5500)
    setTimeout(function() {

        document.getElementById('description').style.opacity = 1
    }, 3500)
    setTimeout(function() {
        moveGround()
    }, 5000)

    road = character.chr[num].where
    document.querySelector("#ground").style.left = road + "%"

}

// โค้ดกดเริ่มใหม่

function restart() {
    if (num == 1) {

    } else {
        move_to(num)
        document.getElementById('restart').style.display = 'none'
        document.getElementById('retry').style.display = 'none'
        document.getElementById('ground').style.opacity = 1
        document.getElementById('water').style.height = 0 + "%"
        document.getElementById('bg-sky').style.backgroundColor = '#86BBD8'
        document.getElementById('main_picture').style.opacity = 0
        document.getElementById('description').style.opacity = 0
        description.innerHTML = character.chr[num].wrong
            // document.getElementById('more_info').style.opacity = 0

        setTimeout(function() {
            document.getElementById('sky_obj').style.opacity = 1
            document.getElementById('label_info').style.opacity = 1
            document.getElementById('main_content').style.opacity = 0


        }, 100)
        setTimeout(function() {
            document.getElementById('routeA').style.display = 'block'
            document.getElementById('routeB').style.display = 'block'
            document.getElementById('main_picture').style.opacity = 1

        }, 6000)
    }
}