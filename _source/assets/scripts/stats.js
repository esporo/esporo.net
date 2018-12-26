var request = new XMLHttpRequest();
var url = '//www.spore.com/rest/stats';

if(request) {
 request.open('GET', url, true);
 request.withCredentials = "true";
 request.send();
}

var invocation = new XMLHttpRequest();
var url = '//www.spore.com/rest/stats';
var body = 'Arun';

 if(invocation)
{
    invocation.open('POST', url, true);
    invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
    invocation.setRequestHeader('Content-Type', 'application/xml');
    invocation.send(body);
}
