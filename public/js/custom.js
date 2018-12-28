function triggerTableSorter() {
    $("table").tablesorter({
        theme : 'blue',
        sortList : [[1,0]],
        widgets: ['group', 'filter']
    });
}

function createTable(sortColumnCount) {
    var tableSorter = $("<table></table");

    tableSorter.addClass("tablesorter").attr("data-sortlist", "[[" + sortColumnCount, ", 1]]");
}