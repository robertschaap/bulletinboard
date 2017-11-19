// Store the default limit
let recordOffset = 0;
let pageSort = 'desc';

// Check input parameter and set sort variable.
function checkPagesort() {
    let sortOrder = window.location.search;
    if ( sortOrder === '?sort=desc') {
        pageSort = 'desc';
    } else if ( sortOrder === '?sort=asc') {
        pageSort = 'asc';
    }
}
checkPagesort();

// Comment loaders
function getComments() {
    $.get('/morecomments', { input: recordOffset, sort: pageSort }, function(res) {
        let array = res.output;
        for (let i = 0 ; i < array.length; i++) {
            let comment = `
            <div class="com_wrap wrapper" alt="${array[i].id}">
                <div class="com_info">
                    <img src="images/${array[i].avatar}.png" alt="${array[i].avatar}" width="100%">
                </div>
                <div class="com_body">
                    <h3>${array[i].title}</h3>
                    <h4>${array[i].name}</h4>
                    <p>${array[i].body}</p>
                </div>
            </div>`;
            $('#comments').append(comment);
        }
    });
}

$('#loadcomments').click(function(){
    recordOffset += 4;
    getComments();
});

$('#sortbtn').change(function(e) {
    $('#comments div').remove();
    recordOffset = 0;
    pageSort = $(this).val()
    getComments();
});
