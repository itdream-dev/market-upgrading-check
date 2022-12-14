// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
import "../interfaces/IRoyaltyEngine.sol";

contract TestRoyaltyEngine is IRoyaltyEngine{
    function getRoyalty(address tokenAddress, uint256 tokenId, uint256 value) public override returns(address payable[] memory recipients, uint256[] memory amounts) {
        recipients = new address payable[](1);
        recipients[0] = 0xfcC6f84bF615B0A2001B2e73315d285745Fb3821;
        amounts = new uint256[](1);
        amounts[0] = 3;
    }

    function getRoyaltyView(address tokenAddress, uint256 tokenId, uint256 value) public view override returns(address payable[] memory recipients, uint256[] memory amounts) {
        recipients = new address payable[](1);
        recipients[0] = 0xfcC6f84bF615B0A2001B2e73315d285745Fb3821;
        amounts = new uint256[](1);
        amounts[0] = 3;
    }
}
