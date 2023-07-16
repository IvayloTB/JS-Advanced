class Sringer {
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(num){
        this.innerLength += num
    }

    decrease(num){
        if(this.innerLength -num < 0){
            this.innerLength = 0
        }else{
            this.innerLength -= num
        }
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            return `${this.innerString.substring(0, this.innerLength)}...`
        }else{
            return this.innerString;
        }
    }
}