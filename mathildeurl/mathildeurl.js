///ouvertur url
var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('url');
urlchercher=data.urlchercher

console.log(urlchercher); request = require('request');cheerio = require('cheerio');

      request('https://www.google.fr/search?q='+urlchercher+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei', function (error, response, html) {
             var $ = cheerio.load(html);
             var url = $('.g .s cite').first().text().trim();
                // $('cite').each(function(i, element){
                  //  var a = $(this);
   url=url.replace(new RegExp("\\b" + "- " + "\\b","gi"),"").toLowerCase(); 

                    //    if(i==0){chrome(a.text())}//on prends la premiere occurence (url) et on ouvre
chrome(url)
                    return false
                //}
                //);//fin each
});//fin request


/////////////////////////////////////
////////essaie pas concluant §§§§§§§§§§§§§§!!!!!!!!!!!!!!!!!!



function url(urlchercher){
//urlchercher=data.urlchercher
url="https://www."+urlchercher
console.log('url à chercher'+urlchercher)
url=url.replace(new RegExp("\\b" + " " + "\\b","gi"),"").toLowerCase();
console.log(url)
//+urlchercher
// .com/
if (urlchercher=="T411"){url=' '+url+'.ch/';chrome(url);return false}

request({ url : url+'.fr/',timeout: 1800  }, function(err){if (err!==null){console.log('err1');
request({ url : url+'.org/',timeout: 1800 }, function(err){if (err!==null){console.log('err2');
request({ url : url+'.com/',timeout: 1800 }, function(err){if (err!==null){console.log('err3');
request({ url : url+'.net/',timeout: 1800 }, function(err){if (err!==null){console.log('err4');
request({ url : url+'.gouv/',timeout: 1800 },function(err){if (err!==null){console.log('err5');


}//fin err 5
else {console.log(".gouv");url=' '+url+'.gouv/';chrome(url)}
})//fin request 5	

}//fin err 4
else {console.log(".net");url=' '+url+'.net/';chrome(url)}
})//fin request 4


}//fin err 3
else {console.log(".com");url=' '+url+'.com/';chrome(url)}
})//fin request 3	

}//fin err 2
else {console.log(".org");url=' '+url+'.org/';chrome(url)}
})//fin request 2

}//fin err 1
else {console.log(".fr");url=' '+url+'.fr/';chrome(url)}
})//fin request 1	
	}

function chrome(url){console.log('on envoie'+url);
  var exec = require('child_process').exec;
  var process = '"C:\\Program Files\\Mozilla Firefox\\firefox.exe" '+url
  console.log(process)
  var child = exec(process);
  return
}//fin fnct chrome

} 
