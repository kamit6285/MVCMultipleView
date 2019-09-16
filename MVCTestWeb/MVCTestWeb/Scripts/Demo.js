//Amit: Learn
//"Show.bs.modal" event, This event is fired just before the modal is open.
//"Shown.bs.modal" event,This event is fired after the modal is shown
//"Hide.bs.modal" event,This event is fired just before the modal is hidden.
//"Hidden.bs.modal" event,This event is fired after the modal is closed.
function EditEmployee(id) {
    //=========================================================================
    //Amit: This is good way to fill the data first before open the the Modal
    $("#EditModal").on('show.bs.modal', function () {
        $.each($('#empList tr'), function (ind, currentRow) {
            columns = $(currentRow).find('td');
            if ($(columns[0]).html() == id) {
                $("#editID").val(id);
                $("#editName").val($(columns[1]).html().trim());
                $("#editCity").val($(columns[2]).html().trim());
                $("#editAge").val($(columns[3]).html().trim());
                $("#editDeptID").val($(columns[4]).html().trim());
            }
        })
    });
    $('#EditModal').modal('show');
    //=========================================================================
    //Amit: This is not good way to show the Modal first and then append the data
    //$('#EditModal').modal('show');
    //$("#EditModal").on('shown.bs.modal', function () {
    //    var rows = $('#empList tr');
    //    var columns;
    //    for (var i = 1; i < rows.length; i++) {
    //        columns = $(rows[i]).find('td');
    //        if ($(columns[0]).html() == id) {
    //            $("#editID").val(id);
    //            $("#editName").val($(columns[1]).html().trim());
    //            $("#editCity").val($(columns[2]).html().trim());
    //            $("#editAge").val($(columns[3]).html().trim());
    //            $("#editDeptID").val($(columns[4]).html().trim());
    //        }
    //    }
    //});
    //=========================================================================
    //Amit: This is good way to fill the data first before open the the Modal
    //$("#EditModal").on('hidden.bs.modal', function () {
    //    var rows = $('#empList tr');
    //    var columns;
    //    for (var i = 1; i < rows.length; i++) {
    //        columns = $(rows[i]).find('td');
    //        if ($(columns[0]).html() == id) {
    //            $("#editID").val(id);
    //            $("#editName").val($(columns[1]).html().trim());
    //            $("#editCity").val($(columns[2]).html().trim());
    //            $("#editAge").val($(columns[3]).html().trim());
    //            $("#editDeptID").val($(columns[4]).html().trim());
    //        }
    //    }
    //});
    
            
    //$("#EditModal").on('show.bs.modal', function () {
    //    var rows = $('#empList tr');
    //    var columns;
    //    for (var i = 1; i < rows.length; i++) {
    //        columns = $(rows[i]).find('td');
    //        if ($(columns[0]).html() == id) {
    //            $("#editID").val(id);
    //            $("#editName").val($(columns[1]).html().trim());
    //            $("#editCity").val($(columns[2]).html().trim());
    //            $("#editAge").val($(columns[3]).html().trim());
    //            $("#editDeptID").val($(columns[4]).html().trim());
    //        }
    //    }
    //});
    //$('#EditModal').modal('show');

           

    //$.ajax({
    //    type: "GET",
    //    url: "http://localhost:32247/Employee/EmpEdit/" + id,
    //})
    
    //$.ajax({
    //    type: "POST",
    //    url: "http://localhost:32247/Employee/EmpEdit/" + id,
    //})
}

function editModalPopUpBtn() {
    let id = $("#editID").val();
    var mod = {
        "eMPLOYEE": {
            "ID":id,
            "NAME": $("#editName").val(),
            "CITY": $("#editCity").val(),
            "AGE": $("#editAge").val(),
            "DEPTID": $("#editDeptID").val()
        },
        "eMPLOYEELIST": null
    }
    $('#EditModal').modal('hide');
    $.post("/Employee/EmpEdit", { "id": id,"emp":mod },
        function (response) {
            window.location.href = 'EmpList';
            }) 
           // $.get("/Employee/EmpList")
       
}

//-----Delete Modal-------------------------------------
function DeleteEmployee(id)
{
    $("#DeleteModal").on('show.bs.modal', function () {
        $.each($('#empList tr'), function (ind, currentRow) {
            columns = $(currentRow).find('td');
            if ($(columns[0]).html() == id) {
                $("#deleteID").val(id);
                $("#deleteName").text($(columns[1]).html().trim());
                $("#deleteCity").text($(columns[2]).html().trim());
                $("#deleteAge").text($(columns[3]).html().trim());
                $("#deleteDeptId").text($(columns[4]).html().trim());
                return false;
            }
        })
    });
    $('#DeleteModal').modal('show');
}
function DeleteModalPopUpBtn(){
    let id = $("#deleteID").val();
    $('#DeleteModal').modal('hide');
    $.post("/Employee/EmpDelete", { "id": id, "collection": null },
        function (response) {
            window.location.href = 'EmpList';
        })
    // $.get("/Employee/EmpList")

}