$(function (){


    $('form').on('dom', function () {
        console.log("hello");
        console.log($(['input']).val());
    })

    $('form').submit(function(e){
        e.preventDefault()
        $('form').trigger('dom');
        return false;
    })



})