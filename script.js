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
        name: "Coelacanth",
        desc: "ณ ขณะนี้คุณกำลังถูกปลาที่ตัวใหญ่กว่าทำร้าย และคุณก็หาอาหารไม่ค่อยได้คุณจะทำยังไง",
        text1: "หนีขึ้นบก",
        text2: "อยู่ในน้ำต่อ",
        name_img: "image/Coelacanth.png",
        s_wh: "400",
        s_ht: "150",
        year: "ยุคซูลลิเรียน (443 ล้านปีก่อน)",
        answer: "หนีขึ้นบก",
        info: "Coelacanth เป็นสิ่งมีชีวิตยุคก่อนไดโนเสาร์และสัตว์เลื้อยคลาน ปลาซีลาแคนท์คือบรรพบุรุษของสัตว์โลกที่มีกระดูกสันหลังทุกชนิด ถือกำเนิดครั้งแรกบนโลกในยุคซูลลิเรียนเมื่อ 443 ล้านปีก่อนและได้ขยายเผ่าพันธุ์ไปจนถึงยุคดีโวเนียนซึ่งเป็นยุคที่มีปลาชุกชุมจนได้ชื่อว่าเป็นยุคแห่งปลา (Age of Fish) พวกมันมีครีบเป็นพลูอยู่ที่ทรวงอก ครีบหางแตกออกแยกเป็น 3 พลู มีเกล็ดที่บางกว่าเกล็ดปลาพวกคอสมอยด์ มีอวัยวะพิเศษสำหรับตอบรับทางไฟฟ้าอยู่ทางด้านหน้าของกะโหลกที่อาจจะใช้ช่วยในการตรวจจับเหยื่อ",
        where: 100,
        wrong: "เนื่องจากในยุคดีโวเนียนมีประชากรสัตว์มีกระดูกสันหลังในน้ำจำนวนมากทำให้ขาดแคลนอาหาร <br> ปลาซีลาแคนท์จึงมีวิวัฒนาการมาจากการเริ่มหนีขึ้นไปหาอาหารบนบก ถ้าคุณเลือกที่จะอาศัยอยู่ในน้ำต่อคุณจะต้องพยายามเอาตัวรอดโดยการแย่งชิงอาหารจากปลาตัวอื่นๆ <br> คุณจึงมีวิวัฒนาการไปเป็นปลาขนาดใหญ่ในปัจจุบัน",
        alt_pic: "image/Coelacanth_.png",
        info_size: [-2, 40, 100],
        pos_info: [75, 41],
        text_to_next:"คุณมาถูกทางแล้ว การหนีขึ้นบกทำให้คุณมีแหล่งอาหารเพิ่มขึ้นอีกเป็นจำนวนมากทำให้คุณมีชีวิตรอดต่อไปได้"
    },
    {
        id: 2,
        name: "Ichthyostega",
        desc: "ตอนนี้คุณอยู่บนบกแล้ว น้ำในร่างกายของคุณกำลังระเหยไปจนหมดเนื่องจากสภาพอากาศที่เปลี่ยนแปลงไปจากในน้ำ คุณอยากจะมีผิวหนังแบบไหน",
        text1: "แห้งและหยาบกระด้าง",
        text2: "ลื่นและเป็นเมือก",
        name_img: "image/Ichthyostegaa.png",
        s_wh: "400",
        s_ht: "160",
        year: "ยุคดีโวเนียน (417 ล้านปีก่อน)",
        answer: "แห้งและหยาบกระด้าง",
        info: "Ichthyostega เป็นหนึ่งในสัตว์มีกระดูกสันหลังสี่ขาตัวแรกในบันทึกฟอสซิล มีปอดและแขนขาที่ช่วยเดินทางในน้ำตื้น สัตว์สะเทินบกกลุ่มแรกๆ มีเกล็ดคลุมตัว ปัญหาที่ต้องอยู่บนบกคือสภาวะแห้งขาดน้ำ เมื่อตัวแห้งมากๆ ก็จะลงไปในน้ำเพื่อเพิ่มความชุ่มชื้น ในเรื่องการหายใจจากเดิมตอนเป็นสัตว์น้ำหายใจโดยใช้ออกซิเจนในน้ำผ่านทางเหงือก เมื่อมาอยู่บนบกจึงวิวัฒนาการ การหายใจมาเป็นปอดโดยใช้ออกซิเจนในอากาศ",
        where: 100,
        alt_pic: "image/eleg.png",
        info_size: [-2, 35, 160],
        pos_info: [75, 45],
        text_to_next:"คุณมาถูกทางแล้ว ผิวหนังของคุณจะช่วยป้องกันการระเหยของน้ำออกจากร่างกายทำให้คุณสามารถหาอาหารอยู่บนบกได้เป็นเวลานาน",
        wrong: "เนื่องจากผิวหนังของคุณไม่สามารถป้องกันการระเหยของน้ำ ออกจากร่างกายได้คุณจึงต้องอาศัยอยู่ใกล้แหล่งน้ำเพื่อไม่ให้ผิวหนังแห้งเพราะถ้าผิวแห้งคุณจะหายใจไม่ออก <br> และคุณยังต้องใช้แหล่งน้ำเป็นตัวกลางในการผสมพันธุ์ด้วย <br>คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์ครึ่งบกครึ่งน้ำ เช่น กบ, ซาลามานเดอร์ และเขียดงู ในปัจจุบัน"
    },
    {
        id: 3,
        name: "Synapsids",
        desc: "คุณกำลังก้าวเข้าสู่การเปลี่ยนแปลงครั้งยิ่งใหญ่ ถ้าคุณต้องมีลูกคุณอยากลองออกลูกเป็นอะไร",
        text1: "ออกลูกเป็นตัว",
        text2: "ออกลูกเป็นไข่",
        name_img: "image/Synapsids.png",
        s_wh: "400",
        s_ht: "150",
        year: "ยุคคาร์บอนิเฟอรัส (354 ล้านปีก่อน)",
        where: -100,
        answer: "ออกลูกเป็นตัว",
        info: "Synapsids เป็นกลุ่มของสัตว์ที่รวมทั้งสัตว์เลี้ยงลูกด้วยน้ำนมและสัตว์อื่นทุกชนิดที่ใกล้ชิดกับสัตว์เลี้ยงลูกด้วยน้ำนม  คุณสมบัติที่โดดเด่นของซินแคปไซด์คือการมีรูเพียงรูเดียวในแต่ละด้านของกะโหลกศีรษะรอบกระดูกขมับซึ่งคิดเป็นสองรูทั้งหมด มีฟันชนิดพิเศษที่เรียกว่าฟันเขี้ยวและฟันกราม การมีฟันชนิดต่าง ๆ และยังมีเส้นผมบนผิวหนังและคุณสมบัติของสัตว์เลี้ยงลูกด้วยนมอื่น ๆ",
        alt_pic: "image/Amadil.png",
        info_size: [-3, 35, 120],
        pos_info: [75, 45],
        text_to_next:"คุณมาถูกทางแล้ว คุณได้มีวิวัฒนาการมาเป็นสัตว์เลือดอุ่น โดยมีการพัฒนาระบบทางเดินอาหาร และทางเดินหายใจซึ่งมีประโยชน์ในการล่า",
        wrong: "วิวัฒนาการของคุณจะเกิดขึ้นได้ก็ต่อเมื่อคุณกลายเป็นสัตว์เลือดอุ่นเพราะร่างกายมีการพัฒนาระบบทางเดินอาหาร <br> และอากาศภายในช่องปากทำให้สามารถหายใจได้สะดวกขึ้น ซึ่งเส้นทางที่คุณเลือกนั้นไม่มีการพัฒนาระบบร่างกาย <br>จึงทำให้คุณมีวิวัฒนาการไปเป็นสัตว์เลื้อยคลาน เช่น จิ้งจก, งู และจระเข้ ในปัจจุบัน"
    },
    {
        id: 4,
        name: "Therapsid",
        desc: "ตอนนี้อากาศบนบกร้อนจังเลย ถ้าคุณจะต้องระบายความร้อนออกจากร่างกายคุณอยากจะระบายออกทางไหน",
        text1: "ทางอุ้งเท้า",
        text2: "ทางผิวหนัง",
        name_img: "image/eutherain.png",
        s_wh: "400",
        s_ht: "150",
        year: "ยุคเพอร์เมียน (295 ล้านปีก่อน)",
        where: -300,
        answer: "ทางผิวหนัง",
        info: "Therapsid เป็นสัตว์เลื้อยคลานที่คล้ายสัตว์เลี้ยงลูกด้วยนม โดยเริ่มพบในยุคเพอร์เมียนและไทรแอสซิก (290-206 ล้านปีก่อน) ในยุคแรกๆยังคงมีขนาดเล็ก จนกระทั่งเมื่อไดโนเสาร์สูญพันธุ์ในช่วงปลายยุคครีเทเชียส สัตว์เลี้ยงลูกด้วยนมก็วิวัฒนาการและแพร่กระจายอย่างต่อเนื่องตั้งแต่ต้นมหายุคซีโนโซอิกจนมีอิทธิพลสูงสุดในปัจจุบัน<br><b>โมโนทรีม</b> (monotreme) มีการออกลูกเป็นไข่โมโนทรีมที่ยังคงมีชีวิตจนกระทั่งถึงปัจจุบันได้แก่ ตัวกินมดมีหนามและตุ่นปากเป็ด<br><b>มาร์ซูเพียล</b> (marsupial) สัตว์เลี้ยงลูกด้วยนมกลุ่มนี้จะออกลูกเป็นตัวและเลี้ยงดูลูกด้วยน้ำนมในถุงหน้าท้อง สัตว์ที่มีถุงท้องในปัจจุบันที่วิวัฒนาการมาจากพวกมาร์ซูเพียล ได้แก่ จิงโจ้ โคอาล่า<br><b>ยูเทเรียน</b> (eutherian) คือพวกสัตว์เลี้ยงลูกด้วยนมที่มีรก ลักษณะที่สำคัญของสัตว์มีรกคือการที่มีรกเพื่อเลี้ยงดูตัวอ่อนในมดลูก และมีลักษณะของโครงร่างที่วิวัฒนาการไป สัตว์ในกลุ่มนี้เป็นสัตว์เลี้ยงลูกด้วยนมส่วนใหญ่ เช่น ช้าง ม้า ยีราฟ",
        alt_pic: "image/Monkeys.png",
        info_size: [0, 30, 220],
        pos_info: [75, 43],
        text_to_next:"คุณมาถูกทางแล้ว คุณได้มีวิวัฒนาการมาเป็นสิ่งมีชีวิตที่อาศัยอยู่บนต้นไม้มีซึ่งมีการเคลื่อนไหวร่างกายอยู่บ่อยๆ ซึ่งเส้นทางที่คุณเลือกจะทำให้คุณมีระบบระบายความร้อนที่ดี",
        wrong: "วิวัฒนาการขั้นต่อไปของคุณจะขึ้นไปอาศัยอยู่บนต้นไม้เป็นส่วนใหญ่ทำให้คุณเคลื่อนไหวร่างกายเยอะขึ้น จึงจำเป็นที่จะต้องมีระบบระบายความร้อนที่ดี <br>และเนื่องจากการระบายความร้อนทางอุ้งเท้ามีประสิทธิภาพต่ำซึ่งเป็นไปได้ยากที่คุณจะขึ้นไปหาอาหารตามต้นไม้ <br> คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์เลี้ยงลูกด้วยนมที่อาศัยอยู่บนพื้นดินในปัจจุบัน เช่น จิงโจ้,ตุ่นปากเป็ด และช้าง"

    },

    {
        id: 5,
        name: "Primates",
        desc: "ในช่วงนี้คุณได้ใช้ชีวิตบนต้นไม้เป็นเวลานาน เบื่อมั้ย? ที่จะต้องอยู่แต่ข้างบน ถ้าเบื่อคุณจะทำยังไง",
        text1: "อยู่บนต้นไม้ต่อ",
        text2: "ลงมาพื้นดิน",
        name_img: "image/Primates.png",
        s_wh: "400",
        s_ht: "200",
        year: "ยุคเทอร์เชียรี (65 ล้านปีก่อน)",
        answer: "ลงมาพื้นดิน",
        info: "Primates เป็นกลุ่มของสัตว์เลี้ยงลูกด้วยนมที่มีพัฒนาการสูงที่สุด สืบเชื้อสายมาจากสัตว์เลี้ยงลูกด้วยนมที่มีรก อาศัยและห้อยโหนอยู่บนต้นไม้เป็นส่วนใหญ่ สัตว์ในกลุ่มไพรเมต ได้แก่ กระแต ลิงลม ลิง ชะนี อุรังอุตัง กอริลล่า ชิมแพนซีและมนุษย์<br>มีวิวัฒนาการแยกเป็นสองสาย ได้แก่ <b>โพรซิเมียน</b> (prosimian)เป็นสัตว์กลุ่มไพรเมตกลุ่มแรกๆที่อาศัยอยู่บนต้นไม้ ได้แก่ นางอายหรือลิงลม และลิงทาร์ซิเออร์ (tarsier monkey) อีกสายหนึ่งคือ <b>แอนโทรพอยด์</b> (anthropoid)  ได้แก่ ลิงมีหาง ลิงไม่มีหางและมนุษย์<br>ลิงมีหาง สามารถแยกเป็นลิงโลกใหม่และลิงโลกเก่าซึ่งแตกต่างกันในการใช้หางเพื่อห้อยโหน ลิงโลกใหม่ เช่น ลิงสไปเดอร์ (spider monkey) ลิงทาร์มาริน (tarmarins) เป็นต้น ส่วนลิงโลกเช่น ลิงกัง ลิงแสม ลิงบาบูน เป็นต้น<br>ลิงไม่มีหางหรือเอพ (ape) มีสายวิวัฒนาการมาจากลิงโลกเก่า แบ่งได้เป็น 4 กลุ่มใหญ่ ได้แก่ ชะนี อุรังอุตัง กอริลล่า และชิมแพนซี สันนิษฐานได้ว่าบรรพบุรุษของมนุษย์ วิวัฒนาการจากลิงไม่มีหางเมื่อประมาณ 7.5-4 ล้านปีที่ผ่านมา",
        where: -500,
        info_size: [-2, 30, 200],
        pos_info: [77, 43],
        text_to_next:"คุณมาถูกทางแล้ว การลงมาใช้ชีวิตอยู่บนพื้นดินจะทำให้ร่างกายของคุณถูกพัฒนาไปเป็นสิ่งมีชีวิตที่เดิน 2 ขาซึ่งเป็นต้นแบบของมนุษย์ในปัจจุบัน",
        wrong: "เนื่องจากที่อยู่ที่คุณเลือกส่งผลให้คุณยังคงต้องเดินแบบสี่เท้าและใช้มือกับหางในการห้อยโหนอยู่ <br> ทำให้คุณไม่มีการปรับตัวตามแบบบรรพบุรุษมนุษย์ที่เดินด้วยสองเท้าบนพื้นดิน <br>คุณจึงจะมีวิวัฒนาการไปเป็นสัตว์สี่เท้าจำพวกลิง เช่น ลีเมอร์, ชะนี และกอริลล่า ในปัจจุบัน"
    },
    {
        id: 6,
        name: "Australopithecus africanus",
        desc: " ถึงเวลาอาหารแล้วหิวจัง คุณอยากจะใช้วิธีไหนในการหาอาหาร",
        text1: "จับด้วยมือเปล่า",
        text2: "ใช้อุปกรณ์ล่าสัตว์",
        name_img: "image/australopithecus.png",
        s_wh: "400",
        s_ht: "300",
        year: "ยุคเทอร์เชียรี (35 ล้านปีก่อน)",
        where: -700,
        answer: "ใช้อุปกรณ์ล่าสัตว์",
        info_size: [-2, 20, 350],
        pos_info: [85, 40],
        text_to_next:"คุณมาถูกทางแล้ว คุณมีวิวัฒนาการทางความคิดมากขึ้น ความสามารถในการประดิษฐ์อุปกรณ์ต่างๆขึ้นมาใช้ในชีวิตประจำวันจะทำให้คุณดำรงชีวิตได้ง่ายขึ้น",
        info: "Australopithecus africanus เป็นหนึ่งในสกุลของโฮมินิดส์ซึ่งเป็นสายพันธุ์บรรพบุรุษของมนุษย์รุ่นแรก เรียกอีกอย่างว่า มนุษย์วานร ร่างกายส่วนบนตั้งแต่คอขึ้นไปมีลักษณะคล้ายลิงไม่มีหาง เดินสองขาลำตัวตรง สมองเล็กขนาดประมาณ 494-600 ลบ.ซม. มีความสูงเพียง 1.4 เมตร ส่วนหน้ามีลักษณะแบน ฟันหน้ามีขนาดเล็ก และเป็นโฮมินิดส์ยุกแรกที่เริ่มมีการลงมาใช้ชีวิตและหาอาหารบนพื้นดิน ส่วนใหญ่อาศัยอยู่ในเขตประเทศแทนซาเนียและเอธิโอเปีย",
        wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณต้องสูญพันธุ์ไปในที่สุด ลองสร้างเครื่องมือที่จะเอามาใช้ในการหาอาหารดูดีไหม?"
    },
    {
        id: 7,
        name: "Homo habilis",
        desc: "ถ้าตอนนี้คุณต้องใช้ชีวิตอยู่ตัวคนเดียว คุณจะอยากลองหาเพื่อนดูมั้ย",
        text1: "อยากหาเพื่อน",
        text2: "อยากอยู่คนเดียว",
        name_img: "image/homo_habillis.png",
        s_wh: "400",
        s_ht: "300",
        year: "ยุคเทอร์เชียรี (30 ล้านปีก่อน)",
        where: -900,
        answer: "อยากหาเพื่อน",
        info_size: [-2, 20, 350],
        pos_info: [85, 44],
        text_to_next:"คุณมาถูกทางแล้ว การที่คุณรู้จักเข้าสังคมทำให้มีวัฒนธรรม จะทำให้เกิดการอยู่รวมกันเป็นกลุ่มและเกิดช่วยเหลือซึ่งกันและกัน",
        info: "Homo habilis ขนาดสมองเท่ากับครึ่งหนึ่งของมนุษย์ในปัจจุบัน มีขนาดใบหน้าและฟันที่ใหญ่พอสมควร ลักษณะของฟันแสดงให้เห็นชัดเจนว่ามีการกินเนื้อสัตว์เป็นอาหาร Homo habilis เป็นโฮมินิดส์พวกแรกที่รู้จักการนำหินมาประดิษฐ์เป็นเครื่องมือเครื่องใช้ในชีวิตประจำวัน เช่น หอกที่ใช้ในการล่าสัตว์ อาศัยอยู่ตามพื้นที่ป่าและเขตทุ่งหญ้า",
        wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณต้องสูญพันธุ์ไปในที่สุด ลองหาเพื่อนดูดีไหม?"
    },
    {
        id: 8,
        name: "Homo  erectus",
        desc: "ช่วงนี้อากาศเปลี่ยนแปลงบ่อยจนคุณรู้สึกป่วย คุณจะอยากลองหายาสมุนไพรมารักษาอาการป่วยของคุณดูมั้ย",
        text1: "หายารักษา",
        text2: "ปล่อยให้ป่วยต่อไป",
        name_img: "image/homo_erectus.png",
        s_wh: "400",
        s_ht: "300",
        year: "ยุคเทอร์เชียรี (24 ล้านปีก่อน)",
        answer: "หายารักษา",
        info_size: [-2, 20, 350],
        pos_info: [85, 42],
        text_to_next:"คุณมาถูกทางแล้ว การคิดค้นหาสมุนไพรเพื่อนำมาทำเป็นยารักษาโรคช่วยให้ร่างกายของคุณแข็งแรงขึ้นและเป็นการลดความเสี่ยงในการการป่วยตายของเผ่าพันธุ์คุณ",
        info: "Homo  erectus มีขนาดสมองใหญ่ขึ้นจาก Homo habilis ขนาดประมาณ3ใน4ของมนุษย์ในปัจจุบัน เริ่มรู้จักการใช้ไฟ หาอาหารโดยการล่าสัตว์กันเป็นกลุ่มและเก็บอาหารป่า เริ่มมีสังคมและวัฒนธรรม Homo  erectus เป็นโฮมินิดส์กลุ่มแรกที่เดินทางออกจากทวีปแอฟริกาไปยังดินแดนอื่นๆ เช่น อินโดนีเซีย จีน และยุโรป",
        where: -1100,
        wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br> ทำให้คุณสูญพันธุ์ไปในที่สุด หากคุณไม่สบายลองออกไปหาสมุนไพรมากินเพื่อบรรเทาอาการดูไหม?"
    },
    {
        id: 9,
        name: "Homo neanderthalensis",
        desc: "อยู่กับเพื่อนมาตั้งนานยังคุยกันไม่รู้เรื่องเลย คุณอยากจะมีภาษาที่เอาไว้ใช้สื่อสารกับเพื่อนๆของคุณมั้ย",
        text1: "ไม่ต้องมีภาษาหรอก",
        text2: "คิดค้นภาษามาคุยกัน",
        name_img: "image/homo_neanderthalensis.png",
        s_wh: "400",
        s_ht: "300",
        year: "ยุคควอทเทอร์นารี (100,000 ปีก่อน)",
        where: -1300,
        answer: "คิดค้นภาษามาคุยกัน",
        info_size: [-2, 20, 350],
        pos_info: [85, 40],
        text_to_next:"คุณมาถูกทางแล้ว การสื่อสารเป็นสื่อกลางสำคัญที่จะทำให้สิ่งมีชีวิตทุกชนิดสามารถดำรงชีวิตต่อไปได้",
        info: "Homo neanderthalensis มีชีวิตอยู่ในช่วงที่พื้นที่น้ำส่วนใหญ่ในโลกกลายเป็นน้ำแข็ง มีส่วนของกะโหลกกว้างสุดอยู่ที่่ระดับเหนือรูหู มีขากรรไกรล่างสั้น หน้าผากเป็นสันนูน ล่าสัตว์เพื่อนำขนมาเป็นเครื่องนุ่งห่ม มีการคิดค้นสมุนไพรที่ใช้ในการรักษาโรค มีการประดิษฐ์เครื่องมือเครื่องใช้โดยใช้หินขัดเป็นรูปร่างต่างๆ มีพิธีกรรมและความเชื่อโดยร่างของคนที่ตายแล้วจะถูกนำไปฝังพร้อมกับช่อดอกไม้ อาหาร และอาวุธ Homo neanderthalensis จะอาศัยอยู่ตามถ้ำ หุบเขา และที่ราบ ในเขตยุโรปตะวันออกกลาง แอฟริกา ไปจนถึงจีน",
        wrong: "เนื่องจากเส้นทางที่คุณเลือกทำให้ไม่สามารถปรับตัวให้เข้ากับสภาพแวดล้อมได้และยากที่จะเอาชีวิตรอดต่อไป <br>ทำให้คุณสูญพันธุ์ไปในที่สุด อยู่แบบนี้จะทำให้ใช้ชีวิตยากนะลองคิดภาษาที่ทำให้คุยกันรู้เรื่องมากขึ้นดูไหม?"
    },
    {
        id: 10,
        where: -1500,
        name: "Homo sapiens",
        desc: "เย้! คุณได้เป็นมนุษย์",
        text1: "-",
        text2: "-",
        name_img: "",
        s_wh: "400",
        s_ht: "300",
        year: "ยุคควอทเทอร์นารี (10,000 ปีก่อน)",
        answer: "",
        info_size: [-2, 20, 350],
        pos_info: [75, 41],
        text_to_next:"",
        info: "Homo sapiens มีลักษณะคล้ายกับมนุษย์ในปัจจุบันมากที่สุด มีใบหน้าขนาดใหญ่ สมองขนาดพอๆกับมนุษย์ในปัจจุบันแต่กะโหลกยังไม่กลมเท่า มีเทคโนโลยีใหม่ในการทำเครื่องมือหิน มีเครื่องมือที่ทำจากกระดูก และมีงานวาดลวดลายศิลปะต่างๆตามถ้ำ Homo sapiens แบ่งออกเป็น 2 กลุ่ม ได้แก่ <b>Archaic Homo sapiens</b> และ <b>Modern Homo sapiens</b>",
        wrong: ""
    }
    ]
}
    // document.querySelector('div#description').onload = setDes();



