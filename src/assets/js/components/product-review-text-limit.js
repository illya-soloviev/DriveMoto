var commentsAllPar = {}; // Объект с полным текстом всех комментариев на странице
var btnMoreCommentText = '<button class="product-reviews__more-text" type="button">Показать еще</button>';

// Вставляем лишь первые два абзаца комментария
$(".product-reviews__text").each(function() {
    var $this = $(this);

    var commentId = $this.attr('data-comment-id');
    var allParComment = $this.children();
    commentsAllPar[commentId] = allParComment;

    var firtsTwoParComment = $this.children().slice(0, 2);
    $this.empty();
    firtsTwoParComment.each(function() {
        $this.append($(this));
    });
    $this.append(btnMoreCommentText);
});



// Отображаем полный текст комментария при клике на кнопку
$('.product-reviews__more-text').on('click', function() {
    var parentComment = $(this).parents('[data-comment-id]');
    var parentCommentIdVal = parentComment.attr('data-comment-id');

    var allParParentComment = commentsAllPar[parentCommentIdVal];
    parentComment.empty();
    allParParentComment.each(function() {
        parentComment.append($(this));
    });
});