// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;


// import ERC20 
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20VotesComp.sol";



abstract contract VoterContract is ERC20Votes {


  // mapping with voter id and public key
  mapping(address => string) public VoterPubKeyList;

  // mapping with voteer id and voter's address
  mapping(string => address) public linkedVoterId;

  // transfer coin to voter

  // transfer coin to candidate
  constructor() ERC20Votes() {

  }
  
  function getCandidateVotes(address candidate) public {
    VoterPubKeyList[candidate] = "0xB...JKLAS87JHKSA8H";
  }
  
  // ERC20Votes Consists:

  // checkpoints(account, pos)
  // numCheckpoints(account)
  // delegates(account)
  // getVotes(account)
  // getPastVotes(account, blockNumber)
  // getPastTotalSupply(blockNumber)
  // delegate(delegatee)
  // delegateBySig(delegatee, nonce, expiry, v, r, s)
  // _maxSupply()
  // _mint(account, amount)
  // _burn(account, amount)
  // _afterTokenTransfer(from, to, amount)
  // _delegate(delegator, delegatee)

}
