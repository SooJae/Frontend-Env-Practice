/**
 * 예전에 사용하던 방법
 */
// function sum(a, b) {
//     return a + b;
// }

/**
 * IIFE
 */
// var math = math || {};
//
// (function() {
//     function sum(a,b){
//         return a+b;
//     }
//
//     math.sum = sum; // 외부에서 사용하기 위해
// })();

/**
 * ES2015 표준 모듈 시스템
 */

export function sum(a,b) {
    return a+b;
}
