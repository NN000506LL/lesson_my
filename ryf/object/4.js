function Cat(name, color){
    // {}Object  基于空对象
    return{
        name: name,
        color: color
    }
}
// 基于对象 复用
var cat1 = Cat("大毛" , "黄色");
var cat2 = Cat("二毛" , "黑色");