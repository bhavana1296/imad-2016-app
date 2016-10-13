var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    'article-one':{Title:'Article One|Bhavana', Heading:'Article-one',Content:'This is article one. This is article one. This is article one. This is article one. This is article one. This is article one. '},
    'article-two':{Title:'Article Two|Bhavana', Heading:'Article-two',Content:'This is article two. This is article two. This is article two. This is article two. This is article two. This is article two. '},
    'article-three':{Title:'Article Three|Bhavana', Heading:'Article-three',Content:'This is article three. This is article three. This is article three. This is article three. This is article three. This is article three. '},
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString()); 
});

function createTemplate(data){
    Title=data.Title;
    Heading=data.Heading;
    Content=data.Content;
    var htmlTemplate=
        `<html>
        <head>
            <title>${Title}</title>
            <link href="/ui/style.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width scale=1"/>
        </head>
        <body>
            <div class="container">
                <h1>${Heading}</h1>
                <hr>
                <p>${Content}</p>
            </div>
        </body>
        </html>`;
        return htmlTemplate;
}


app.get('/ui/cat.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cat.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
