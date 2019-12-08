$("#field").on("keydown", function(event){
    var item;
    var counter = 0;
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var day = date.getDay();
    //var seconds = date.getSeconds();
    
    if(event.which == 13){
        counter++;
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

$("#remove-dialog__ok").on("click", removeItems);

$("#remove-dialog").on("keydown", function(event){
    if (event.which == 13){
        removeItems();
    }
});
//Delete all objects of list
var removeAll = function(event){
    $(".deletable-group-item").remove();
}

$("#remove-all__ok").on("click", function(){
    removeAll();
});



              