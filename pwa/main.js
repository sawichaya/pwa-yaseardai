// document.addEventListener("DOMContentLoaded", () => {
//     let db = firebase.firestore()
        
// })

// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// db.collection("category").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
showDropDownList()
function showDropDownList(){
    let content = '<select id="menuList">'
    for (i = 0 ; i < 10 ; i++){
        text = '<option value="โยเกิร์ต' + 'i' + '" id="' +'i'+'">โยเกิร์ต'+ i + '</option>'
        content = content.concat(text)
    }
    content = content.concat('</select>')
    document.getElementById("dropdown").innerHTML = content
}

