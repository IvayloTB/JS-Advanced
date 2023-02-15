function requestValidator(object) {
   // const [method, uri, version, message] = object
    const testMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const testVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const testUri = /[.\/]/g; //Cannot be empty string
    const testMsg = /[<>\\&'"]/g

    if (!testMethod.includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    
    if (!testUri.exec(object.uri) || object.uri === "" || !object.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!testVersion.includes(object.version)){
       throw new Error('Invalid request header: Invalid Version');
    }


    if(testMsg.exec(object.message) || !object.message === "" || !object.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message')
    }
    return object;
}
console.log(requestValidator({
     method: 'POST',
//
 //version: 'HTTP/2.0',
//message: 'rm -rf /*',
uri:'*'
}))