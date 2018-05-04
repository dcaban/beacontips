$(function(){


    function clearForm(){

        var name = $("#nameInp").val("").focus();
        var lastName = $("#lastNameInp").val("");
        var email = $("#emailInp").val("");
        var phone = $("#phoneInp").val("");


    };

    var contactID = 1;

    $("#newEntry").on("click", function(){
        $(".new-entry").slideToggle();
    });

    $("#add-contact").on("click", function(e){
        e.preventDefault();


        var name = $("#nameInp").val();
        var lastName = $("#lastNameInp").val();
        var email = $("#emailInp").val();
        var phone = $("#phoneInp").val();
        var newInfo;

        var contact = "<td><div class='contact'>" + contactID + "</div></td>" + "<td><div class='editable'>" + name + "</div></td>" + "<td><div class='editable'>" + lastName + "</div></td>" + "<td><div class='editable'>" +  email + "</div></td>" + "<td><div class='editable'>" + phone + "</div></td>";
        var removeBtnTemplate = "<td> <a href='#' id='remove-contact'> x </a></td>";

        if(name != "" && lastName !="" && email !="" && phone !=""){
            $("#contact-table").append("<tr>" + contactID + contact + " " + removeBtnTemplate + "</tr>" );
            clearForm();

            contactID++;

        }




    });





    $("#contact-table").on("click", "#remove-contact", function(){
        $(this).parents("tr").remove();
        contactID =  contactID - 1;

    });

    // // Obid za dynamic id

    // var rowCount = $('#contact-table tr').length - 1;


    // $('td:first-child').each(function() {

    // for (var i = 1; i <= rowCount; i++){
    //     $("tr:eq(i) td:eq(0)").text(i);
    //     contactID = i + 1;
    //  }

    // });

    // });



    $("#contact-table").on("click", ".editable", function(){

        var currentName = $(this).text();

        $(this).replaceWith('<input class="changed" value="' + currentName + '" />').blur();



        $("#contact-table").on("dblclick", ".changed", function(){
            newInfo =$(this).val();
            $(this).replaceWith('<div class="editable">' + newInfo + '</div>');

        });


    });




















});