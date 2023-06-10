let itemBox1=document.getElementById("q1")
let itemBox2=document.getElementById("q2")
let itemBox3=document.getElementById("q3")
let itemBox4=document.getElementById("p12")
let itemBox5=document.getElementById("p13")
let itemBox6=document.getElementById("p14")
function fun1(){
    itemBox1.style.background="#76AF87"
    itemBox2.style.background="#F5F5F5"
    itemBox3.style.background="#F5F5F5"

    itemBox4.style.color="#FFFFFF"
    itemBox5.style.color="#000000"
    itemBox6.style.color="#000000"
}
function fun2(){
    itemBox1.style.background="#F5F5F5"
    itemBox2.style.background="#76AF87"
    itemBox3.style.background="#F5F5F5"

    itemBox4.style.color="#000000"
    itemBox5.style.color="#FFFFFF"
    itemBox6.style.color="#000000"
}
function fun3(){
    itemBox1.style.background="#F5F5F5"
    itemBox2.style.background="#F5F5F5"
    itemBox3.style.background="#76AF87"

    itemBox4.style.color="#000000"
    itemBox5.style.color="#000000"
    itemBox6.style.color="#FFFFFF"
}
let coment = [
    "Я приєднався до цього сайту волонтерів і залишився дуже задоволений! Відмінна платформа для знаходження значних проектів та волонтерської роботи.",
"Сайт волонтерів виявився справжнім відкриттям для мене. Я знайшов тут безліч цікавих можливостей для волонтерської діяльності і повністю поринув у цю чудову справу." ,
"Дуже зручний та інтуїтивно зрозумілий сайт для волонтерів. Я легко знайшов проекти, які відповідають моїм інтересам, і вже встиг зробити корисні речі для суспільства." ,
"Сайт волонтерів допоміг мені розширити кругозір і зустріти чудових людей. Я радий, що став частиною цього волонтерського колективу." ,
"Неймовірно надихаючий досвід! Сайт волонтерів дав мені можливість не лише допомагати іншим, але й саморозвиватися. Рекомендую всім, хто хоче зробити світ кращим!" ,
"Сайт волонтерів став моїм надійним партнером у добрих справах. Завдяки цій платформі я знайшов проекти, які ідеально підходять для моїх навичок та захоплень." ,
"Велике спасибі сайту волонтерів за те, що допомагає нам зробити реальну зміну у світі. Я відчуваю, що моя допомога потрібна і значуща." ,
"Відмінна команда та чуйна підтримка! Сайт волонтерів завжди готовий відповісти на мої запитання та допомогти знайти відповідні волонтерські можливості." ,
"Сайт волонтерів - це місце, де можна знайти проекти на будь-який смак. Я вже брав участь у кількох і щоразу отримував величезне задоволення від свого внеску." ,
"Я вдячний цьому сайту волонтерів за те, що він створив простір, де ми можемо об'єднатися, щоб робити добрі справи разом. Безумовно, це потужний інструмент зміни світу.",
            ]
let random = Math.floor(Math.random()*(10-1+1))
let p = document.getElementById("p16")
p.innerText=coment[random]

let box = 1;
function next(){
    if(box==1){
        box=2;
        document.getElementById("first").style.marginLeft = "-100%";

    }
    else if(box==2){
        box=3;
        document.getElementById("first").style.marginLeft = "-200%";
        
    }
    else if(box==3){
        box=1;
        document.getElementById("first").style.marginLeft = "0%";
        
    }
}
function back(){
    if(box==2){
        box=1;
        document.getElementById("first").style.marginLeft = "0%";

    }
    else if(box==3){
        box=2;
        document.getElementById("first").style.marginLeft = "-100%";
        
    }
    else if(box==1){
        box=3;
        document.getElementById("first").style.marginLeft = "-200%";
        
    }
}
let eng = [
    "0 800 333 123 - HotLine",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]
