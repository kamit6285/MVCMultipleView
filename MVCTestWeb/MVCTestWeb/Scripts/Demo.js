function EditEmployee(id) {
    $.each($('#empList tr'), function (ind, rowVal) {
        if(((rowVal[ind]).find('td'))[0].html==id)
        {
            $('#EditModal').modal('show');
        }
    })
    
    var rows = $('#empList tr');
    var columns;
    for (var i = 1; i < rows.length; i++) {
        columns = $(rows[i]).find('td');
        if ($(columns[0]).html() == id) {
            //$('#EditModal').modal('show');
            $("#EditModal").on('show.bs.modal', function () {
                $("#editName").text($(columns[1]).html());
                $("#editCity").text($(columns[2]).html());
                $("#editAge").text($(columns[3]).html());
                $("#editDeptID").text($(columns[4]).html());
            });
            
           
        }
    }

    //$.ajax({
    //    type: "GET",
    //    url: "http://localhost:32247/Employee/EmpEdit/" + id,
    //})
    
    //$.ajax({
    //    type: "POST",
    //    url: "http://localhost:32247/Employee/EmpEdit/" + id,
    //})
}
