/*
    Date.utc()方法与getTime()方法返回值不相等的原因
*/
//Date.UTC() 方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
var utcDate = Date.UTC(2016,1,1);
//getTime() 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
var getTime = new Date(2016,1,1);
//打印出两个方法返回的值发现两者不相等
(utcDate==getTime.getTime())?document.write("相等"):document.write("不相等");  //不相等
//原因是new Date() 方法返回的是本机时间，也就是东八区的时间。导入参数后返回东八区的的2016年1月1日与1970年1月1日相差的毫秒数；
// Date.UTC()返回的是0时区的时间，返回的是0时区的2016.1.1与1970.1.1相差的毫秒数。
//两者相差8个小时
document.write((utcDate-getTime.getTime())/3600000+'</br>');  //8