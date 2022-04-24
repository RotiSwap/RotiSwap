pragma solidity =0.5.16;

import '../RotiERC20.sol';

contract ERC20 is RotiERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
