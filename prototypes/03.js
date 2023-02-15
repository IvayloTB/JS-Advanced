function extensibleObject (){
    function ExtensibleObject(){}
    ExtensibleObject.prototype.extend = function (tenplate) {
        Object.entries(tenplate).forEach(([key, value]) => {
            if(value instanceof Function) {
                Object.getPrototypeOf(this)[key] = value;
            }else{
                this[key] = value;
            }
        });
    }
    return new ExtensibleObject();
}