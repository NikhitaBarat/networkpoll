// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
  // Struct to hold information about a voter
  struct Voter {
    address addr; // Ethereum address of the voter
    bool voted; // Flag to indicate if the voter has already voted
  }

  // Mapping to store information about all voters
  mapping (address => Voter) public voters;

  // Candidate names
  string[] public candidates;

  // Number of votes received by each candidate
  uint[] public votesReceived;

  // Event to be emitted when a voter casts their vote
  event VoterCastedVote(address voter);

  // Constructor to initialize contract with a list of candidates
  constructor(string[] memory candidateNames) {
    candidates = candidateNames;
    votesReceived = new uint[](candidateNames.length);
  }

  // Function to allow a voter to cast their vote
  function vote(uint candidate) public {
    // Ensure that the voter has not already voted
    require(voters[msg.sender].voted == false, "You have already voted.");

    // Ensure that the candidate number is valid
    require(candidate < candidates.length, "Invalid candidate.");

    // Mark the voter as having voted
    voters[msg.sender].voted = true;

    // Increment the vote count for the selected candidate
    votesReceived[candidate]++;

    // Emit an event to indicate that the voter has cast their vote
    emit VoterCastedVote(msg.sender);
  }

  // Function to get the total number of votes received by a particular candidate
  function getVotesReceived(uint candidate) public view returns (uint) {
    return votesReceived[candidate];
  }
}
