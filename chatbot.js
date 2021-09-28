function check_text() {
    let value = document.getElementById("console").value;
    console.log(value);

    if(value === "안녕") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '만나서 반가워!';
    }
    else {
        console.log(value);
    }
}