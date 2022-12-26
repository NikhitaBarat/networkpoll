// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EVotingVR3 {
    // The address of the contract owner
    address public owner;

    // The list of registered voters
    mapping(address => bool) public voters;

    // The list of candidates
    string[] public candidates;

    // The number of votes for each candidate
    uint[] public votes;

    // The total number of votes cast
    uint public totalVotes;

    // The state of the election (open or closed)
    bool public electionOpen;

    // The constructor sets the contract owner and initializes the candidates
    constructor() {
        owner = msg.sender;
        candidates = ["Candidate 1", "Candidate 2", "Candidate 3"];
        votes = new uint[](candidates.length);
        electionOpen = true;
    }

    // A function to register a voter
    function registerVoter(address _voter) public {
        // Only the contract owner can register voters
        require(msg.sender == owner, "Only the contract owner can register voters.");

        // A voter can only be registered once
        require(!voters[_voter], "This voter has already been registered.");

        voters[_voter] = true;
    }

    // A function to cast a vote
    function vote(uint _candidateIndex) public {
        // The election must be open
        require(electionOpen, "The election is closed.");

        // The voter must be registered
        require(voters[msg.sender], "You must be registered to vote.");

        // The candidate index must be valid
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        // Increment the vote count for the chosen candidate
        votes[_candidateIndex]++;
        totalVotes++;
    }

    // A function to close the election
    function closeElection() public {
        // Only the contract owner can close the election
        require(msg.sender == owner, "Only the contract owner can close the election.");

        electionOpen = false;
    }

    // A function to get the result of the election
    function getElectionResult() public view returns (uint[] memory) {
        // The election must be closed
        require(!electionOpen, "The election is still open.");

        return votes;
    }
}