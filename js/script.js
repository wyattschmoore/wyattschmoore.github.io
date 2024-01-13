$(document).ready(function() 
{
    $("#frmLogin").submit(function(event)
    {
        let validForm = true;
        $("#frmLogin input[required]").each(function() 
        {
            if(!$(this).val()) 
            {
                $(this).addClass("is-invalid");
                validForm = false;
            }
        });

        event.preventDefault();
        event.stopPropagation();

        if(validForm)  
        {
            alert("You are logged in !!");
            document.location.href = '/games';
        }
    });

    $("#frmRegister").submit(function(event)
    {
        let validForm = true;
        $("#frmRegister input[required]").each(function() 
        {
            if(!$(this).val()) 
            {
                $(this).addClass("is-invalid");
                validForm = false;
            }
            else
            {
                if($(this).attr('id') == "inputName")
                {
                    if(isLetters($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }
                
                if($(this).attr('id') == "inputSurname")
                {
                    if(isLetters($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }

                if($(this).attr('id') == "inputPhone")
                {
                    if(isNumbers($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }

                if($(this).attr('id') == "inputEmail")
                {
                    if(isEmail($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }
            } 
        });

        event.preventDefault();
        event.stopPropagation();

        if(validForm) 
        {
            alert("You have registered Successfully !!");
            document.location.href = '/games';
        }
    });

    $("#frmContactUs").submit(function(event)
    {
        let validForm = true;
        $("#frmContactUs input[required]").each(function() 
        {
            if(!$(this).val()) 
            {
                $(this).addClass("is-invalid");
                validForm = false;
            }
            else
            {
                if($(this).attr('id') == "inputName")
                {
                    if(isLetters($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }

                if($(this).attr('id') == "inputEmail")
                {
                    if(isEmail($(this).val()))
                    {
                        $(this).removeClass("is-invalid");
                    }
                    else
                    {
                        $(this).addClass("is-invalid");
                        validForm = false;
                    }
                }
            } 
        });

        event.preventDefault();
        event.stopPropagation();

        if(validForm) 
        {
            alert("Thanks for Contacting Us, We will get back to you shortly!!");
            document.location.href = '/games';
        }
    });
});

function isLetters(text) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(text);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isNumbers(phone) {
    var regex = /^[0-9]+$/;
    return regex.test(phone);
}

function openGamesTab(gameNumber) {
    window.open('/game?gameno=' + gameNumber);
}