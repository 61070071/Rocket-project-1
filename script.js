// function changeImg() {
//     image = document.querySelector('IMG')
//     console.log(image)
// }
let num = 0
        let road = 0
        var character = {
            "chr": [
                {
                    id: 1,
                    name: "monkey",
                    desc: "test1",
                    text1: "กินอาหารแบบพืช",
                    text2: "กินอาหารเนื้อ",
                    name_img: "image/australopithecus.png"
                },
                {
                    id: 2,
                    name: "human",
                    desc: "test2",
                    text1: "เลี้ยงลูกด้วยนม",
                    text2: "ไม่เลี้ยงลูกด้วยนม",
                    name_img: "image/homo_habillis.png"
                },
                {
                    id: 3,
                    name: "human_monkey",
                    desc: "test",
                    text1: "เหงื่อออกผิวหนัง",
                    text2: "เหงื่อออกอุ้งมือ",
                    name_img: "image/homo_erectus.png"
                }
            ]
        }
        console.log()
        function changeImg() {
            
            num++
            road+=50
            center_text.style.opacity = 0
            image = document.querySelector('IMG.character');
            image.classList.toggle("hid");
            setTimeout(function () {
                image.getAttribute('src');
                image.setAttribute('src', character.chr[num].name_img);
                btn1.innerHTML = character.chr[num].text1 + ""
                btn2.innerHTML = character.chr[num].text2 + ""
                image.classList.toggle("hid");
            }, 500)
            document.querySelector("#bg-ground").style.backgroundPosition = road+"% 50%"
            
            setTimeout(function () {
                center_text.style.opacity = 100
            }, 500)

        }

        $(document).ready(function () {
            // $("#btn1").click(function () {
            //     $(".character").fadeIn('slow');
            // });
        });