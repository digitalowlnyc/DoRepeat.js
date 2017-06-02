/**
 * Creator: Bryan Mayor
 * Company: Blue Nest Digital, LLC
 * Date: 6/1/17
 * Time: 22:27
 * License: (All rights reserved)
 */

DoRepeat = function() {
};

DoRepeat.schedule = function(func, waitTimeMilliseconds, numberOfCalls, callImmediately) {
    if(typeof callImmediately === 'undefined') {
        callImmediately = true;
    }

    var chainedPromise = Promise.resolve();

    for(var x=0; x<numberOfCalls; x++) {
        if(!callImmediately || x !== 0) {
            chainedPromise = chainedPromise.then(function() {
                return DoRepeat.wait(waitTimeMilliseconds);
            });
        }
        chainedPromise = chainedPromise.then(function() {
            func();
        });
    }

    return chainedPromise;
};

DoRepeat.wait = function(waitTimeMilliseconds) {
    return new Promise(function(resolve, reject) {
        var func = (function(startTime) {
            return function() {
                resolve();
            }
        })(new Date());

        setTimeout(func, waitTimeMilliseconds);
    });
};