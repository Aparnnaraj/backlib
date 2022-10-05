const express =require('express');
const cors=require('cors');
const BookData=require('./models/bookData');
const app=new express();
app.use(cors());
app.use(express.json())
email="admin";
password="123456";

app.post('/login',(req,res)=>{
ree.render(login);
})
app.post('/signup',(req,res)=>{
    res.render("signup");
})
app.post('/addbook',function(req,res){
    var item={
        bookTitle:req.body.title,
        bookAuthor:req.body.author,
        bookStatus:req.body.status,
        bookDuedate:req.body.duedate
        
    }
    var data=BookData(item);
    data.save();
    console.log(data);
    BookData.find().then(function(data){
        res.send(data);
        console.log(data);
    })

})

app.get('/booklist',function(req,res){
    
    CourseData.find()
                .then(function(courses){
                    res.send(courses);
                });
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Ready on 3000"); 
  });
