let citateIdStatus = 0;

function getImgPath(img) {
    let src = img.src;
    let srcArray = src.split("");
    let lastSlashIndex = 0;
    srcArray.forEach((char, index) => {
        if (char == '/') lastSlashIndex = index;
    });
    let path = src.slice(0, lastSlashIndex);
    console.log(path);
    return path;
}

function changeStatus(number) {
    citateIdStatus += number;
    if (citateIdStatus > commentArray.length - 1) citateIdStatus = 0;
    if (citateIdStatus < 0) citateIdStatus = commentArray.length - 1;
    changeCitateContent(citateIdStatus);
}

let commentArray = [{
    text: "Praesent vitae arcu tempor neque lacinia pretium. Nullam faucibus mi quis velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    textDesc: "Nullam faucibus mi quis velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Mauris dictum facilisis augue.",
    autor: "Sousa Fernandes",
    desc: "CEO & Founder",
    img: "teacher(4)"
}, {
    text: "Vivamus luctus egestas leo. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Fusce nibh. Vivamus luctus egestas leo. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Phasellus et lorem id felis nonummy placerat. Etiam neque. Aliquam erat volutpat. Nulla est. Maecenas.",
    textDesc: "Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.Maecenas lorem. Quisque tincidunt scelerisque libero.",
    autor: "John Doe",
    desc: "Student",
    img: "teacher(6)"
}, {
    text: "Pellentesque sapien. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc auctor. Nulla quis diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.",
    textDesc: "Etiam commodo dui eget wisi. Pellentesque sapien. Mauris metus. Nulla est. Interdum nec, diam.Maecenas lorem.",
    autor: "Johnatan Valo",
    desc: "Teacher",
    img: "teacher(3)"
}, {
    text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Aliquam ante. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam posuere lacus quis dolor. Fusce tellus.",
    textDesc: "Pellentesque sapien. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc auctor. Nulla quis diam.",
    autor: "Khim Ni Jun",
    desc: "Teacher",
    img: "student(2)"
}, {
    text: "emporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Praesent in mauris eu tortor porttitor accumsan. Vestibulum fermentum tortor id mi. Praesent dapibus. Etiam posuere lacus quis dolor. Ut tempus purus at lorem. ",
    textDesc: "Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.",
    autor: "Franchesco Petra",
    desc: "Student",
    img: "student(1)"
}]

function changeCitateContent(id) {
    let autorText = document.getElementsByClassName("s-f__citate__main-text")[0];
    let autorTextDesc = document.getElementsByClassName("s-f__citate__main-description")[0];
    let autorImage = document.getElementsByClassName("s-f__citate__autor__image")[0];
    let autorName = document.getElementsByClassName("s-f__citate__autor__name")[0];
    let desc = document.getElementsByClassName("s-f__citate__autor__description")[0];



    autorText.innerHTML = commentArray[id].text;
    desc.innerHTML = commentArray[id].desc;
    autorTextDesc.innerHTML = commentArray[id].textDesc;
    autorName.innerHTML = commentArray[id].autor;
    autorImage.src = getImgPath(autorImage) + '/' + commentArray[id].img + ".jpg";
}

function questions(element) {
    if (element.classList.contains("faq_question--active")) {
        element.classList.remove("faq_question--active");

        let icon = element.getElementsByClassName("material-icons")[0];
        icon.innerHTML = "chevron_right";

        if (element.getElementsByClassName("faq_question__content__container").length < 1) {
            let paragraph = element.getElementsByClassName("faq_question__paragraph")[0];
            paragraph.style.display = "none";

            let header = element.getElementsByClassName("faq_question__header")[0];
            header.classList.remove("faq_question__header--active");
        } else {
            let div = element.getElementsByClassName("faq_question__content__container")[0];
            div.style.display = "none";
        }
    } else {
        element.classList.add("faq_question--active");

        let icon = element.getElementsByClassName("material-icons")[0];
        icon.innerHTML = "expand_more";

        if (element.getElementsByClassName("faq_question__content__container").length < 1) {
            let paragraph = element.getElementsByClassName("faq_question__paragraph")[0];
            paragraph.style.display = "block";

            let header = element.getElementsByClassName("faq_question__header")[0];
            header.classList.add("faq_question__header--active");
        } else {
            let div = element.getElementsByClassName("faq_question__content__container")[0];
            div.style.display = "flex";
        }
    }
}