function save_button(){
    save(   
            document.getElementById("time_value").value,
            document.getElementById("button1").innerHTML,
            document.getElementById("cash_input").value,
            document.getElementById("remark").value
    );
}

//list宣告
var data_array=[];

function save_array(time,type,money,note,del_id){
    let data={
        time1:time, 
        type1:type, 
        money1:parseInt(money, 10),
        note1:note ,
        del_id:del_id
    }
    data_array.push(data); 
}

function sort_array(sort_by){
    //以?值做排序
    switch (sort_by) {
        case 'money':
            data_array = data_array.sort(function (a, b) {
                return a.money1 > b.money1 ? -1 : 1;
            });
          break;

        case 'time':
        data_array = data_array.sort(function (a, b) {
            return a.time1 > b.time1 ? -1 : 1;
        });
        break;
        
        case 'type':
        data_array = data_array.sort(function (a, b) {
            return a.type1 > b.type1 ? -1 : 1;
        });
        break;
    }
    console.log(data_array);
    
    //刪除目前排序方式
    remove_page_data();

    //依順序新增page項目
    var i=0;
    while(data_array[i]){
        add_list(data_array[i].time1,
            data_array[i].type1,
            data_array[i].money1,
            data_array[i].note1,
            data_array[i].del_id
            );  
        i++;  
    }
    
}