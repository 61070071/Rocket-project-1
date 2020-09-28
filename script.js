let num = 0
        let road = 0
        let vtc = 0
        let hrz = 0
        document.getElementById("main_picture").height = 200
        var character = {
            "chr": [
                {
                    id: 1,
                    name: "ปลา",
                    desc: "test1",
                    text1: "กินอาหารแบบพืช",
                    text2: "กินอาหารเนื้อ",
                    name_img: "image/Coelacanth.png",
                    s_wh :"400",
                    s_ht :"200"
                },
                {
                    id: 2,
                    name: "ตะกวด",
                    desc: "test2",
                    text1: "เลี้ยงลูกด้วยนม",
                    text2: "ไม่เลี้ยงลูกด้วยนม",
                    name_img: "image/Ichthyostegaa.png",
                    s_wh :"400",
                    s_ht :"200"
                },
                {
                    id: 3,
                    name: "ไดโนเสาร์",
                    desc: "test",
                    text1: "เหงื่อออกผิวหนัง",
                    text2: "เหงื่อออกอุ้งมือ",
                    name_img: "image/Synapsids.png",
                    s_wh :"400",
                    s_ht :"150"
                },
                {
                    id: 4,
                    name: "หนู",
                    desc: "test",
                    text1: "เหงื่อออกผิวหนัง",
                    text2: "เหงื่อออกอุ้งมือ",
                    name_img: "image/eutherain.png",
                    s_wh :"400",
                    s_ht :"200"
                },
                
                {
                    id: 5,
                    name: "ลิง",
                    desc: "test",
                    text1: "เหงื่อออกผิวหนัง",
                    text2: "เหงื่อออกอุ้งมือ",
                    name_img: "image/Primates.png",
                    s_wh :"400",
                    s_ht :"200"
                },
                {
                    id: 6,
                    name: "มนุษย์ยุคหินที่มีขนลิง",
                    desc: "test",
                    text1: "-",
                    text2: "-",
                    name_img: "image/australopithecus.png",
                    s_wh :"400",
                    s_ht :"300"
                },
                {
                    id: 7,
                    name: "มนุษย์ยุคหินเริ่มออกล่าเป็น",
                    desc: "test",
                    text1: "-",
                    text2: "-",
                    name_img: "image/homo_habillis.png",
                    s_wh :"400",
                    s_ht :"300"
                },
                {
                    id: 8,
                    name: "มนุษย์ยุคหินเริ่มทำอุปกรณ์เป็น",
                    desc: "test",
                    text1: "-",
                    text2: "-",
                    name_img: "image/homo_erectus.png",
                    s_wh :"400",
                    s_ht :"300"
                },
                {
                    id: 9,
                    name: "มนุษย์ยุคหินเริ่มจุดไฟเป็น",
                    desc: "test",
                    text1: "-",
                    text2: "-",
                    name_img: "image/homo_neanderthalensis.png",
                    s_wh :"400",
                    s_ht :"300"
                },
                {
                    id: 10,
                    name: "มนุษย์ยุคหิน",
                    desc: "test",
                    text1: "-",
                    text2: "-",
                    name_img: "image/homo_sapiens.png",
                    s_wh :"400",
                    s_ht :"300"
                }
            ]
        }
        // document.querySelector('div#description').onload = setDes();
        function sizeimg(){
            document.getElementById("main_picture").height = 150
        }
        function changeImg() {
            var posi_x = Math.floor(Math.random()* 10)
            num++
            road+=15
            if (road < 140) {
            center_text.style.opacity = 0
            image = document.querySelector('IMG.character');
            image.classList.toggle("hid");
            setTimeout(function () {
                image.getAttribute('src');
                image.setAttribute('src', character.chr[num].name_img);
                btn1.innerHTML = character.chr[num].text1 + ""
                btn2.innerHTML = character.chr[num].text2 + ""
                document.getElementById("main_picture").height = character.chr[num].s_ht
                image.classList.toggle("hid");
            }, 500)
                document.querySelector("#bg-ground").style.backgroundPosition = road+"% 50%"        
            }

            setTimeout(function () {
                center_text.style.opacity = 100
            }, 500)

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
