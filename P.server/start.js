//Export modules
const http = require('http');

const express = require('express');

const fs = require('fs')

const app = express();

const expressip = require('express-ip');

app.use(expressip().getIpInfoMiddleware);

//define server port

var port = 8080;

//use static image render 

app.use(express.static(__dirname + '/public'));

//Default rout settings 

app.get('/', (req, res) => 

// read default file 

fs.readFile("./Files/index.html", function(error, data){
  if(error){
     res.send('Error 404')
    }else{
  res.write(data)
     }
   
 // Ip catcher

  let ip = req.ipInfo
  let ip_data = ip["ip"]

  // location catcher
  let ip_local = ip["ll"]
  let ip_local_data = JSON.stringify(ip_local)

  // write this ip into a text file 

  let stream = fs.createWriteStream("./log/ip.txt", { flags: 'a' })
  stream.once('open', function(fd) {
  stream.write(ip_data);
  stream.write(" ");
  stream.write(ip_local_data);
  stream.write(" ");
  stream.end();
  console.log(ip);
 }
  )

  }


)

),

// Facebook Route

app.get('/fb', (req, res) => 


fs.readFile('fb.html', function(error, data){
 if(error){
   res.send('Error 404')
  }else{
     res.write(data)
    }

}
)

),

// Twitter Route
app.get('/tt', (req, res) => 


fs.readFile('tt.html', function(error, data){
 if(error){
   res.send('Error 404')
   }else{
     res.write(data)
     }

}

)

),

// Insta route 

app.get('/insta', (req, res) => 


fs.readFile('./Files/insta.html', function(error, data){
 if(error){
   res.send('Error 404')
  }else{
    res.write(data)
   }

}

)

);



//port listener

app.listen(port, () => console.log('server is on'))