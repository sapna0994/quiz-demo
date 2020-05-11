$(document).ready(function () {
    const city = $("#city");
    const next1 = $(".next1");
    const next2 = $(".next2");
    const next3 = $(".next3");
    const submitQuiz = $(".submitQuiz");
    const previous2 = $(".previous2");
    const previous3 = $(".previous3");
    const previous4 = $(".previous4");
    const q1tab = $("#question1-tab");
    const q2tab = $("#question2-tab");
    const q3tab = $("#question3-tab");
    const q4tab = $("#question4-tab");
    next1.prop("disabled", true);
    next2.prop("disabled", true);
    next3.prop("disabled", true);
    submitQuiz.prop("disabled", true);

    $('.yes2').click(function () {
        $(this).html('<i class="fa fa-check icon"></i>');
        $(this).css('border','2px solid green');
        $('.no2').css('border','0px solid transparent');
        $('.no2').html('No');
        q3tab.removeClass('disabled');
        next2.prop("disabled", false);
    });
    $('.yes3').click(function () {
        $(this).html('<i class="fa fa-check icon"></i>');
        $(this).css('border','2px solid green');
        $('.no3').css('border','0px solid transparent');
        $('.no3').html('No');
        q4tab.removeClass('disabled');
        next3.prop("disabled", false);
    });
    $('.yes4').click(function () {
        $(this).html('<i class="fa fa-check icon"></i>');
        $(this).css('border','2px solid green');
        $('.no4').css('border','0px solid transparent');
        $('.no4').html('No');
        submitQuiz.prop("disabled", false);
    });
    $('.no2').click(function () {
        $(this).html('<i class="fa fa-times icon"></i>');
        $(this).css('border','2px solid green');
        $('.yes2').css('border','0px solid transparent');
        $('.yes2').html('Yes');
        q3tab.removeClass('disabled');
        next2.prop("disabled", false);
    });
    $('.no3').click(function () {
        $(this).html('<i class="fa fa-times icon"></i>');
        $(this).css('border','2px solid green');
        $('.yes3').css('border','0px solid transparent');
        $('.yes3').html('Yes');
        q4tab.removeClass('disabled');
        next3.prop("disabled", false);
    });
    $('.no4').click(function () {
        $(this).html('<i class="fa fa-times icon"></i>');
        $(this).css('border','2px solid green');
        $('.yes4').css('border','0px solid transparent');
        $('.yes4').html('Yes');
        submitQuiz.prop("disabled", false);
    });

    $('.next').click(function () {
        $('.nav-tabs > .active').next('li').find('a').trigger('click');
    });

    $('.previous').click(function () {
        $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    });

    city.on('focusout', () => {
        if (city.val() === '') {
            next1.prop("disabled", true);
            if (!q2tab.hasClass('disabled')) {
                q2tab.addClass('disabled');
            }
            if (!q3tab.hasClass('disabled')) {
                q3tab.addClass('disabled');
            }
            if (!q4tab.hasClass('disabled')) {
                q4tab.addClass('disabled');
            }
        } else {
            q2tab.removeClass('disabled');
            next1.prop("disabled", false);
        }
    });  
    
    next1.on('click', () => {
        q2tab.removeClass('disabled');
        $('#pills-tab li:nth-child(2) a').tab('show');
    });

    next2.on('click', () => {
        q3tab.removeClass('disabled');
        $('#pills-tab li:nth-child(3) a').tab('show');
    });

    next3.on('click', () => {
        q4tab.removeClass('disabled');
        $('#pills-tab li:nth-child(4) a').tab('show');
    });

    previous4.on('click', () => {
        $('#pills-tab li:nth-child(3) a').tab('show');
    });
    previous3.on('click', () => {
        $('#pills-tab li:nth-child(2) a').tab('show');
    });

    previous2.on('click', () => {
        $('#pills-tab li:nth-child(1) a').tab('show');
    });

    var question2 = $("#question2"); 
    var question3 = $("#question3"); 
    var question4 = $("#question4"); 
    $.ajax({
        url: "http://endgame.medikoe.com:3210/api/nutriva/getNutrivaQuestions",
        type: "GET",
        success: function(suc){
            console.log(suc);
            if(suc.success){
                $("#ques1Text").text(suc.data.question1);
                $("#ques2Text").text(suc.data.question2);
                $("#ques3Text").text(suc.data.question3);
            }
        },
        error: function(err){
            console.log(err);
        }
    });
 
    $("#submitForm").on("click",function(e){    
        e.preventDefault();
        var yes2 = $('.yes2').prop('selected') ? 'true' : 'false';
        var yes3 = $('.yes3').prop('selected') ? 'true' : 'false';
        var yes4 = $('.yes4').prop('selected') ? 'true' : 'false';
        console.log(yes2,yes3,yes4);
        var data = {
            question1: $("#ques1Text").text(),
            question2: $("#ques2Text").text(),
            question3: $("#ques3Text").text(),
            answer1: yes2,
            answer2: yes3,
            answer3: yes4,
            city: city
        }
        console.log(data);
        // $.ajax({
        //     url: "http://endgame.medikoe.com:3210/api/nutriva/register/api/nutriva/register",
        //     type: "POST",
        //     data: data,  
        //     success: function (res) {
        //         console.log();
        //         if(res.status == 200){
        //            alert("success");
        //         }
        //         $("#questionForm").trigger('reset');
        //     },
        //     error: function (err) {
        //         $(".danger-alert").show('slow');
        //         console.log(err);
        //     }
        // });
    });
});