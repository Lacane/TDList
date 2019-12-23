

$('#pt_button').click(function() {
    $('#pt').show();
});
$('#pt').click(function() {
    $(this).hide();
});

$('#vt_button').click(function() {
    $('#vt').show();
});
$('#vt').click(function() {
    $(this).hide();
});

$('#sr_button').click(function() {
    $('#sr').show();
});
$('#sr').click(function() {
    $(this).hide();
});

$('#ct_button').click(function() {
    $('#ct').show();
});
$('#ct').click(function() {
    $(this).hide();
});

$('#pn_button').click(function() {
    $('#pn').show();
});
$('#pn').click(function() {
    $(this).hide();
});



$("#field").on("keydown", function(event){
    var item;
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var day = date.getDay();
    //var seconds = date.getSeconds();
    
    if(event.which == 13){
        item = $("<li>1.</li>");
        item.addClass("list-group-item todo-item");
        item.addClass("deletable-group-item");
        item.html($(this).val());
        if(minutes < 10){
            $(this).val( hours + ":" + "0" + minutes + ": ");
        }
        else{
            $(this).val( hours + ":" + minutes + ": ");
        }
        item.click(function(){
           $(this).toggleClass("list-group-item-info"); 
        });
        $('#remove-all__ok').click(function(){
            $(item).toggleClass('list-group-item-info');
        });
        
        $("#list").append(item);
    }
});





var removeItems = function(event){
    $(".list-group-item-info").remove();
    $("#remove-dialog").modal("hide");
}

$(document).on("keydown", function(){
    if (event.which == 46){
        $("#remove-dialog").modal("show");        
    }
});



$('#deleter').on('click', function(){
    $("#remove-dialog").modal("show");  
});

$("#remove-dialog__ok").on("click", removeItems);

$("#remove-dialog").on("keydown", function(event){
    if (event.which == 13){
        removeItems();
    }
});


