function check_text() {
    let value = document.getElementById("console").value;
    console.log(value);

    if(value === "안녕") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '만나서 반가워!';

    }
    else if(value === "불꺼줘") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '벌써 자려구?';
        document.body.style.backgroundColor = 'gray';
    }
}