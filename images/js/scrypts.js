function SetImg(selected_url)
{
    var item = document.getElementById('preview');
    item.src= selected_url;
}

function SubmitForm(name,tel,car)
{
    $.ajax(
        {
         method:"POST",
         url:"/Home/Order",
         data:{Name:name,Tel:tel,Car:car}
        }).fail(function(){
        alert("При передаче файлов произошла ошибка!");
        }).done(function(context){
        alert(context);
    })
}

$(document).on('submit','form',function()
{
    var UserName=$('input[name=Name]').val();
    var UserTel=$('input[name=Tel]').val();
    var Car=$('select').val();
    if(UserName.length>0)
        {
            var regular=/^\8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;
            if(regular.test(UserTel)==true)
                {
                    //alert("Отлично")
                    SubmitForm(UserName,UserTel,Car);
                }
            else
                {
                    alert("Вы неверно указали ноиер телефона!")
                }
        }
    else
        {
            alert('Вы забыли указать имя.')
        }
});
