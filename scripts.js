// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// let hamad = document.getElementById("hamad");
// hamad.src ="./images/moon.jpg" ;

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// let text = document.getElementById("caption");
// text.innerHTML = "القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

function planetSwitcher() {
    let body = document.querySelector("body");
    let text = document.getElementById("caption");
    let hamad = document.getElementById("hamad");

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

if (text.innerHTML == "القمر"){
    text.innerHTML ="الشمس"
    hamad.src ="./images/sun.jpg";
    body.style.backgroundColor = "#c67700" ;
    body.style.transition =` all 4s ease-in-out `;
} else {
    text.innerHTML ="القمر";
    hamad.src = "./images/moon.jpg" ;
    body.style.backgroundColor = "#182848";
    body.style.transition =` all 4s ease-in-out `;
}


}
/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
