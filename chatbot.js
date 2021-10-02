let app = document.getElementById("typed");

function check_text() {
    let value = document.getElementById("console").value;
    console.log(value);

    if(value === "배고프다") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '난 오늘 로제떡볶이를 먹을거야!';
        let typewriter = new Typewriter(app, {
            loop: true});
        typewriter.typeString('루피에게 다른 말도 걸어주세요!')
            .pauseFor(1500)
            .deleteAll()
            .typeString('루피가 친절하게 대답해줄 거에요!')
            .pauseFor(3000)
            .start();
    }
    else if(value === "졸리다. 불 끌게!") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '그래 벌써 12시네~ 하암 잘자!';
        document.body.style.backgroundColor = 'gray';
    }
}

/*
function check_text() {
            var value = document.getElementById("console").value;
            var order = {
                BLACK : "불꺼줘",
                LIGHT : "불켜줘",
            }
            console.log(value);

            if(value == order.BLACK){
                 document.body.style.backgroundColor = 'gray';
            }else if (value == order.LIGHT){
                document.body.style.backgroundColor = 'white';
            }else{
                var app = document.getElementById("chat");
                var typewriter = new Typewriter(app, {
                loop: false,
                });

                typewriter
                .typeString("코묘가 알아듣지 못한 것 같다.")
                .pauseFor(1300)
                .deleteAll()
                .typeString("다시 한 번 말해보자.")
                .pauseFor(2500)
                .start();
            }

            document.getElementById('console').value = '';

        }
 */