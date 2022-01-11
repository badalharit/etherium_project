// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract demo{
    uint number;

    function mySetter(uint _number) public{
        number = _number+1;
    }

    function myGetter() public view returns(uint) {
        return number;
    }

}