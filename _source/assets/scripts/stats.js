var request = new XMLHttpRequest();
var url = '//www.spore.com/rest/stats';

if(request) {
 request.open('GET', url, true);
 request.withCredentials = "true";
 request.send();
}

var invocation = new XMLHttpRequest();
<<<<<<< HEAD
var url = '//www.spore.com/rest/stats';
=======
var url = 'http://www.spore.com/rest/stats';
>>>>>>> 138c81e89ef2ba320b431b798e644676a409a1f1
var body = 'Arun';

 if(invocation)
{
    invocation.open('POST', url, true);
    invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
    invocation.setRequestHeader('Content-Type', 'application/xml');
    invocation.send(body);
}
