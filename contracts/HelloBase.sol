// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloBase {
    string public greeting = "Hello Base!";

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
