console.log("Hello");
 // variable is js
     let a=10;
     
       // while loop

        let ans=10;
        
        while(ans>0){
            console.log(ans);
            ans--;

        }

        //  check the given  no is prime or not 

         let num=11;
         let isPrime=true;

        
          for(let i=2;i*i<=num ; i++){
             if(num%i==0){
                     isPrime=false;
             }

          }

         if(isPrime==true){
            console.log("given no is prime");
         }else{
            console.log("given no is  not a prime");
         }

         // function  in js 
           
         function   sayHello(){
              console.log("Hello");

         }
           sayHello();

           // function with parameter 
         
            function mul(num1,num2){

                  return num1*num2;

            }
            console.log(mul(1,2));

         // stroing  function  in a variable 

           

           let ab=   function store(sum1,sum2){
                 return  sum1*sum2;


           }
            
               console.log(10*20);
               