// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IpfsFileStorage {
  uint256 public ipfsHash;

  function set(uint256 x) public {
    ipfsHash = x;
  }

  function get() public view returns(uint256){
    return ipfsHash;
  }
}
