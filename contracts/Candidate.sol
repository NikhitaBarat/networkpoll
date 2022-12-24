// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Struct for a candidate
    struct Candidate {
        string name;
        uint voteCount;
    }

    // Mapping from voter address to a boolean value
    // true if the voter has already voted, false otherwise
    mapping(address => bool) public voters;

    // List of candidates
    Candidate[] public candidates;

    // Address of the contract owner
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Function to add a new candidate
    function addCandidate(string memory _name) public {
        require(msg.sender == owner, "Only the contract owner can add candidates.");
        candidates.push(Candidate(_name, 0));
    }

    // Function to cast a vote
    function vote(uint _candidateIndex) public {
        // Ensure that the voter has not already voted
        require(!voters[msg.sender], "You have already voted.");

        // Increment the vote count for the chosen candidate
        candidates[_candidateIndex].voteCount++;

        // Set the mapping value to true to prevent the voter from voting again
        voters[msg.sender] = true;
    }

    // Function to get the total number of votes for a particular candidate
    function getVoteCount(uint _candidateIndex) public view returns (uint) {
        return candidates[_candidateIndex].voteCount;
    }

    // Function to get the winner of the election
    function getWinner() public view returns (uint) {
        uint winningIndex = 0;
        uint winningVotes = 0;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > winningVotes) {
                winningIndex = i;
                winningVotes = candidates[i].voteCount;
            }
        }
        return winningIndex;
    }
}