function sizeimg() {
    document.getElementById("main_picture").height = 130
    document.getElementById('div_img_info').style.left = character.chr[num].info_size[0] + "%"
    document.getElementById('div_img_info').style.top = character.chr[num].info_size[1] + "%"
    document.getElementById('img_info').style.height = character.chr[num].info_size[2] + "px"
    document.getElementById('age').innerHTML = character.chr[num].year
    document.getElementById('more_info').style.top = character.chr[num].pos_info[0] + "%"
    document.getElementById('more_info').style.left = character.chr[num].pos_info[1] + "%"
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
        document.getElementById('div_img_info').style.left = character.chr[num].info_size[0] + "%"
        document.getElementById('div_img_info').style.top = character.chr[num].info_size[1] + "%"
        document.getElementById('img_info').style.height = character.chr[num].info_size[2] + "px"
        console.log(road)
        moveGround()
        if (character.chr[num].id == 10) {
            document.getElementById('more_info').style.display = 'none'
            document.getElementById('routeA').style.display = 'none'
            document.getElementById('routeB').style.display = 'none'
            document.getElementById('summary').style.display = 'block'

            setTimeout(function() {
                document.getElementById('summary').style.display = 'block'
                document.getElementById('summary').style.opacity = 1
                document.getElementById('main_picture').style.display = 'none'
                document.getElementById('description').style.opacity = 0

            }, 5700)


        }

        image.classList.toggle("hid");
        btnA.classList.toggle("hid");
        btnB.classList.toggle("hid");

        document.getElementById('description').style.opacity = 0
        document.getElementById('more_info').style.opacity = 0
        document.getElementById('img_info').style.height = character.chr[num].s_ht
        setTimeout(function() {
            description.innerHTML = character.chr[num].desc + ""
            routeA.innerHTML = character.chr[num].text1 + ""
            routeB.innerHTML = character.chr[num].text2 + ""
            type_info.innerHTML = character.chr[num].name + ""
            document.getElementById('age').innerHTML = character.chr[num].year
            text_info.innerHTML = character.chr[num].info + ""
            type_this_info.innerHTML = character.chr[num].name + ""
            document.getElementById("img_info").src = character.chr[num].name_img + "";
            document.getElementById('more_info').style.top = character.chr[num].pos_info[0] + "%"
            document.getElementById('more_info').style.left = character.chr[num].pos_info[1] + "%"
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

        // if (character.chr[num].id != 10) {}

    } else {
        ending()
    }

}

function ending() {
    description.style.opacity = 0
    document.getElementById('ground').style.opacity = 0
    document.querySelector("#groundWater").style.bottom = "-100%"
    document.getElementById('water').style.height = '0%'
    document.getElementById('more_info').style.opacity = 0


    setTimeout(function() {
        document.getElementById('main_picture').style.display = 'none'
        document.getElementById('sky_obj').style.opacity = 0
        document.getElementById('bg-sky').style.backgroundColor = '#232323'
    }, 500)
    setTimeout(function() {
        document.getElementById("main_picture").src = character.chr[num].alt_pic + ""
        document.getElementById('routeA').style.display = 'none'
        document.getElementById('routeB').style.display = 'none'
    }, 600)
    setTimeout(function() {
        document.getElementById("description").className = "h8 cl-white";
        description.innerHTML = character.chr[num].wrong
    }, 2500)
    setTimeout(function() {
        description.style.opacity = 1
        document.getElementById('main_picture').style.display = 'block'
        document.getElementById('restart').style.display = 'block'
        document.getElementById('retry').style.display = 'block'
    }, 4000)
}

function start() {
    document.getElementById('contain').style.display = 'flex';
    document.getElementById('skip').style.display = 'none';

    if (count == 0) {
        count++
        document.getElementsByClassName('page5')[0].style.marginTop += -20 + 'em'
        document.getElementById('water').style.height = '100%'
        document.getElementById('scroll').style.top = '70%'
        document.getElementById('scroll_dialog').innerHTML = "ณ ขณะนี้คุณกำลังถูกปลาที่ตัวใหญ่กว่าทำร้ายและคุณก็หาอาหารไม่ค่อยได้คุณจะทำยังไง"
        document.body.style.overflow = "hidden"
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
let stack = 1;
window.addEventListener(
    "scroll",
    () => {
        if (window.pageYOffset < 300 && stack > 1) {
            stack = 1;
            showPage('intro');
        }

        if (window.pageYOffset < 800 && stack > 2) {
            stack = 2;
            showPage('dialog');
        }

        if (window.pageYOffset < 1300 && stack > 3) {
            stack = 3;
            showPage('page1');
        }

        if (window.pageYOffset < 1800 && stack > 4) {
            stack = 4;
            showPage('page2');
        }

        if (window.pageYOffset < 2300 && stack > 5) {
            stack = 5;
            showPage('page3');
        }

        if (window.pageYOffset < 2800 && stack > 6) {
            stack = 6;
            showPage('page4');
            setTimeout(function() {
                document.getElementById('skip').style.opacity = 1
            }, 300)
            setTimeout(function() {
                document.getElementById('skip').style.display = 'block'
            }, 500)
        }

        if (window.pageYOffset >= 300) {
            stack = 2;
            marginPage('intro');
        }
        if (window.pageYOffset >= 800) {
            stack = 3;
            marginPage('dialog');
        }
        if (window.pageYOffset >= 1300) {
            stack = 4;
            marginPage('page1');
        }
        if (window.pageYOffset >= 1800) {
            stack = 5;
            marginPage('page2');
        }
        if (window.pageYOffset >= 2300) {
            stack = 6;
            marginPage('page3');
        }
        if (window.pageYOffset >= 2800) {
            stack = 7;
            marginPage('page4');
            setTimeout(function() {
                document.getElementById('skip').style.opacity = 0
            }, 300)
            setTimeout(function() {
                document.getElementById('skip').style.display = 'none'
            }, 500)

        }
    },
);

function marginPage(p) {

    if (p == 'intro') {
        document.getElementById('intro').style.marginTop = -16 + 'em';
        document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลงเพื่อไปหน้าต่อไป</b>';
    }

    if (p == 'dialog') {
        document.getElementsByClassName('dialog')[0].style.marginTop = -14 + 'em'
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,24%)"
    }

    if (p == 'page1') {
        document.getElementsByClassName('page1')[0].style.marginTop = -22 + 'em'
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,36%)"
    }

    if (p == 'page2') {
        document.getElementsByClassName('page2')[0].style.marginTop = -17 + 'em'
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,48%)"
    }

    if (p == 'page3') {
        document.getElementsByClassName('page3')[0].style.marginTop = -22 + 'em'
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,60%)"
    }

    if (p == 'page4') {
        document.getElementsByClassName('page4')[0].style.marginTop = -17 + 'em'
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,72%)"
        document.getElementById('water').style.bottom = 0 + '%'
        document.getElementById('scroll_dialog').innerHTML = '<b>มาเริ่มวิวัฒนาการของคุณกัน</b>'
        image = document.querySelector('IMG#next_icon')
        image.style.cursor = 'pointer';
        image.getAttribute('src')
        image.setAttribute('src', 'image/scroll-wh.png')
        image.getAttribute('onclick')
        image.setAttribute('onclick', 'start()')
    }
}

