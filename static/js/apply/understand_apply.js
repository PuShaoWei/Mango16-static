/**
 * Created by pushaowei on 2017/6/26.
 */

/*
$(function(){
    $("#submit").click(function() {
        $('.area').append('');
        $(".cover").removeClass("display-none");
        $(".confirm").removeClass("display-none");
        $(".close").click(function(){
            $(".cover").addClass("display-none");
            $(".cover_detail").addClass("display-none");
            $(".confirm").addClass("display-none");
        });

        $("#add").click(function(){
            $(".confirm").addClass("display-none");
            $('.slave').each(function(){
                $('#table_add').append($(this).html());
            });
            $(".cover_detail").removeClass("display-none");
            $(".close").click(function(){
                $(".cover").addClass("display-none");
                $(".cover_detail").addClass("display-none");
            });
            $("#add_submit").click(function(){
                $(".cover_detail").addClass("display-none");
                $(".confirm").removeClass("display-none");
            })
        })
    })
});*/
$(function(){
    var data = []
    var area = $('.area');
    $('.form_submit').submit(function(){
        var params = {
            uname: $('.uname').val(),
            sex: $('input[name="sex"]:checked').val(),
            national: $('.national').val(),
            unit: $('.unit').val(),
            phone: $('.phone').val(),
            tel: $('.tel').val(),
            email: $('.email').val(),
            zipcode: $('.zipcode').val(),
            stay: $('input[name="stay"]:checked').val(),
            ls: $('input[name="ls"]:checked').val(),
            address: $('.address').val(),
            title: $('.title').val(),
            file: $('.file')[0].files[0]
        }
        data.push(params)
        render()

        $(".cover").removeClass("display-none");
        $(".confirm").removeClass("display-none");
        $(".close").click(function(){
            $(".cover").addClass("display-none");
            $(".cover_detail").addClass("display-none");
            $(".confirm").addClass("display-none");
        });
        $("#add").click(function(){
            $(".confirm").addClass("display-none");
            $(".cover_detail").removeClass("display-none");
            $(".close").click(function(){
                $(".cover").addClass("display-none");
                $(".cover_detail").addClass("display-none");
            });
        })

    })

    $(document).on('click', '#add_submit', function(){
        $(".cover_detail").addClass("display-none");
        $(".confirm").removeClass("display-none");
        addother()
    })

    function addother(){
        var params = {
            uname: $('.q-uname').val(),
            unit: $('.q-unit').val(),
            phone: $('.q-phone').val(),
            email: $('.q-email').val(),
            qstay: $('.qstay:checked').val()
        }
        data.push(params)
        render()
    }

    function render(){
        var html = '';

        for(var i = 0; i < data.length; i++){
            var text = '';
            if (data[i].sex == 'male') {
                text = '男'
            } else {
                text = '女'
            }
            html += '<tr><td>'+ data[i].uname +'</td><td>'+ text +'</td><td>'+ data[i].phone +'</td></tr>';
        }
        area.html(html)
    }
});
