var tableBody = (`
        <tbody>
            <tr><td>Good Toys</td><td>USA</td><td>France</td><td></td><td>USA</td></tr>
            <tr><td>Cycle Clearance</td><td>FRANCE</td><td>Canade</td><td></td><td>UK</td></tr>
            <tr><td>Cycle Initial Bike Company</td><td>USA</td><td>USA</td><td></td><td>UK</td></tr>
            <tr><td>Sports Store</td><td>USA</td><td>Canada</td><td></td><td>INDIA</td></tr>
            <tr><td>Locks Company</td><td>UK</td><td>USA</td><td></td><td>USA</td></tr>
            <tr><td>Famous Bike Shop</td><td>USA</td><td>USA</td><td></td><td>USA</td></tr>
            <tr><td>Good Toys</td><td>USA</td><td>USA</td><td></td><td>USA</td></tr>
            <tr><td>Cycle Clearance</td><td>FRANCE</td><td>USA</td><td></td><td>UK</td></tr>
            <tr><td>Cycle Initial Bike Company</td><td>USA</td><td>USA</td><td></td><td>UK</td></tr>
            <tr><td>Sports Store</td><td>USA</td><td>USA</td><td></td><td>INDIA</td></tr>
            <tr><td>Locks Company</td><td>UK</td><td>USA</td><td></td><td>USA</td></tr>
            <tr><td>Famous Bike Shop</td><td>USA</td><td>USA</td><td></td><td>USA</td></tr>
        </tbody>`);

var tableHead = (`
    <thead>
        <tr>
            <th></th>
            <th class="group-word">Priority</th>
            <th class="group-word">Status</th>
            <th class="group-word">Price</th>
            <th class="group-word">Order Data</th>
        </tr>
    </thead>`);

function triggerTableSorter() {
    $("table").tablesorter({
        theme : 'blue',
        widgets: ['group', 'filter']
    });
}

function createTable() {

    var sortColumnCount = $(".groupingValue").val();

    var tableSorter = $("<table></table");

    tableSorter.addClass("tablesorter").attr("data-sortlist", "[[" + sortColumnCount +", 1]]")
        .append(tableBody).append(tableHead);

    $(".createTable").append(tableSorter);

    triggerTableSorter();
}

function updateTableSorter(sortColumnCount) {
    $(".createTable").find("table").remove();
    createTable();
}