// โค้ดหน้าสุดท้าย กดเลือกตัวละครแล้วกลับมาหน้าเดิม
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
    if (num == 0) {
        //ใส่โค้ดน้ำตรงนี้
        document.getElementById('restart').style.display = 'none'
        document.getElementById('retry').style.display = 'none'
        description.innerHTML = character.chr[num].desc
        document.getElementById('ground').style.opacity = 1
        document.getElementById('bg-sky').style.backgroundColor = 'rgb(121, 215, 246)'
        document.getElementById('description').style.opacity = 0
        document.querySelector("#groundWater").style.bottom = "0%"
        document.getElementById('main_picture').style.opacity = 0
        document.getElementById('water').style.height = "100%"
        setTimeout(function() {
            document.getElementById("description").className = "h6 cl-white";
            document.getElementById("main_picture").src = character.chr[num].name_img + ""
        }, 1500)
        setTimeout(function() {
            document.getElementById('sky_obj').style.opacity = 1
        }, 2100)
        setTimeout(function() {
            document.getElementById('routeA').style.display = 'block'
            document.getElementById('routeB').style.display = 'block'
            document.getElementById('main_picture').style.opacity = 1
            document.getElementById('more_info').style.opacity = 1
            document.getElementById('description').style.opacity = 1
        }, 3700)
        road = character.chr[num].where
        document.querySelector("#ground").style.left = road + "%"
    } else {
        move_to(num)
        document.getElementById('restart').style.display = 'none'
        document.getElementById('retry').style.display = 'none'
        document.getElementById('ground').style.opacity = 1
        document.getElementById('water').style.height = 0 + "%"
        document.getElementById('bg-sky').style.backgroundColor = 'rgb(121, 215, 246)'
        document.getElementById('main_picture').style.opacity = 0
        document.getElementById('description').style.opacity = 0
        description.innerHTML = character.chr[num].wrong
            // document.getElementById('more_info').style.opacity = 0

        setTimeout(function() {
            document.getElementById('sky_obj').style.opacity = 1


        }, 100)

        setTimeout(function() {
            document.getElementById("description").className = "h6 cl-white";
            document.getElementById('routeA').style.display = 'block'
            document.getElementById('routeB').style.display = 'block'
            document.getElementById('main_picture').style.opacity = 1

        }, 6000)
    }
}

