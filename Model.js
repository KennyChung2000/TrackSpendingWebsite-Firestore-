    
       
    
        //Firebase連線
        const firebaseConfig = {
          apiKey: "AIzaSyCh-jnc2fmvCTKyYFPiLFuV2wR-yhfTXtA",
          authDomain: "todolist-practice-da748.firebaseapp.com",
          projectId: "todolist-practice-da748",
          storageBucket: "todolist-practice-da748.appspot.com",
          messagingSenderId: "332098523145",
          appId: "1:332098523145:web:b634c0d6118256682ca8d8"
        };

        //初始化 Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        //上傳資料
        function save(time_select,category,cash,remark) {                                                                                                                      //儲存輸入資料
            if(cash!=""  & category!="項目" ){
                //上傳
                db.collection('users')
                .add({
                    time:time_select,
                    type:category,
                    money:cash,
                    title:remark
                })
                .then(function(docRef) {
                    console.log('Document written with ID: ', docRef.id)
                    db.collection('users')
                    .doc(docRef.id)
                    .set(
                        {
                        id: docRef.id
                        },
                        { merge: true }
                    )
                })
                .catch(function(error) {
                    console.error('Error adding document: ', error)
                })
            }
            else{
                alert("未輸入金額或選擇項目");
            }
        }

      
        //監聽firebase
        const observer = db.collection('users').onSnapshot(docSnapshot => {
        docSnapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
                console.log('New user: ', change.doc.data());
                add_list( change.doc.data()['time'],change.doc.data()['type'],change.doc.data()['money'], change.doc.data()['title'],change.doc.data()['id'])
            }
            else if (change.type === 'modified') {
                console.log('Modified user: ', change.doc.data());
                add_list( change.doc.data()['time'],change.doc.data()['type'],change.doc.data()['money'], change.doc.data()['title'],change.doc.data()['id'])
            }
            else if (change.type === 'removed') {
                console.log('Removed user: ', change.doc.data());
            }
        });
        }, err => {
        console.log(`Encountered error: ${err}`);
        });
        
        
        //刪除資料
        $("#tbody1").on('click', 'button', function () {
            //document.write();
            $(this).closest('tr').remove();
            var deletenum = $(this).parent().next().text()
            console.log(deletenum)
            db.collection('users')
            .doc(deletenum)
            .delete()
            .then(() => console.log('Document successfully deleted!')) 
        });
        



  