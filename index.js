function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return "look happy";
    }

    function returnsAnAnonymousFunction(){
    return () => "before all";

    }
}