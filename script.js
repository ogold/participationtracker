var numstudents = 3;

function plus(x) {
  y = x.charAt(0);
  z = document.getElementById(y).innerHTML;
  document.getElementById(y).innerHTML = parseFloat(z) + 1;
}

function minus(x) {
  y = x.charAt(0);
  z = document.getElementById(y).innerHTML;
  document.getElementById(y).innerHTML = parseFloat(z) - 1;
}


function addStudent() {
    var textnode = document.createTextNode(document.getElementById("textentry").value);
    var node = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    window.numstudents = window.numstudents + 1;
    x = window.numstudents.toString();
    y = x + "num";
    z = x + "dex";
    node.className = "checkbox"
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.className = "checkz";
    label.appendChild(checkbox);
    label.appendChild(textnode);
    node.appendChild(label);
    localStorage.setItem(x, document.getElementById("textentry").value);
    localStorage.setItem(y, x);
    localStorage.setItem(z, node);
    document.getElementById("myClass").appendChild(node);
    document.getElementById("textentry").value = "";
}

function listz() {
  for (i = window.numstudents; i > 0; i--) {
    q = i + "dex";
    r = localStorage.getItem(q);
    if (r != null) {
      document.getElementById("myClass").appendChild(r);
    }
  }
}

function deleteStudent(){
  x = document.getElementsByClassName("checkz");
  for (i = 0; i < x.length; i++) {
    if (x[i].checked) {
      y = x[i];
      y.parentNode.parentNode.removeChild(y.parentNode);
      window.numstudents = window.numstudents - 1;
    }
  }
}

function refresh() {
  var tablez = getElementById("classTable");
  for (i = window.numstudents; i > 0; i--) {
    q = localStorage.getItem(i.toString())
    if (q != null) {
      var rowz = tablez.insertRow(0);
      var cell1 = rowz.insertCell(0);
      var cell2 = rowz.insertCell(1);
      var cell3 = rowz.insertCell(2);
      var cell4 = rowz.insertCell(3);
      cell1.innerHTML = "-";
      cell2.innerHTML = localStorage.getItem(i.toString())  + "num";
      cell3.innerHTML = "0";
      cell4.innerHTML = "+";
    }
  }
}

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});
