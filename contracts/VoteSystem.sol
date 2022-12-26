// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VoteSystem {
  // the address of the contract owner
  address public owner;

  // the list of voters
  mapping(address => bool) public voters;

  // the list of candidates
  string[] public candidates;

  // the number of votes for each candidate
  uint[] public votes;

  // the flag to indicate if voting is open or closed
  bool public votingOpen;

  // the constructor function
  constructor() {
    owner = msg.sender;
    votingOpen = true;
  }

  // function to add a candidate to the list of candidates
  function addCandidate(string memory _candidate) public {
    require(votingOpen, "Voting is closed");
    require(candidates.length < 10, "Too many candidates");
    require(bytes(_candidate).length > 0, "Invalid candidate name");
    candidates.push(_candidate);
    votes.push(0);
  }

  // function to register a voter
  function registerVoter(address _voter) public {
    require(!voters[_voter], "Voter already registered");
    voters[_voter] = true;
  }

  // function to cast a vote
  function vote(uint _candidateIndex) public {
    require(voters[msg.sender], "Voter not registered");
    require(_candidateIndex < candidates.length, "Invalid candidate index");
    votes[_candidateIndex]++;
  }

  // function to close voting
  function closeVoting() public {
    require(msg.sender == owner, "Only the contract owner can close voting");
    votingOpen = false;
  }

  // function to get the total number of votes for a candidate
  function getVotes(uint _candidateIndex) public view returns (uint) {
    require(_candidateIndex < candidates.length, "Invalid candidate index");
    return votes[_candidateIndex];
  }

  // function to get the winner of the election
  function getWinner() public view returns (uint) {
    uint maxVotes = 0;
    uint winnerIndex = 0;
    for (uint i = 0; i < candidates.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        winnerIndex = i;
      }
    }
    return winnerIndex;
  }
}