function showPage(p) {
    if (p == 'intro') {
        document.getElementById('intro').style.marginTop = 5 + 'em';
        document.getElementById('scroll_dialog').innerHTML = '<b style="color: rgb(59, 87, 129);">เลื่อนเมาส์ลง</b>เพื่อเริ่มวิวัฒนาการของคุณ</b>';
    }

    if (p == 'dialog') {
        document.getElementsByClassName('dialog')[0].style.marginTop = 75 + 'em';
        document.getElementById('bg-sky').style.background = "hsl(195, 87%, 12%)";
    }

    if (p == 'page1') {
        document.getElementsByClassName('page1')[0].style.marginTop = 75 + 'em';
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,24%)";
    }

    if (p == 'page2') {
        document.getElementsByClassName('page2')[0].style.marginTop = 75 + 'em';
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,36%)"
    }

    if (p == 'page3') {
        document.getElementsByClassName('page3')[0].style.marginTop = 75 + 'em';
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,48%)";
    }

    if (p == 'page4') {
        document.getElementsByClassName('page4')[0].style.marginTop = 75 + 'em';
        document.getElementById('water').style.bottom = -100 + '%';
        document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลงเพื่อไปหน้าต่อไป</b>';
        document.getElementById('bg-sky').style.background = "hsl(195, 87%,60%)";
        image = document.querySelector('IMG#next_icon');
        image.style.cursor = 'default';
        image.getAttribute('src');
        image.setAttribute('src', 'image/Scroll.svg');
        image.getAttribute('onclick');
        image.setAttribute('onclick', '');
    }
}

function skip() {
    window.scrollBy(0, 3000);
}

function select_all() {
    document.getElementById('final').style.display = 'block'
    setTimeout(function() {
        document.getElementById('final').style.opacity = 1
        document.getElementById('summary').style.opacity = 0
    }, 300)
    setTimeout(function() {
        document.getElementById('final').style.opacity = 1
        document.getElementById('summary').style.display = 'none'
    }, 500)
}