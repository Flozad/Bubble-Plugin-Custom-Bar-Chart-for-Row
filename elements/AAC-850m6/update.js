function(instance, properties, context) {
    
    if ('chart' in instance.data){
    instance.data.chart.destroy();
    }

    const pieId = instance.data.id;
    const ctx = document.getElementById(pieId);
    
    
    

    var barColors = properties.barcolor.split(",");
    var xValues = properties.bartags.split(",");
    var yValues = properties.barvalue.split(",");

    const chart = new Chart(ctx, {
                  type: "bar",
                  data: {
                    labels: xValues,
                    datasets: [{
                      backgroundColor: barColors,
                      data: yValues
                    }]
                  },
                    options: {
                        
                        plugins: {
                            tooltip: properties.tooltip
                        },
                        hover: {
                            mode: null
                        },
                        legend: {display: false}
                    }
        });
    
    instance.data.chart = chart;
    



}