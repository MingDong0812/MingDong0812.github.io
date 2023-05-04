
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { getDatabase, ref, onChildAdded, push, set, child } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBFuLM6deyXq5LkQMrfSNNSs_2X9qlP6Sc",
    authDomain: "mingdong0812-3d5ff.firebaseapp.com",
    projectId: "mingdong0812-3d5ff",
    storageBucket: "mingdong0812-3d5ff.appspot.com",
    messagingSenderId: "460986178104",
    appId: "1:460986178104:web:96787838eb9b379262e4cd",
    measurementId: "G-535TFJRH2V",
    databaseURL: "https://mingdong0812-3d5ff-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const analystics = getAnalytics(app);

// export const fs = getFirestore(app);
const db = getDatabase(app);

const commentsRef = ref(db, 'posts/');
var num = 0;

onChildAdded(commentsRef, (data) => {
    addReply(data);
})

function addReply(data){
    num += 1;
    var text = '<tr><td>';
    text 		+= '<strong><h8 class="list-group-item-heading mb-8" style="text-align:left;">['+num+'] '+data.val().name+'</h8></strong>';
    text 		+= '<p class="list-group-item-text mb-8" style="text-align:left; font-size:15px">'+data.val().message+'</p></td></tr>';

    $('#view').prepend(text);
}

 
$('#btnReplay').on('click',function(e){
    e.preventDefault();
    var name = $('#name').val(), message = $('#message').val();
    if(name && message) {
        const postListRef = ref(db, 'posts');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            name:name,message:message
        });
        $('#message').val('');		
    }
});