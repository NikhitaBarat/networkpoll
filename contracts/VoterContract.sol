// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import ERC20Votes
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20VotesComp.sol";

abstract contract VoterContract is ERC20Votes {
    // mapping with voter id and public key
    mapping(address => string) public VoterPubKeyList;

    // mapping with voteer id and voter's address
    mapping(string => address) public linkedVoterId;

    // transfer coin to voter

    // transfer coin to candidate
    constructor() ERC20Votes() {}


    // ERC20Votes Consists:

    // checkpoints(account, pos)
    // numCheckpoints(account)
    // delegates(account)

    // getVotes(account)
    function getCandidateVotes(address candidateAccount) public view {
        // VoterPubKeyList[candidate] = "0xB...JKLAS87JHKSA8H";
      require(candidateAccount != address(0), 'Error - Candidate account cannot be zero address');
      getVotes(candidateAccount);        
    }


    // getPastVotes(account, blockNumber)

    // getPastTotalSupply(blockNumber)
    
    // delegate(delegatee)
    
    // delegateBySig(delegatee, nonce, expiry, v, r, s)
    function delegateBySignature(address candidate, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public {
      delegateBySig(candidate, nonce, expiry, v, r, s);
    }
    // _maxSupply()
    
    // _mint(account, amount)
    function mint(address to, uint256 amount) public {
      _mint(to, amount);
    }

    // _burn(account, amount)


    // _afterTokenTransfer(from, to, amount)
    function afterTokenTransfer(address _from, address _to, uint256 amount) public {
      require(_to != address(0), 'Error - ERC20 transfer to zero address');
      require(amount != 0, 'Error - ERC20 cannot transfer zero amount');
      _afterTokenTransfer(_from, _to, amount);
    }
    // _delegate(delegator, delegatee)
}
