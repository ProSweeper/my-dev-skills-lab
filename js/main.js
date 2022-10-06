function addSkill() {
    let skill = $('input').val();
    //create a template so that we can take the text input and plug it into a table row and cell
    let template =` 
    <tr class='skill'>
        <td>
            <button class="btn btn-danger remove">X</button>
            <p>${skill}</p>        
        </td>
    </tr>`;
    $('tbody').append(template);
    $('input').val("");
    $('.skill').on('click', 'button', removeSkill)
}

function removeSkill(evt) {
    // console.log(evt.delegateTarget, evt.delegateTarget.parentElement);
    evt.delegateTarget.parentElement.removeChild(evt.delegateTarget);
}

$('#add-skill').on('click', addSkill);
$('input').on('keypress',function (e) {
    if ($('input').val() === '') return
    let key = e.which;
    if (key == 13) {
        $('#add-skill').click();
        return false;
    }
});
$('input').focus();
// $('.skill').on('click', 'button', removeSkill)

