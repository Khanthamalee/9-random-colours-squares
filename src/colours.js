
//https://lnwquiz.com/post/1083/เขียนโค้ดสุ่มตัวเลขและตัวอักษรไม่ซ้ำด้วยภาษา-JavaScript?fbclid=IwAR21aBjcUH8jLsPVbB2l6YxGd1ToxUu89pDfrDx-vHwzppDIHwgHUNtsPRk
function Randomcolours(length) {
    let characters ='ABCDEF0123456789';
    let result = '';
    //นับจำนวนตัวอักษร
    let charactersLength = characters.length;
    //วนลูปตามจำนวนตัวอักษร
    for ( let i = 0; i < length; i++ ) {
        //เอาตัวอักษรตามตำแหน่งที่ random มาได้เก็บไว้ในตัวแปร result
        result += characters.charAt(Math.floor(Math.random() *charactersLength));
    }

    return result;
}
    
function Squares(x,y,width,hight){
    // ดึงกราบแคนวาสที่สร้างจาก index.html
    let canvas = document.getElementById('canvas');
    // สร้างสี่เหลี่ยมเก็บไว้ในตัวแปร context
    let context = canvas.getContext('2d');
    // สร้างแถวสามแถวจากตัวแปร j
    for (let j=0; j<3; j++){
        // สร้างแถวสามคอลัมภ์จากตัวแปร i
        for (let i=0; i<3; i++){
            // เติมสีรูปสี่เหลี่ยมจาการสุ่มสี
            context.fillStyle = "#"+Randomcolours(6);
            context.fillRect(x+i*(width+40), y+j*(hight+40), width, hight);
            }
        }
        return context;
    }
// จุดเริ่มต้นแกน x.y
Squares(10,20,130,130)


//https://khanthamalee.github.io/9-random-colours-squares/
