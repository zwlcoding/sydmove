/**
 * Created by Administrator on 2014/12/1.
 */

$(function(){
    var myDate = new Date()
    $(".copytime").html( myDate.getYear() + 1900 );
})