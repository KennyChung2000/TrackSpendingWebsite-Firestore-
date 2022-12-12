//取得頁面上的資料
function save_button(){
    //上傳資料
    save(   
            document.getElementById("time_value").value,
            document.getElementById("button1").innerHTML,
            document.getElementById("cash_input").value,
            document.getElementById("remark").value
    );
}

//array宣告
var data_array=[];
var search_array=data_array;

//將資料存進array
function save_array(time,type,money,note,del_id){
    let data={
        time1:time, 
        type1:type, 
        money1:parseInt(money, 10),
        note1:note ,
        del_id1:del_id
    }
    data_array.push(data); 
}

//資料排序
function sort_array(sort_by,sorted_data_array){
    //以輸入值(sort_by)做排序
    switch (sort_by) {
        case 'money':
            sorted_data_array = sorted_data_array.sort(function (a, b) {
                return a.money1 > b.money1 ? -1 : 1;
            });
          break;

        case 'time':
            sorted_data_array = sorted_data_array.sort(function (a, b) {
                let dat_ar=a.time1.split("/")
                let dat1=dat_ar[2]+dat_ar[0]+dat_ar[1]
                dat_ar=b.time1.split("/")
                let dat2=dat_ar[2]+dat_ar[0]+dat_ar[1]
            return  dat1> dat2 ? -1 : 1;
        });
        break;
        
        case 'type':
            sorted_data_array = sorted_data_array.sort(function (a, b) {
            return a.type1 > b.type1 ? -1 : 1;
        });
        break;
    }
    console.log(sorted_data_array);
    console.log(data_array);
    //刪除目前page排序方式
    remove_page_data();
    //印出排序好的陣列
    print_data(sorted_data_array)
}

//範圍選取資料
function select_array(select_data_array){
    // var select_by= document.getElementById("select_by").value
    var select_sign=document.getElementById("select_sign").value
    var select_data=document.getElementById("select_data").value
    console.log(select_data_array)
    var select_array=[];
    switch(select_sign){
        case'>':
            select_array = select_data_array.filter(function(a){ 
                return a.money1>select_data;
            });
            break;
        case'>=':
            select_array = select_data_array.filter(function(a){ 
                return a.money1>=select_data;
            });
            break;
        case'<':
            select_array = select_data_array.filter(function(a){ 
                return a.money1<select_data;
            });
            break;
        case'<=':
            select_array = select_data_array.filter(function(a){ 
                return a.money1<=select_data;
            });
            break;
    }
   
    console.log(select_array)
    search_array=select_array
    remove_page_data();
    print_data(select_array)

}

//依順序新增page項目
function print_data(sorted_data_array){
    var i=0;
    while(sorted_data_array[i]){
        add_list(sorted_data_array[i].time1,
            sorted_data_array[i].type1,
            sorted_data_array[i].money1,
            sorted_data_array[i].note1,
            sorted_data_array[i].del_id1
            );  
        i++;  
    }
}

//刪除陣列刪除的元素
function delete_data_array(data_id){
    var i=0;
    while(data_array[i].del_id1 != data_id){   
        i++;
        if(i>data_array.length){
            break;
        }
    }
    data_array.splice(i,1)
    console.log(data_array);
}

//查詢資料
function search_data_check(){ 
    //獲取使用者輸入條件
    var search_time=document.getElementById("month").value
    var search_time_day=document.getElementById("day").value
    var search_time_year=document.getElementById("year").value
    var search_type=document.getElementById("type_search").value
    var search_note = document.getElementById("note_search").value
    
    var search_time_Boolean=false
    var search_time_day_Boolean=false
    var search_time_year_Boolean=false
    var search_type_Boolean=false
    var search_note_Boolean=false 

    //初始化放符合條件資料的陣列
    search_array=[];
    var i=0;
    var j=0;
    //找符合條件的資料
    while(data_array[i]){
        if(search_time==""){search_time_Boolean=true}
        if(search_time_day==""){search_time_day_Boolean=true}
        if(search_time_year==""){search_time_year_Boolean=true}
        if(search_type==""){search_type_Boolean=true}
        if(search_note==""){search_note_Boolean=true}
        
        var date_Array = data_array[i].time1.split("/");
        console.log(date_Array)
        console.log(date_Array[0]==search_time)
        console.log(date_Array[1]==search_time_day)
        console.log(date_Array[2]==search_time_year)

        if( //(search_time_Boolean || data_array[i].time1==search_time) &&
            (search_time_Boolean || date_Array[0]==search_time) &&
            (search_time_day_Boolean || date_Array[1]==search_time_day) &&
            (search_time_year_Boolean || date_Array[2]==search_time_year) &&
            (search_type_Boolean || data_array[i].type1==search_type) &&
            (search_note_Boolean || data_array[i].note1==search_note)
            ){
            search_array[j]=data_array[i];
            j++;
        }
        i++;
    }
    //刪除目前頁面的資料
    remove_page_data();
    //印出搜尋到的頁面資料
    print_data(search_array);
}

