document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container', {
        chart:{
            type:'area',
            zoomType:'xy'
        },
        title:{
            text:'Fruits Exported'
        },
        yAxis:{
            
            title:{
                text:'Fruits Eaten'
            }
        },
        xAxis:{
            alternateGridColor:'#b7cff7',
            categories:['Apples', 'Bananas', 'Oranges']
        },
        series:[{
            // data:[11,10,20,40,12]
            // data:[['John',10],['Jill',40],['Joan',33]]
            name:'PLOT OF FRUITS',
            negativeColor:'red',
            data:[11,10,-20,40,12,8,9,34,22,13]
            // data:[
            //     {
            //         name:'John',
            //         y:10,
            //         x:2
            //     },
            //     {
            //         name:'Jill',
            //         y:8,
            //         x:4
            //     }
            // ]
        }]
    })
})