let ukr = [
    "0 800 333 123 - HotLine",
    "АНГ",
    "УКР",
    "Єднаємось",
    "Допоможемо нашим захисникам — допожемо Україні",
    "Приєднуйтесь до волонтерства",
    "Перейти",
    "Хто ми і в чому наша сила?",
    "Українці - народ, який населяє державу Україна,розташовану в Східній Європі.",
    "Українці прагнуть політичної стабільності, економічного процвітання та кращої якості життя.",
    "Загалом вони прагнуть до мирної, єдиної та процвітаючої України ",
    "",
    "",
    "",
    "Відгуки про нас:",
    "Я приєднався до цього сайту волонтерів і залишився дуже задоволений! Відмінна платформа для знаходження значних проектів та волонтерської роботи.",
    "Наші герої",
    "Привид",
    "Міська легенда про персонажа російсько-української війни; Його описують як пілота МіГ-29, який за перші 30 годин російського вторгнення, здобув 6 повітряних перемог у небі над Києвом.",
    '"Да Вінчі"',
    "Український доброволець, молодший лейтенант, командир 1 ОМБ «Вовки Да Вінчі» Збройних сил України. Герой України. Член Проводу національно-визвольного руху «Правий сектор».",
    '"Karaya"',
    "28-річний військовий льотчик з позивним Karaya та один із найкращих українських пілотів-винищувачів. 12 жовтня знищив 5 ворожих дронів на Вінничині і відвів винищувач від населеного пункту.",
    "Чим можна допомогти нашим захисникам?",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Допоможи захистити країну",
    "",
    "",
    "Ваше ім'я",
    "Email адреса *",
    "Телефон",
    "Адреса *",
    "Що ви помітили?",
    "Відправити",

]
function en(){
    for (let i = 0; i<41; i++){
        let p = document.getElementById(`p${i+1}`)
        if (i == 12 || i == 13 || i == 14) {
            continue
        } else {
            p.innerText=eng[i]
        }
        
    }
}
function uk(){
    for (let i = 0; i<41; i++){
        let p = document.getElementById(`p${i+1}`)
        p.innerText=ukr[i]
    }
}

function safetopc(){
    let erorrM = 0;
    let nameN = document.getElementById("name")
    let email = document.getElementById("email")
    let tel = document.getElementById("tel")
    let adr = document.getElementById("adr")
    let pom = document.getElementById("pom")

    if (nameN.value.length<2){
        nameN.style.border = "1px solid red"
        erorrM = 1;
    }
    else {
        nameN.style.border = "1px solid green" 
    }

    if (email.value.length<5){
        email.style.border = "1px solid red"
        erorrM = 1;
    }
    else {
        email.style.border = "1px solid green" 
    }

    if (tel.value.length<8){
        tel.style.border = "1px solid red"
        erorrM = 1;
    }
    else {
        tel.style.border = "1px solid green" 
    }

    if (adr.value.length<2){
        adr.style.border = "1px solid red"
        erorrM = 1;
    }
    else {
        adr.style.border = "1px solid green" 
    }

    if (pom.value.length<1){
        pom.style.border = "1px solid red"
        erorrM = 1;
    }
    else {
        pom.style.border = "1px solid green" 
    }
    if(erorrM ==1){
        return
   }
   let str = `Що помітили: ${pom.value} Адреса: ${adr.value} Ім'я: ${nameN.value} Номер телефону: ${tel.value} Email: ${email.value}`
   let blob = new Blob([str], {type: "text/plain"});
   let link = document.createElement("a");
   link.setAttribute("href", URL.createObjectURL(blob));
   link.setAttribute("download", Date.now()+"");
   link.click();

}
        $('#i5').click(function(){
            $('.blockintextblock, .s3__box').css({"background":"#3B8BA5"})
            $('p').css({"color":"white"})
            $('.white__block1, .green__block1, .big__white__block, .s1, .s2, .s3, .s4, .box').css({'background':'#00536D'})
            $('.p3').css({"color":"#00536D"})
            $('.p5, .p13, .p17').css({"color":"#FFDD1B"})
            $('.button2p').css({"color": "#0D0D0D"})
            $('.i5').css({"display" : "none"})
            $('.i6').css({"display" : "block"})
            $('.p6').css({"color":"#F0BE1B"})
            })
        $('#i6').click(function(){
            $('.blockintextblock, .s3__box, .s1').css({"background":"#F5F5F5"})
            $('p').css({"color":"black"})
            $('.p3, .p5').css({"color":"#224F41"})
            $('.p4').css({"color":"#FFFFFF"})
            $('.p6').css({"color":"#F0BE1B"})
            $('.p13').css({"color":"#FFDD1B"})
            $('.white__block1, .big__white__block, .s2, .s3, .s4, .box').css({'background':'white'})
            $('.green__block1').css({'background':'#76AF87'})
            $('.button2p').css({"color": "#0D0D0D"})
            $('.i5').css({"display" : "block"})
            $('.i6').css({"display" : "none"})
            $('.p1, .p2').css({"color" : "white"})
            $('#p9, #p10, #p11').css({"color" : "#F0BE1B"})
            })

