function check_text() {
    let value = document.getElementById("console").value;
    console.log(value);

    if(value === "배고프다") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '난 오늘 로제떡볶이를 먹을거야!';
    }
    else if(value === "졸리다. 불 끌게!") {
        document.getElementsByClassName('loopy_says')[0].innerHTML = '그래 벌써 12시네~ 하암 잘자!';
        document.body.style.backgroundColor = 'gray';
    }
}