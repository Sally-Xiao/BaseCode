// 方法1
// function Cash(number){
//     this.amount = parseFloat(number);
//  }
 
//  Cash.prototype.add = function(cash){
//    if(cash instanceof Cash){
//      return new Cash(this.amount + cash.amount);
//    }
//  }
 
//  Cash.prototype.valueOf = function(){
//    return this.amount;
//  }
 
//  Cash.prototype.toString = function(){
//    const amount = this.amount;
   
//    const a = Math.floor(amount/100);
//    const b = Math.floor((amount%100)/10); 
//    const c = amount - a*100 - b*10;
   
//    return `${a}元${b}角${c}分`;
//  }
 
//  Cash.add = function(){
//    const arrays = [].slice.call(arguments);
   
//    const sum = arrays.reduce((sum, cash)=>{
//      if(cash instanceof Cash){
//        sum += cash.amount;
       
//        return sum;
//      }
//    }, 0);
   
//    return new Cash(sum);
//  }
 
//  const cash1 = new Cash(105);
//  const cash2 = new Cash(66);
//  const cash3 = cash1.add(cash2);
//  const cash4 = Cash.add(cash1,cash2);
//  const cash5 = new Cash(cash1 + cash2);
 
//  console.log(`${cash3}`, `${cash4}`, `${cash5}`);

// 方法2, es6用法
class Cash{
    constructor(amount){
        this.amount = parseFloat(amount);
    }

    valueOf(){
        return this.amount;
    }

    toString(){
        const amount = this.amount;
   
        const a = Math.floor(amount/100);
        const b = Math.floor((amount%100)/10); 
        const c = amount - a*100 - b*10;
        
        return `${a}元${b}角${c}分`;
    }

    static add(){
        const arrays = [].slice.call(arguments);
   
        const sum = arrays.reduce((sum, cash)=>{
            if(cash instanceof Cash){
            sum += cash.amount;
            
            return sum;
            }
        }, 0);
        
        return new Cash(sum);
    }

    add(cash){
        if(cash instanceof Cash){
            return new Cash(this.amount + cash.amount);
        }
    }
}

const cash1 = new Cash(105);
const cash2 = new Cash(66);
const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1,cash2);
const cash5 = new Cash(cash1 + cash2);

console.log(`${cash3}`, `${cash4}`, `${cash5}`);