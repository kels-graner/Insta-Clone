
const feedImages = $('.feed-image');

$(document).ready(function() {
    $.get('https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images', function(data) {
        for (let i = 0; i < data.length; i++) {
            $(feedImages[i]).attr('src', data[i])
        }
    })
})


feedImages.on('error', function() {
    $(this).attr('src', './images/no-image.jpg')
})






$('.post-button').on('click', newComment)

function newComment() {
    const grownup = $(this).parent().parent().parent();
    const myComment = $(grownup).find('.comment-input').val();
    $(grownup).find(".new-comment").html(myComment);
    $(grownup).find(".comment-input").val('');
    return false;
}



$('.little-heart').on('click', makePink);

function makePink() {
    $(this).toggleClass("fa-regular fa-solid")
    $(this).toggleClass("make-pink")
}


$('.feed-image').on('dblclick', changeColor);

function changeColor() {
    const adult = $(this).parent();
    $(adult).find('.little-heart').toggleClass("fa-regular fa-solid")
    $(adult).find('.little-heart').toggleClass("make-pink")
}



$(".welcome").text("Welcome " + localStorage.getItem('user') + "!");