// 获取key值
var allLineKey = [];
function getKey(){
    for(var i in info.lineInfo){
        allLineKey.push(i);
    }
}
getKey();

// 获取name值
var allLineName = [];
function getName(){
    for(var i in info.lineMsg){
        allLineName.push(info.lineMsg[i].name);
    }
}
getName();


// 搜索 / 选择
var button = document.getElementsByClassName("btn")[0];
var search = document.getElementById("search");
var lineSelect = document.getElementById('lineSelect');

button.onclick = checkinput;
search.onkeyup = function(event){
    if (event.keyCode == "13") {
        checkinput()
    }
    if(search.value.trim()==''){
        button.setAttribute('disabled','disabled')
    }else{
        button.removeAttribute('disabled')
    }
}

function checkinput(){
    var chinese = new RegExp(/[\u4e00-\u9fa5]+/);
    if(chinese.test(search.value)){
        drawPerLine(search.value)
    }else {
        alert('不是中文字符')
    }
}

var str;
for(var i=0;i<allLineName.length;i++){
    str += '<option value="' + allLineKey[i].replace('line','') + '"'
    if(i == 0){
        str += ' selected>'
    }else{
        str += '>'
    }
    str += allLineName[i] + '</option>'
}
lineSelect.innerHTML = str;
lineSelect.onchange = function (){
    var optionvalue = lineSelect.options[lineSelect.options.selectedIndex].value
    drawPerLine(optionvalue)
}

var place = document.getElementById("place");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');//获取该canvas的2D绘图环境对象
var canvastwo = document.getElementById("canvastwo");
var ctxtwo = canvastwo.getContext('2d');

// 加载1号线
drawPerLine()
// 加载所有线
drawAllLine()

// 绘制路线图
function drawLine(val,ctx,isDefault){//isDefault为标识符，是否为全图绘制
    for(var i in info.lineInfo){
        if(i == val){
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.font = '40px 微软雅黑';
            ctx.fillText('北',150,750);
            var thisMsg = info.lineMsg[i+'MSG'];
            var fillName = isDefault?'all':thisMsg.name;
            ctx.fillText(fillName,150,150);
            ctx.fillStyle = 'black';
            ctx.font = '12px arial';

            for(var x=0;x<info.lineInfo[i].length;x++){
                var now = info.lineInfo[i][x];
                var ordinate = now.coOrdinate;
                var drawColor = thisMsg.color;
                var text = isDefault?'':now.name;
                var afterOrdinate = ordinate.split(",")
                var calcuX;
                var calcuY;

                if(isDefault){//判断是哪一条线路
                    calcuX = eval(thisMsg.defaultCal.x);//defaultCal的坐标经过不一样的变换以适应细节
                    calcuY = eval(thisMsg.defaultCal.y);
                }else{
                    calcuX = eval(thisMsg.offsetCal.x);//offsetCal的坐标经过一样的变换
                    calcuY = eval(thisMsg.offsetCal.y);
                }

                ctx.strokeStyle = drawColor;
                ctx.lineTo(calcuX,calcuY);//添加一个新点，然后创建从moveTo方法的点到指定点（X，Y）的线条
                ctx.fillText(text,calcuX,calcuY);
                if(!isDefault){
                    ctx.textBaseline = "top";  //基线
                    ctx.textAlign = "end"
                }
                ctx.moveTo(calcuX,calcuY)//可以看成起点
                ctx.arc(calcuX,calcuY,4,0,360*Math.PI/180,false);//绘制圆形，表示站点的位置
                ctx.closePath();
                ctx.stroke();//会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。
            }
            break;
        }
    }
}

// 获取线路
function getLine(val){
    if(!val) return;
    let line = [];
    for(var i in info.lineInfo){
        for(var j in info.lineInfo[i]){
            if(info.lineInfo[i][j].name.indexOf(val) != -1){
                line.push(i)
                place.innerText = place.innerText.length?place.innerText+', '+info.lineMsg[i+'MSG'].name:'位于'+info.lineMsg[i+'MSG'].name
            }
        }
    }
    place.innerText = place.innerText.length?place.innerText:'未知'
    return line;
}

// 处理数据
// 绘制细节图
function drawPerLine(val){
    var ordinate,drawColor,text,afterOrdinate;
    var lineChineseName;

    place.innerText = ""

    if(!val){
        // 一打开页面加载的内容
        canvas.height=canvas.height;
        drawLine(allLineKey[lineSelect.options.selectedIndex],ctx)
    }else{
        val = val.trim();
        var letter = new RegExp(/^[A-Za-z]+$/);
        // 如果是英文，代表下拉选择的，则绘制路线，
        // 如果是中文，代表输入的，则打印路线名。
        if(letter.test(val)){
            if(allLineKey.indexOf('line'+val) != -1){
                val = 'line'+val;
                canvas.height=canvas.height;
                drawLine(allLineKey[allLineKey.indexOf(val)],ctx)
            }
        }else{
            let line = getLine(val);
            canvas.height=canvas.height;
            for(var i = 0; i < line.length;i++){
                drawLine(allLineKey[allLineKey.indexOf(line[i])],ctx)
            }
        }

    }
}
// 绘制全览图
function drawAllLine(){
    for(var i in info.lineInfo){
        drawLine(i,ctxtwo,true);
    }
}

// 距离，备用功能
function getInstance(coOrdinate1,coOrdinate2){
    var coOrdinate1X =  coOrdinate1.split(',')[0]
    var coOrdinate1Y =  coOrdinate1.split(',')[1]
    var coOrdinate2X =  coOrdinate2.split(',')[0]
    var coOrdinate2Y =  coOrdinate2.split(',')[1]

    var afterX = coOrdinate1X-coOrdinate2X;
    afterX = afterX>=0?afterX:-afterX;
    var afterY = coOrdinate1Y-coOrdinate2Y;
    afterY = afterY>=0?afterY:-afterY;
    var distance = Math.sqrt(afterX*afterX + afterY*afterY)
    console.log(distance);
}
getInstance('113.23861,23.070983','113.23904,23.084633')


