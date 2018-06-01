import Big from "big.js";
import operate from "./operate";
import isNumber from "./isNumber";

/** 
 * Given a button name and calculator data object as input,
 *  return an update calulator data object
 * 
 * calculator data object contains the following
 *  total:String    the current cumulative total
 *  next:String     the next number to operate total on
 *  operation:String +, -, x, ÷
 */

export default function calculate(obj, buttonName) {
    if (buttonName === "AC") {
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = operation(obj.total, obj.next, obj.operation);
            return {
                total: Big(result)
                    .div(Big("100"))
                    .toString(),
                next: null,
                operation: null
            };
        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            if (obj.next.includes(".")) {
                return {};
            }
            return {next: obj.next + "."};
        }
        return {next: "0."};
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null
            };
        } else {
            return {};
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return {next: (-1 * parseFloat(obj.next)).toString()};
        }
        if (obj.total) {
            return {total: (-1 * parseFloat(obj.total)).toString()};
        }
        return {};
    }

    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName
        };
    }

    if (!obj.next) {
        return {operation: buttonName};
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName
    };
    
}