document.write('<script  src="Model.js"></script>');

    //改變選擇類別 
    function change(x) {                                                                                                                    //改變下拉選單
        document.getElementById("button1").innerHTML = x;
    }

    //新增畫面資料
    function add_list( time1, type1, money1,note1 ,del_id) {
        if(!(typeof del_id==="undefined")){
            let row_1 = document.createElement('tr');
            let heading_2 = document.createElement('td');
            heading_2.innerHTML = time1;
            let heading_3 = document.createElement('td');
            let heading_4 = document.createElement('td');
            heading_4.innerHTML = money1;
            let heading_5 = document.createElement('td');
            heading_5.innerHTML = note1;
            let heading_6 = document.createElement('button')
            heading_6.innerHTML = 'Delete';
            let heading_7 = document.createElement('td');
            heading_7.appendChild(heading_6);
            let heading_8 = document.createElement('td');
            heading_8.innerHTML = del_id;
            heading_8.style.display = 'none';
            
            row_1.appendChild(heading_2);
            row_1.appendChild(heading_3);
            row_1.appendChild(heading_4);
            row_1.appendChild(heading_5);
            row_1.appendChild(heading_7);
            row_1.appendChild(heading_8);

            document.getElementById('tbody1').appendChild(row_1);
            change_span(type1)
        }                                                                                                      //新增表格
        
    }

    //更改新增資料的顯示
    function change_span(text) {
        var x = document.getElementById("tbody1");                                     /////////選擇span標籤
        var el = x.querySelectorAll('tr');
        var elLen = el.length;
        var el1 = el[elLen - 1].querySelectorAll('td');
        var elbut = el[elLen - 1].querySelector('button');
        
        var elLen1 = el1.length;

        var t = document.createElement("SPAN");
        var t1 = document.createTextNode(text);
        t.appendChild(t1);
        el1[elLen1 - 5].appendChild(t);
        var el2 = el1[elLen1 - 5].querySelector('SPAN');
        
        var category
        if (text === '食物') category = 'badge badge-success'                          ////////依類別設置badges
        else if (text === '服裝') category = 'badge badge-secondary'
        else if (text === '交通') category = 'badge badge-danger'
        else if (text === '水電') category = 'badge badge-warning'
        else if (text === '生活用品') category = 'badge badge-info'
        else if (text === '娛樂') category = 'badge badge-dark'
        else category = 'badge badge-primary'

        el2.setAttribute('class', category);                                            /////////設定class
        elbut.setAttribute('class', 'btn btn-danger'); 
        elbut.setAttribute('type', 'button');
    }

    //日期選擇器
    $('.datepicker').datepicker()
    
   
    



  