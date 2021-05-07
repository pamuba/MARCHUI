document.addEventListener('DOMContentLoaded', ()=>{
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline',
            // zoomType:'x'
            // zoomType:'y'
            zoomType:'xy'
        },
        credits:{
            // enabled:false
            text:"my site",
            href:'https://google.com',
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize:"12px",
                color:"red"
            }
        },
        tooltip:{
            // animation:false,
            // backgroundColor:'#333333',
            // borderColor:'red',
            // borderRadius:20,
            // followPointer:true,
            // style:{
            //     color:'#ffffff'
            // },
            // shared:true,
            // formatter(){
            //     return `<strong>X value</strong> - ${this.x} <strong>Y value</strong> - ${this.y}`
            // }

            formatter(){
                let s = `<strong>X is:</strong> ${this.x}`;
                console.log(this)
                this.points.forEach(function(point){
                    s+=`<br>Y is: ${point.y} - ${point.series.name}`
                });
                return s;
            },
            shared:true
        },
        title:{
            text:'FRUITS CHART'
        },
        colors:['#1c110a', '#e4d6a7', '#e9b44c', '#9b2915', '#50a2a7'],
        yAxis:{
            title:{
                text:'Fruits Exported'
            }
        },
        xAxis: {
            categories:['Apples', 'Oranges', 'Grapes']
        },
        series:[
            {
                name:'John',
                data:[3,2,3,70,2,30,10,2,3]
            },
            {
                name:'Jim',
                data:[1,2,3,4,2,3,100,2,3]
            },
            {
                name:'Jill',
                data:[1,50,3,5,20,3,1,2,3]
            },
            {
                name:'Joan',
                data:[1,10,3,5,20,39,100,2,3]
            }
        ]
    })
})