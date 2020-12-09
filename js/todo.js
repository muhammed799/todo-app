

location.replace = "todo.html";
// var checkbox = document.createElement('input');
// checkbox.type = "checkbox";
// checkbox.id = "id";
// checkbox.value='&nbsp';
// checkbox.disabled=true;

$(document).ready(function () {

    $.get('https://jsonplaceholder.typicode.com/todos', function (data) {
        $.each(data, function (key, value) {

            // console.log(value.completed);
            if (value.completed == true) {
                $("#table1").append('<tr><td>' + value.userId + '</td><td>' + value.id + '</td><td>' + value.title + '</td><td><input type="checkbox"  name="name1" disabled checked/></td></tr>');


            }
            else {
                $("#table1").append('<tr><td>' + value.userId + '</td><td>' + value.id + '</td><td>' + value.title + '</td><td><input type="checkbox" id="c" name="name1" /></td></tr>');

            }



        })

        $('input[type="checkbox"]').click(function () {
            var promise = new Promise(function(resolve,reject){
            var boxes = $('#c:checked').length ;
                
                if(boxes ==5){
                    resolve("5 boxes checked");
                    alert("5 boxes checked");
                }
                else{
                    reject("tick more boxes");
                }
                
            });
            

            });


            //     if($('#c:checked').length ==5){
            //              alert('5 tasks compleated succesfully');
            //     }

            // });
            //  console.log('insertion of tables compleated');

        });



        // $('input[type="checkbox"]').css("height", "50px");
    });
// });






















