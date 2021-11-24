"use strict";
function slojno(a,b,c,) {
    let D = b * b - 4 * a * c;
    let x1;
    let x2;

    if(a == 0) return "Ошибка, a = 0 недопустимое значение"

    if(D > 0) {
        x1 = ( - b + Math.sqrt(D)) / (2 * a);
        x2 = ( - b - Math.sqrt(D)) / (2 * a);
        return "Коэффициенты: a=" + a + ", b=" + b + ", c="  + c + "\ Корни уравнения: X1=" + x1 + ", X2=" + x2 + "\ Дискриминант(D)=" + D;
    }
    
    else if(D == 0) {
        x1 = - b / (2 * a);
        return "Коэффициенты: a=" + a + ", b=" + b + ", c=" + c + "\ Корни уравнения: X1=" + x1 + "\Дискриминант (D)=" + D
    }
    
    else if (D < 0) {
        return "Коэффициенты: a=" + a + ", b=" + b + ", c=" + c + "\ Корней нет:\Дискриминант(D)=" + D;
    }
}
function prog() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let result = slojno(a,b,c);
    document.getElementById('result').textContent = result;
    document.getElementById('otvet').style.display = "block"
}
